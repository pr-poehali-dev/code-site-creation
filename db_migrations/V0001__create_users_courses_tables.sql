-- Create users table
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create courses table
CREATE TABLE IF NOT EXISTS courses (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    duration_hours INTEGER,
    level VARCHAR(50),
    category VARCHAR(100),
    image_url TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create enrollments table
CREATE TABLE IF NOT EXISTS enrollments (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    course_id INTEGER REFERENCES courses(id),
    progress INTEGER DEFAULT 0,
    enrolled_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_id, course_id)
);

-- Insert sample courses
INSERT INTO courses (title, description, duration_hours, level, category, image_url) VALUES
('Основы Python программирования', 'Изучите основы Python с нуля: переменные, циклы, функции и ООП', 40, 'Начальный', 'Программирование', '/placeholder.svg'),
('Web-разработка: React и TypeScript', 'Современная фронтенд разработка с React, TypeScript и лучшими практиками', 60, 'Средний', 'Веб-разработка', '/placeholder.svg'),
('Машинное обучение для начинающих', 'Погружение в ML: алгоритмы, нейронные сети, работа с данными', 80, 'Средний', 'Data Science', '/placeholder.svg'),
('UI/UX дизайн: от идеи до прототипа', 'Научитесь создавать удобные интерфейсы и проектировать пользовательский опыт', 35, 'Начальный', 'Дизайн', '/placeholder.svg'),
('DevOps: Docker и Kubernetes', 'Контейнеризация приложений, оркестрация и CI/CD практики', 50, 'Продвинутый', 'DevOps', '/placeholder.svg'),
('SQL и базы данных', 'Полное погружение в реляционные БД: проектирование, запросы, оптимизация', 45, 'Средний', 'Базы данных', '/placeholder.svg')
ON CONFLICT DO NOTHING;