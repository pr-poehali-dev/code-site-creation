import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const FAQ = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Часто задаваемые вопросы</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ответы на популярные вопросы о наших курсах и платформе
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Как записаться на курс?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Для записи на курс необходимо зарегистрироваться на платформе, выбрать интересующий курс и нажать кнопку "Записаться". 
                  После оплаты вы получите доступ к материалам курса в личном кабинете.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Какие способы оплаты доступны?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Мы принимаем оплату банковскими картами (Visa, Mastercard, МИР), через электронные кошельки и банковские переводы. 
                  Для корпоративных клиентов доступна оплата по счету.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Получу ли я сертификат после прохождения курса?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Да, после успешного завершения курса и прохождения итоговой аттестации вы получите официальный сертификат EduPro. 
                  Сертификат можно скачать в электронном виде или заказать печатную версию с доставкой.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Сколько времени у меня будет доступ к материалам?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Доступ к материалам курса сохраняется в течение 12 месяцев с момента начала обучения. 
                  За это время вы можете проходить курс в удобном для вас темпе и пересматривать материалы неограниченное количество раз.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Можно ли получить возврат средств?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Да, мы предоставляем возможность возврата средств в течение 14 дней с момента покупки, 
                  если вы прошли менее 30% курса. Для оформления возврата обратитесь в службу поддержки.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Как проходит обучение?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Обучение проходит полностью онлайн. Курс состоит из видеолекций, практических заданий, тестов и домашних работ. 
                  Вы можете учиться в любое удобное время. Наши кураторы всегда готовы помочь и ответить на вопросы.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Нужны ли какие-то предварительные знания?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Это зависит от уровня курса. Для курсов начального уровня никаких предварительных знаний не требуется. 
                  Для продвинутых курсов рекомендуемые знания и навыки указаны в описании курса.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Есть ли корпоративные программы?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Да, мы предлагаем специальные условия для корпоративных клиентов: групповые скидки, индивидуальные программы обучения, 
                  отчетность по прогрессу сотрудников и возможность интеграции с корпоративными системами. Свяжитесь с нами для обсуждения деталей.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="mt-16 text-center bg-muted p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Не нашли ответ на свой вопрос?</h2>
              <p className="text-muted-foreground mb-6">Свяжитесь с нами, и мы с радостью вам поможем</p>
              <Button size="lg" asChild>
                <Link to="/contact">Связаться с нами</Link>
              </Button>
            </div>
          </div>
        </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;