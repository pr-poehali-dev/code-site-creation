import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const About = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
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
      </main>

      <Footer />
    </div>
  );
};

export default About;