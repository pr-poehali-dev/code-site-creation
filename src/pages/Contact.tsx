import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-primary">EduPro</Link>
            <div className="hidden md:flex space-x-6">
              <Link to="/" className="text-foreground hover:text-primary">Главная</Link>
              <Link to="/courses" className="text-foreground hover:text-primary">Курсы</Link>
              <Link to="/about" className="text-foreground hover:text-primary">О платформе</Link>
              <Link to="/blog" className="text-foreground hover:text-primary">Блог</Link>
              <Link to="/faq" className="text-foreground hover:text-primary">FAQ</Link>
              <Link to="/contact" className="text-primary font-semibold">Контакты</Link>
            </div>
            <Button asChild>
              <Link to="/login">Войти</Link>
            </Button>
          </nav>
        </div>
      </header>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Свяжитесь с нами</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мы всегда рады ответить на ваши вопросы и помочь с выбором курса
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Отправить сообщение</CardTitle>
                  <CardDescription>Заполните форму, и мы свяжемся с вами в ближайшее время</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <Label htmlFor="name">Ваше имя</Label>
                      <Input id="name" placeholder="Иван Иванов" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="ivan@example.com" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Телефон</Label>
                      <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" />
                    </div>
                    <div>
                      <Label htmlFor="message">Сообщение</Label>
                      <Textarea id="message" placeholder="Расскажите, чем мы можем вам помочь" rows={5} />
                    </div>
                    <Button type="submit" className="w-full">Отправить</Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">info@edupro.ru</p>
                      <p className="text-muted-foreground">support@edupro.ru</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Телефон</h3>
                      <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                      <p className="text-sm text-muted-foreground mt-1">Пн-Пт с 9:00 до 18:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Адрес</h3>
                      <p className="text-muted-foreground">Москва, ул. Тверская, д. 1</p>
                      <p className="text-muted-foreground">БЦ "Образование", офис 501</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="MessageCircle" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Мессенджеры</h3>
                      <p className="text-muted-foreground">Telegram: @edupro_support</p>
                      <p className="text-muted-foreground">WhatsApp: +7 (495) 123-45-67</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
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

export default Contact;
