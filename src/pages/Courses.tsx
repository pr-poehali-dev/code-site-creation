import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const courses = [
  {
    id: 1,
    title: "Управление проектами",
    description: "Современные методологии и инструменты проектного управления",
    duration: "8 недель",
    level: "Средний",
    students: 1240,
    category: "Управление",
    rating: 4.8,
  },
  {
    id: 2,
    title: "Цифровой маркетинг",
    description: "Стратегии продвижения в цифровой среде",
    duration: "6 недель",
    level: "Начальный",
    students: 892,
    category: "Маркетинг",
    rating: 4.6,
  },
  {
    id: 3,
    title: "Аналитика данных",
    description: "Работа с данными для принятия бизнес-решений",
    duration: "10 недель",
    level: "Продвинутый",
    students: 654,
    category: "IT",
    rating: 4.9,
  },
  {
    id: 4,
    title: "Лидерство и управление командой",
    description: "Развитие навыков руководителя и построение эффективной команды",
    duration: "6 недель",
    level: "Средний",
    students: 1120,
    category: "Управление",
    rating: 4.7,
  },
  {
    id: 5,
    title: "Финансовая грамотность",
    description: "Основы финансового планирования и анализа",
    duration: "4 недели",
    level: "Начальный",
    students: 980,
    category: "Финансы",
    rating: 4.5,
  },
  {
    id: 6,
    title: "Agile и Scrum",
    description: "Гибкие методологии разработки и управления проектами",
    duration: "5 недель",
    level: "Средний",
    students: 756,
    category: "IT",
    rating: 4.8,
  }
];

const Courses = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-12 bg-muted/50">
          <div className="container">
            <h1 className="text-4xl font-bold mb-4">Каталог курсов</h1>
            <p className="text-xl text-muted-foreground">
              Выберите курс для развития профессиональных навыков
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {courses.map((course) => (
                <Card key={course.id} className="hover:shadow-lg transition-shadow flex flex-col">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="secondary">{course.category}</Badge>
                      <div className="flex items-center gap-1 text-sm">
                        <Icon name="Star" className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{course.rating}</span>
                      </div>
                    </div>
                    <CardTitle>{course.title}</CardTitle>
                    <CardDescription>{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Icon name="Clock" className="h-4 w-4" />
                          {course.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Icon name="Signal" className="h-4 w-4" />
                          {course.level}
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Icon name="Users" className="h-4 w-4" />
                        {course.students} студентов
                      </div>
                    </div>
                    <Button className="w-full">
                      Записаться на курс
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Courses;