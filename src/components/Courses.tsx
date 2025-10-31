import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const courses = [
  {
    title: 'Управление проектами',
    description: 'Освойте современные методологии управления проектами: Agile, Scrum, Kanban',
    duration: '8 недель',
    level: 'Средний',
    students: 1234,
    rating: 4.8,
    category: 'Менеджмент'
  },
  {
    title: 'Лидерство и командообразование',
    description: 'Развивайте навыки эффективного руководства и создания сильных команд',
    duration: '6 недель',
    level: 'Продвинутый',
    students: 987,
    rating: 4.9,
    category: 'Soft Skills'
  },
  {
    title: 'Цифровая трансформация бизнеса',
    description: 'Узнайте, как внедрять цифровые технологии для роста компании',
    duration: '10 недель',
    level: 'Средний',
    students: 756,
    rating: 4.7,
    category: 'Бизнес'
  },
  {
    title: 'Анализ данных для бизнеса',
    description: 'Научитесь принимать решения на основе данных и аналитики',
    duration: '12 недель',
    level: 'Начальный',
    students: 2341,
    rating: 4.9,
    category: 'Аналитика'
  },
  {
    title: 'Эффективные коммуникации',
    description: 'Мастер-класс по деловому общению и презентациям',
    duration: '4 недели',
    level: 'Начальный',
    students: 1876,
    rating: 4.6,
    category: 'Soft Skills'
  },
  {
    title: 'Финансовая грамотность',
    description: 'Основы финансового анализа и управления бюджетом',
    duration: '6 недель',
    level: 'Начальный',
    students: 1543,
    rating: 4.8,
    category: 'Финансы'
  }
];

const Courses = () => {
  return (
    <section id="courses" className="py-20 bg-secondary/20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Популярные курсы
          </h2>
          <p className="text-lg text-muted-foreground">
            Выбирайте из широкого каталога профессиональных программ обучения
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {courses.map((course, index) => (
            <Card key={index} className="flex flex-col hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-4 aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                  <Icon name="BookOpen" size={48} className="text-primary/60" />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">{course.category}</Badge>
                  <div className="flex items-center gap-1 text-sm">
                    <Icon name="Star" size={16} className="text-accent fill-accent" />
                    <span className="font-medium">{course.rating}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-muted-foreground text-sm">{course.description}</p>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Icon name="Clock" size={16} />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Users" size={16} />
                    {course.students.toLocaleString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Signal" size={16} />
                    {course.level}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  Записаться на курс
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Button size="lg" variant="outline">
            Показать все курсы
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
