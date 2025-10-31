import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="text-3xl font-bold text-primary">EduPro</Link>
          <p className="text-muted-foreground mt-2">Ваш путь к профессиональному развитию</p>
        </div>

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Вход</TabsTrigger>
            <TabsTrigger value="register">Регистрация</TabsTrigger>
          </TabsList>
          
          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle>Вход в личный кабинет</CardTitle>
                <CardDescription>Введите ваши учетные данные для входа</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="ivan@example.com" />
                </div>
                <div>
                  <Label htmlFor="password">Пароль</Label>
                  <Input id="password" type="password" placeholder="••••••••" />
                </div>
                <div className="flex items-center justify-between">
                  <label className="flex items-center text-sm">
                    <input type="checkbox" className="mr-2" />
                    Запомнить меня
                  </label>
                  <Button variant="link" className="p-0 h-auto text-sm">
                    Забыли пароль?
                  </Button>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <Button className="w-full" asChild>
                  <Link to="/dashboard">Войти</Link>
                </Button>
                <div className="text-sm text-center text-muted-foreground">
                  Нет аккаунта?{" "}
                  <Button variant="link" className="p-0 h-auto" onClick={() => {}}>
                    Зарегистрируйтесь
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="register">
            <Card>
              <CardHeader>
                <CardTitle>Создать аккаунт</CardTitle>
                <CardDescription>Заполните форму для регистрации</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="reg-name">Полное имя</Label>
                  <Input id="reg-name" placeholder="Иван Иванов" />
                </div>
                <div>
                  <Label htmlFor="reg-email">Email</Label>
                  <Input id="reg-email" type="email" placeholder="ivan@example.com" />
                </div>
                <div>
                  <Label htmlFor="reg-phone">Телефон</Label>
                  <Input id="reg-phone" type="tel" placeholder="+7 (999) 123-45-67" />
                </div>
                <div>
                  <Label htmlFor="reg-password">Пароль</Label>
                  <Input id="reg-password" type="password" placeholder="••••••••" />
                </div>
                <div>
                  <Label htmlFor="reg-confirm">Подтвердите пароль</Label>
                  <Input id="reg-confirm" type="password" placeholder="••••••••" />
                </div>
                <div className="flex items-start">
                  <input type="checkbox" className="mr-2 mt-1" id="terms" />
                  <label htmlFor="terms" className="text-sm text-muted-foreground">
                    Я согласен с{" "}
                    <Button variant="link" className="p-0 h-auto text-sm">
                      условиями использования
                    </Button>{" "}
                    и{" "}
                    <Button variant="link" className="p-0 h-auto text-sm">
                      политикой конфиденциальности
                    </Button>
                  </label>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <Button className="w-full">Зарегистрироваться</Button>
                <div className="text-sm text-center text-muted-foreground">
                  Уже есть аккаунт?{" "}
                  <Button variant="link" className="p-0 h-auto" onClick={() => {}}>
                    Войти
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-8 text-center">
          <Button variant="ghost" asChild>
            <Link to="/">← Вернуться на главную</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
