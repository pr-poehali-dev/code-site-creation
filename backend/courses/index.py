'''
Business: Manage courses and enrollments for students
Args: event - dict with httpMethod, queryStringParameters
      context - object with request_id attribute
Returns: HTTP response dict with courses data
'''
import json
import os
import psycopg2
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, X-User-Id',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    dsn = os.environ.get('DATABASE_URL')
    conn = psycopg2.connect(dsn)
    cur = conn.cursor()
    
    if method == 'GET':
        params = event.get('queryStringParameters') or {}
        user_id = params.get('userId')
        
        if user_id:
            cur.execute('''
                SELECT c.id, c.title, c.description, c.duration_hours, c.level, c.category, c.image_url, e.progress
                FROM courses c
                LEFT JOIN enrollments e ON c.id = e.course_id AND e.user_id = %s
            ''', (user_id,))
        else:
            cur.execute('SELECT id, title, description, duration_hours, level, category, image_url FROM courses')
        
        courses = []
        for row in cur.fetchall():
            course = {
                'id': row[0],
                'title': row[1],
                'description': row[2],
                'durationHours': row[3],
                'level': row[4],
                'category': row[5],
                'imageUrl': row[6]
            }
            if user_id and len(row) > 7:
                course['progress'] = row[7] if row[7] is not None else 0
                course['enrolled'] = row[7] is not None
            courses.append(course)
        
        cur.close()
        conn.close()
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'isBase64Encoded': False,
            'body': json.dumps({'courses': courses})
        }
    
    elif method == 'POST':
        body_data = json.loads(event.get('body', '{}'))
        action = body_data.get('action')
        
        if action == 'enroll':
            user_id = body_data.get('userId')
            course_id = body_data.get('courseId')
            
            cur.execute(
                'INSERT INTO enrollments (user_id, course_id, progress) VALUES (%s, %s, 0) ON CONFLICT (user_id, course_id) DO NOTHING',
                (user_id, course_id)
            )
            conn.commit()
            
            cur.close()
            conn.close()
            
            return {
                'statusCode': 200,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'isBase64Encoded': False,
                'body': json.dumps({'success': True})
            }
    
    cur.close()
    conn.close()
    
    return {
        'statusCode': 405,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'error': 'Method not allowed'})
    }
