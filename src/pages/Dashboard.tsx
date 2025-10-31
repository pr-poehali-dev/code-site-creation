import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const enrolledCourses = [
    { id: 1, title: "Основы управления проектами", progress: 65, nextLesson: "Управление рисками" },
    { id: 2, title: "Эффективные продажи B2B", progress: 30, nextLesson: "Техники переговоров" },
    { id: 3, title: "Цифровой маркетинг", progress: 85, nextLesson: "SEO-оптимизация" }
  ];

  const completedCourses = [
    { id: 1, title: "Финансовая грамотность для руководителей", completedDate: "15.10.2024" },
    { id: 2, title: "Бизнес-аналитика и Data-driven решения", completedDate: "28.09.2024" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-primary">EduPro</Link>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" asChild>
                <Link to="/courses">Каталог курсов</Link>
              </Button>
              <Avatar>
                <AvatarFallback>ИИ</AvatarFallback>
              </Avatar>
            </div>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Личный кабинет</h1>
          <p className="text-muted-foreground">Управляйте своим обучением</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Активных курсов</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">3</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Завершено курсов</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">2</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Часов обучения</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">127</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Сертификатов</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">2</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="active" className="space-y-6">
          <TabsList>
            <TabsTrigger value="active">Активные курсы</TabsTrigger>
            <TabsTrigger value="completed">Завершенные</TabsTrigger>
            <TabsTrigger value="certificates">Сертификаты</TabsTrigger>
            <TabsTrigger value="profile">Профиль</TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="space-y-4">
            {enrolledCourses.map((course) => (
              <Card key={course.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{course.title}</CardTitle>
                      <CardDescription className="mt-2">Следующий урок: {course.nextLesson}</CardDescription>
                    </div>
                    <Button>Продолжить</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Прогресс</span>
                      <span className="font-medium">{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="completed" className="space-y-4">
            {completedCourses.map((course) => (
              <Card key={course.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name="CheckCircle2" size={20} className="text-primary" />
                      </div>
                      <div>
                        <CardTitle>{course.title}</CardTitle>
                        <CardDescription className="mt-1">Завершен {course.completedDate}</CardDescription>
                      </div>
                    </div>
                    <Button variant="outline">Скачать сертификат</Button>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="certificates">
            <Card>
              <CardHeader>
                <CardTitle>Мои сертификаты</CardTitle>
                <CardDescription>Все полученные сертификаты доступны для скачивания</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {completedCourses.map((course) => (
                  <div key={course.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Icon name="Award" size={24} className="text-primary" />
                      <div>
                        <div className="font-medium">{course.title}</div>
                        <div className="text-sm text-muted-foreground">Выдан {course.completedDate}</div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Icon name="Download" size={16} className="mr-2" />
                      Скачать
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Настройки профиля</CardTitle>
                <CardDescription>Управление личными данными и настройками</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Avatar className="w-20 h-20">
                    <AvatarFallback className="text-2xl">ИИ</AvatarFallback>
                  </Avatar>
                  <Button variant="outline">Изменить фото</Button>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Полное имя</label>
                    <div className="mt-1 text-muted-foreground">Иван Иванов</div>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <div className="mt-1 text-muted-foreground">ivan@example.com</div>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Телефон</label>
                    <div className="mt-1 text-muted-foreground">+7 (999) 123-45-67</div>
                  </div>
                </div>

                <div className="pt-4">
                  <Button>Редактировать профиль</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <footer className="bg-muted py-12 mt-16">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 EduPro. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
