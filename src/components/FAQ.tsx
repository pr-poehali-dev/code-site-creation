import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Как начать обучение на платформе?',
    answer: 'Зарегистрируйтесь на платформе, выберите интересующий курс и начните обучение в удобное для вас время. Для корпоративных клиентов доступна групповая регистрация и настройка учебных треков.'
  },
  {
    question: 'Выдаются ли сертификаты после окончания курса?',
    answer: 'Да, после успешного завершения курса и прохождения итоговой аттестации вы получите электронный сертификат, который можно добавить в профиль LinkedIn и другие профессиональные сети.'
  },
  {
    question: 'Можно ли учиться в своем темпе?',
    answer: 'Абсолютно! Большинство наших курсов доступны в асинхронном формате, что позволяет учиться в удобное время. Вы также можете присоединиться к когортным программам с фиксированным расписанием.'
  },
  {
    question: 'Какая техническая поддержка доступна?',
    answer: 'Мы предоставляем круглосуточную поддержку через чат, email и телефон. Каждый курс также имеет куратора, который поможет с учебными вопросами.'
  },
  {
    question: 'Можно ли интегрировать платформу с нашей HR-системой?',
    answer: 'Да, мы предлагаем API и готовые интеграции с популярными HR-системами, включая SAP SuccessFactors, Workday, BambooHR и другими.'
  },
  {
    question: 'Есть ли пробный период для корпоративных клиентов?',
    answer: 'Мы предоставляем 14-дневный пробный период для корпоративных клиентов с доступом ко всем функциям платформы и выборочным курсам.'
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Часто задаваемые вопросы
          </h2>
          <p className="text-lg text-muted-foreground">
            Ответы на популярные вопросы о нашей платформе
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border rounded-lg px-6 bg-card"
            >
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
