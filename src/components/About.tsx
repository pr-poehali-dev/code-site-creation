import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
              <Icon name="Building2" size={120} className="text-primary/40" />
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              О нашей платформе
            </h2>
            <p className="text-lg text-muted-foreground">
              EduPlatform — это современное решение для корпоративного обучения, 
              которое помогает компаниям развивать компетенции своих сотрудников.
            </p>
            <p className="text-muted-foreground">
              Мы предлагаем широкий выбор профессиональных курсов, разработанных 
              ведущими экспертами индустрии. Наша платформа обеспечивает персонализированный 
              подход к обучению, отслеживание прогресса и выдачу сертификатов.
            </p>
            <div className="space-y-4 pt-4">
              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-4 flex items-start gap-3">
                  <Icon name="CheckCircle2" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Адаптивное обучение</h3>
                    <p className="text-sm text-muted-foreground">
                      Индивидуальные треки развития для каждого сотрудника
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-4 flex items-start gap-3">
                  <Icon name="CheckCircle2" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Аналитика и отчетность</h3>
                    <p className="text-sm text-muted-foreground">
                      Детальная статистика по успеваемости и вовлеченности
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-4 flex items-start gap-3">
                  <Icon name="CheckCircle2" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Интеграция с HR-системами</h3>
                    <p className="text-sm text-muted-foreground">
                      Бесшовная интеграция с вашими корпоративными системами
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
