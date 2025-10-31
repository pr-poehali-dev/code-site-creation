import Icon from '@/components/ui/icon';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: 'Trophy',
    title: 'Сертификация',
    description: 'Получайте признанные сертификаты после прохождения курсов'
  },
  {
    icon: 'Users',
    title: 'Экспертные преподаватели',
    description: 'Учитесь у лучших специалистов индустрии с многолетним опытом'
  },
  {
    icon: 'Clock',
    title: 'Гибкий график',
    description: 'Учитесь в удобное время в своем темпе'
  },
  {
    icon: 'Target',
    title: 'Практические задания',
    description: 'Применяйте знания на реальных кейсах и проектах'
  },
  {
    icon: 'BarChart',
    title: 'Отслеживание прогресса',
    description: 'Следите за своими достижениями и развитием компетенций'
  },
  {
    icon: 'MessageCircle',
    title: 'Поддержка 24/7',
    description: 'Получайте помощь от кураторов в любое время'
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-lg text-muted-foreground">
            Мы создали комплексную платформу для эффективного корпоративного обучения
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-lg">
                  <Icon name={feature.icon} size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
