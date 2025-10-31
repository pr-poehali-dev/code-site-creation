import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const AUTH_URL = 'https://functions.poehali.dev/a595223f-8910-4065-8e96-4578624a9b8f';
const COURSES_URL = 'https://functions.poehali.dev/25bbaee4-9263-46eb-8b4c-8ad1375ba65d';

interface User {
  id: number;
  email: string;
  fullName: string;
}

interface Course {
  id: number;
  title: string;
  description: string;
  durationHours: number;
  level: string;
  category: string;
  imageUrl: string;
  progress?: number;
  enrolled?: boolean;
}

const Index = () => {
  const [user, setUser] = useState<User | null>(null);
  const [courses, setCourses] = useState<Course[]>([]);
  const [authDialogOpen, setAuthDialogOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { toast } = useToast();

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  useEffect(() => {
    fetchCourses();
  }, [user]);

  const fetchCourses = async () => {
    try {
      const url = user ? `${COURSES_URL}?userId=${user.id}` : COURSES_URL;
      const response = await fetch(url);
      const data = await response.json();
      setCourses(data.courses || []);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  const handleAuth = async (action: 'login' | 'register', formData: any) => {
    try {
      const response = await fetch(AUTH_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action, ...formData }),
      });
      const data = await response.json();
      
      if (data.success) {
        setUser(data.user);
        localStorage.setItem('user', JSON.stringify(data.user));
        setAuthDialogOpen(false);
        toast({
          title: action === 'login' ? 'Вход выполнен' : 'Регистрация завершена',
          description: `Добро пожаловать, ${data.user.fullName}!`,
        });
      } else {
        toast({
          variant: 'destructive',
          title: 'Ошибка',
          description: data.error || 'Что-то пошло не так',
        });
      }
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Ошибка',
        description: 'Не удалось выполнить операцию',
      });
    }
  };

  const handleEnroll = async (courseId: number) => {
    if (!user) {
      setAuthDialogOpen(true);
      return;
    }

    try {
      const response = await fetch(COURSES_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'enroll', userId: user.id, courseId }),
      });
      const data = await response.json();
      
      if (data.success) {
        toast({
          title: 'Успешно!',
          description: 'Вы записаны на курс',
        });
        fetchCourses();
      }
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Ошибка',
        description: 'Не удалось записаться на курс',
      });
    }
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
    toast({
      title: 'Выход выполнен',
      description: 'До скорой встречи!',
    });
  };

  const AuthDialog = () => (
    <Dialog open={authDialogOpen} onOpenChange={setAuthDialogOpen}>
      <DialogTrigger asChild>
        <Button>Войти</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Авторизация</DialogTitle>
          <DialogDescription>Войдите или зарегистрируйтесь для доступа к курсам</DialogDescription>
        </DialogHeader>
        <Tabs defaultValue="login">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Вход</TabsTrigger>
            <TabsTrigger value="register">Регистрация</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              handleAuth('login', {
                email: formData.get('email'),
                password: formData.get('password'),
              });
            }}>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="login-email">Email</Label>
                  <Input id="login-email" name="email" type="email" required />
                </div>
                <div>
                  <Label htmlFor="login-password">Пароль</Label>
                  <Input id="login-password" name="password" type="password" required />
                </div>
                <Button type="submit" className="w-full">Войти</Button>
              </div>
            </form>
          </TabsContent>
          <TabsContent value="register">
            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              handleAuth('register', {
                email: formData.get('email'),
                password: formData.get('password'),
                fullName: formData.get('fullName'),
              });
            }}>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="register-name">Полное имя</Label>
                  <Input id="register-name" name="fullName" required />
                </div>
                <div>
                  <Label htmlFor="register-email">Email</Label>
                  <Input id="register-email" name="email" type="email" required />
                </div>
                <div>
                  <Label htmlFor="register-password">Пароль</Label>
                  <Input id="register-password" name="password" type="password" required />
                </div>
                <Button type="submit" className="w-full">Зарегистрироваться</Button>
              </div>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );

  const renderHero = () => (
    <section className="relative py-20 px-6 bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Образовательная платформа будущего
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Развивайте свои навыки с лучшими онлайн-курсами от ведущих экспертов индустрии
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button size="lg" onClick={() => setActiveSection('courses')}>
            <Icon name="BookOpen" className="mr-2" size={20} />
            Каталог курсов
          </Button>
          {!user && <AuthDialog />}
        </div>
      </div>
    </section>
  );

  const renderCourses = () => (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">Наши курсы</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card key={course.id} className="flex flex-col hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge className="w-fit mb-2">{course.category}</Badge>
                <CardTitle>{course.title}</CardTitle>
                <CardDescription>{course.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Icon name="Clock" size={16} />
                    <span>{course.durationHours} часов</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="TrendingUp" size={16} />
                    <span>{course.level}</span>
                  </div>
                </div>
                {course.enrolled && (
                  <div className="mt-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span>Прогресс</span>
                      <span>{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} />
                  </div>
                )}
              </CardContent>
              <CardFooter>
                {course.enrolled ? (
                  <Button className="w-full" variant="secondary">
                    <Icon name="Play" className="mr-2" size={16} />
                    Продолжить обучение
                  </Button>
                ) : (
                  <Button className="w-full" onClick={() => handleEnroll(course.id)}>
                    <Icon name="Plus" className="mr-2" size={16} />
                    Записаться
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );

  const renderAbout = () => (
    <section className="py-16 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">О платформе</h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-lg mb-6">
            Мы создали современную образовательную платформу для профессионального роста и развития навыков.
            Наши курсы разработаны экспертами с многолетним опытом в индустрии.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <Card>
              <CardHeader>
                <Icon name="Users" size={32} className="mb-2 text-primary" />
                <CardTitle>10,000+</CardTitle>
                <CardDescription>Активных студентов</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Icon name="BookOpen" size={32} className="mb-2 text-primary" />
                <CardTitle>50+</CardTitle>
                <CardDescription>Курсов</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Icon name="Award" size={32} className="mb-2 text-primary" />
                <CardTitle>95%</CardTitle>
                <CardDescription>Уровень удовлетворенности</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );

  const renderBlog = () => (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">Блог</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Как эффективно изучать программирование', date: '15 октября 2024', category: 'Советы' },
            { title: 'Топ-10 навыков для карьеры в IT', date: '10 октября 2024', category: 'Карьера' },
            { title: 'Будущее онлайн-образования', date: '5 октября 2024', category: 'Тренды' },
          ].map((post, idx) => (
            <Card key={idx} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <Badge className="w-fit mb-2">{post.category}</Badge>
                <CardTitle className="text-xl">{post.title}</CardTitle>
                <CardDescription className="flex items-center gap-2">
                  <Icon name="Calendar" size={14} />
                  {post.date}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" className="p-0">
                  Читать далее <Icon name="ArrowRight" className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );

  const renderFAQ = () => (
    <section className="py-16 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">Вопросы и ответы</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Как начать обучение?</AccordionTrigger>
            <AccordionContent>
              Зарегистрируйтесь на платформе, выберите интересующий курс и нажмите "Записаться". 
              Вы получите мгновенный доступ ко всем материалам курса.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Какова длительность курсов?</AccordionTrigger>
            <AccordionContent>
              Длительность варьируется от 20 до 80 часов в зависимости от курса. 
              Вы можете учиться в своем темпе и возвращаться к материалам в любое время.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Выдается ли сертификат?</AccordionTrigger>
            <AccordionContent>
              Да, после успешного завершения курса вы получите сертификат о прохождении обучения,
              который можно добавить в свое портфолио или LinkedIn.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Есть ли поддержка студентов?</AccordionTrigger>
            <AccordionContent>
              Наша команда поддержки всегда готова помочь. Также у каждого курса есть форум,
              где студенты могут общаться и помогать друг другу.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );

  const renderContact = () => (
    <section className="py-16 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">Контакты</h2>
        <Card>
          <CardHeader>
            <CardTitle>Свяжитесь с нами</CardTitle>
            <CardDescription>Мы ответим в течение 24 часов</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <Label htmlFor="contact-name">Имя</Label>
                <Input id="contact-name" placeholder="Ваше имя" />
              </div>
              <div>
                <Label htmlFor="contact-email">Email</Label>
                <Input id="contact-email" type="email" placeholder="your@email.com" />
              </div>
              <div>
                <Label htmlFor="contact-message">Сообщение</Label>
                <Input id="contact-message" placeholder="Ваш вопрос" />
              </div>
              <Button className="w-full">
                <Icon name="Send" className="mr-2" size={16} />
                Отправить
              </Button>
            </form>
          </CardContent>
        </Card>
        <div className="grid md:grid-cols-3 gap-4 mt-8">
          <Card className="text-center">
            <CardHeader>
              <Icon name="Mail" size={24} className="mx-auto text-primary" />
              <CardTitle className="text-lg">Email</CardTitle>
              <CardDescription>support@learning.com</CardDescription>
            </CardHeader>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <Icon name="Phone" size={24} className="mx-auto text-primary" />
              <CardTitle className="text-lg">Телефон</CardTitle>
              <CardDescription>+7 (800) 123-45-67</CardDescription>
            </CardHeader>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <Icon name="MapPin" size={24} className="mx-auto text-primary" />
              <CardTitle className="text-lg">Адрес</CardTitle>
              <CardDescription>Москва, Россия</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen">
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Icon name="GraduationCap" size={28} className="text-primary" />
            EduPlatform
          </h1>
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => setActiveSection('home')} className="hover:text-primary transition-colors">
              Главная
            </button>
            <button onClick={() => setActiveSection('courses')} className="hover:text-primary transition-colors">
              Курсы
            </button>
            <button onClick={() => setActiveSection('about')} className="hover:text-primary transition-colors">
              О нас
            </button>
            <button onClick={() => setActiveSection('blog')} className="hover:text-primary transition-colors">
              Блог
            </button>
            <button onClick={() => setActiveSection('faq')} className="hover:text-primary transition-colors">
              FAQ
            </button>
            <button onClick={() => setActiveSection('contact')} className="hover:text-primary transition-colors">
              Контакты
            </button>
          </div>
          <div className="flex items-center gap-3">
            {user ? (
              <>
                <div className="flex items-center gap-2">
                  <Icon name="User" size={20} />
                  <span className="hidden md:inline">{user.fullName}</span>
                </div>
                <Button variant="outline" size="sm" onClick={handleLogout}>
                  Выход
                </Button>
              </>
            ) : (
              <AuthDialog />
            )}
          </div>
        </div>
      </nav>

      <main>
        {activeSection === 'home' && (
          <>
            {renderHero()}
            {renderCourses()}
          </>
        )}
        {activeSection === 'courses' && renderCourses()}
        {activeSection === 'about' && renderAbout()}
        {activeSection === 'blog' && renderBlog()}
        {activeSection === 'faq' && renderFAQ()}
        {activeSection === 'contact' && renderContact()}
      </main>

      <footer className="bg-secondary text-secondary-foreground py-12 px-6 mt-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Icon name="GraduationCap" size={24} />
              EduPlatform
            </h3>
            <p className="text-sm text-secondary-foreground/80">
              Образовательная платформа для профессионального роста
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => setActiveSection('courses')}>Курсы</button></li>
              <li><button onClick={() => setActiveSection('about')}>О нас</button></li>
              <li><button onClick={() => setActiveSection('blog')}>Блог</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Поддержка</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => setActiveSection('faq')}>FAQ</button></li>
              <li><button onClick={() => setActiveSection('contact')}>Контакты</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Соцсети</h4>
            <div className="flex gap-3">
              <Icon name="Facebook" size={20} className="cursor-pointer hover:text-primary transition-colors" />
              <Icon name="Twitter" size={20} className="cursor-pointer hover:text-primary transition-colors" />
              <Icon name="Linkedin" size={20} className="cursor-pointer hover:text-primary transition-colors" />
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-secondary-foreground/20 text-center text-sm text-secondary-foreground/80">
          © 2024 EduPlatform. Все права защищены.
        </div>
      </footer>
    </div>
  );
};

export default Index;
