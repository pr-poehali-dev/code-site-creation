import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const blogPosts = [
  {
    id: 1,
    title: "Как эффективно планировать карьерное развитие",
    excerpt: "Пошаговое руководство по построению карьерного пути и достижению профессиональных целей",
    date: "15 октября 2024",
    author: "Анна Петрова",
    category: "Карьера",
    readTime: "5 мин"
  },
  {
    id: 2,
    title: "Топ-10 навыков, востребованных в 2024 году",
    excerpt: "Анализ рынка труда и ключевые компетенции, которые помогут вам оставаться конкурентоспособными",
    date: "12 октября 2024",
    author: "Дмитрий Соколов",
    category: "Тренды",
    readTime: "7 мин"
  },
  {
    id: 3,
    title: "Методики эффективного обучения для взрослых",
    excerpt: "Научные подходы и практические советы для максимальной эффективности обучения",
    date: "8 октября 2024",
    author: "Елена Васильева",
    category: "Образование",
    readTime: "6 мин"
  },
  {
    id: 4,
    title: "Корпоративное обучение: тренды и перспективы",
    excerpt: "Как компании трансформируют подходы к обучению сотрудников в цифровую эпоху",
    date: "5 октября 2024",
    author: "Михаил Кузнецов",
    category: "Бизнес",
    readTime: "8 мин"
  },
  {
    id: 5,
    title: "Баланс работы и обучения: практические советы",
    excerpt: "Как совмещать профессиональную деятельность и повышение квалификации без выгорания",
    date: "1 октября 2024",
    author: "Ольга Морозова",
    category: "Продуктивность",
    readTime: "5 мин"
  },
  {
    id: 6,
    title: "Онлайн vs офлайн обучение: что выбрать?",
    excerpt: "Сравнительный анализ форматов обучения и рекомендации по выбору оптимального варианта",
    date: "28 сентября 2024",
    author: "Сергей Новиков",
    category: "Образование",
    readTime: "6 мин"
  }
];

const Blog = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Блог</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полезные статьи об образовании, карьере и профессиональном развитии
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="flex flex-col">
                <CardHeader>
                  <div className="flex justify-between items-center mb-3">
                    <Badge>{post.category}</Badge>
                    <span className="text-sm text-muted-foreground flex items-center">
                      <Icon name="Clock" size={14} className="mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Icon name="User" size={16} className="mr-2" />
                    <span>{post.author}</span>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">{post.date}</span>
                  <Button variant="ghost" size="sm">
                    Читать далее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Загрузить еще статьи
            </Button>
          </div>
        </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;