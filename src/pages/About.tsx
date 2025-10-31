import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-primary">EduPro</Link>
            <div className="hidden md:flex space-x-6">
              <Link to="/" className="text-foreground hover:text-primary">Главная</Link>
              <Link to="/courses" className="text-foreground hover:text-primary">Курсы</Link>
              <Link to="/about" className="text-primary font-semibold">О платформе</Link>
              <Link to="/blog" className="text-foreground hover:text-primary">Блог</Link>
              <Link to="/faq" className="text-foreground hover:text-primary">FAQ</Link>
              <Link to="/contact" className="text-foreground hover:text-primary">Контакты</Link>
            </div>
            <Button asChild>
              <Link to="/login">Войти</Link>
            </Button>
          </nav>
        </div>
      </header>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold mb-6">О платформе EduPro</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Мы создаем передовые образовательные решения для корпоративного обучения и профессионального развития. 
              Наша миссия — сделать качественное образование доступным для каждого профессионала.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="GraduationCap" size={32} className="text-primary" />
                </div>
                <CardTitle>Экспертные преподаватели</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                Наши курсы ведут практикующие эксперты с многолетним опытом работы в ведущих компаниях
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Award" size={32} className="text-primary" />
                </div>
                <CardTitle>Сертификаты</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                После успешного завершения курса вы получите официальный сертификат, признаваемый работодателями
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Users" size={32} className="text-primary" />
                </div>
                <CardTitle>Комьюнити</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                Присоединяйтесь к сообществу из более чем 50 000 студентов и профессионалов
              </CardContent>
            </Card>
          </div>

          <div className="bg-muted rounded-lg p-12 mb-16">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">50K+</div>
                <div className="text-muted-foreground">Студентов</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">200+</div>
                <div className="text-muted-foreground">Курсов</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <div className="text-muted-foreground">Удовлетворенность</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">5</div>
                <div className="text-muted-foreground">Лет на рынке</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Готовы начать обучение?</h2>
            <Button size="lg" asChild>
              <Link to="/courses">Выбрать курс</Link>
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-muted py-12 mt-16">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 EduPro. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
