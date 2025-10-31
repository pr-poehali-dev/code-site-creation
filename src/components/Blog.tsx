import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const posts = [
  {
    title: '5 трендов корпоративного обучения в 2025 году',
    excerpt: 'Узнайте, какие технологии и подходы будут определять будущее корпоративного обучения',
    category: 'Тренды',
    date: '15 октября 2024',
    readTime: '5 мин'
  },
  {
    title: 'Как измерить эффективность обучения сотрудников',
    excerpt: 'Практическое руководство по метрикам и KPI для оценки результатов обучения',
    category: 'Аналитика',
    date: '12 октября 2024',
    readTime: '7 мин'
  },
  {
    title: 'Микрообучение: маленькие шаги к большим результатам',
    excerpt: 'Почему короткие учебные модули становятся стандартом корпоративного образования',
    category: 'Методология',
    date: '10 октября 2024',
    readTime: '4 мин'
  }
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-secondary/20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Блог и статьи
          </h2>
          <p className="text-lg text-muted-foreground">
            Полезные материалы о корпоративном обучении и развитии
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {posts.map((post, index) => (
            <Card key={index} className="flex flex-col hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-4 aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                  <Icon name="FileText" size={48} className="text-primary/60" />
                </div>
                <Badge variant="secondary" className="w-fit mb-2">{post.category}</Badge>
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-muted-foreground text-sm">{post.excerpt}</p>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Icon name="Calendar" size={16} />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Clock" size={16} />
                    {post.readTime}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Читать статью
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Button size="lg" variant="outline">
            Все статьи
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
