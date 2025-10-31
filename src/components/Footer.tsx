import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-muted py-12 border-t">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="GraduationCap" size={28} className="text-primary" />
              <span className="text-lg font-bold">EduPlatform</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Профессиональная платформа для корпоративного обучения
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 hover:bg-primary/10 rounded-lg transition-colors">
                <Icon name="Facebook" size={20} className="text-muted-foreground" />
              </a>
              <a href="#" className="p-2 hover:bg-primary/10 rounded-lg transition-colors">
                <Icon name="Twitter" size={20} className="text-muted-foreground" />
              </a>
              <a href="#" className="p-2 hover:bg-primary/10 rounded-lg transition-colors">
                <Icon name="Linkedin" size={20} className="text-muted-foreground" />
              </a>
              <a href="#" className="p-2 hover:bg-primary/10 rounded-lg transition-colors">
                <Icon name="Instagram" size={20} className="text-muted-foreground" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Платформа</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#courses" className="hover:text-primary transition-colors">Курсы</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">О нас</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Преподаватели</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Сертификаты</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Ресурсы</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#blog" className="hover:text-primary transition-colors">Блог</a></li>
              <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Документация</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">API</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Компания</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#contact" className="hover:text-primary transition-colors">Контакты</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Карьера</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Политика</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Условия</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; 2024 EduPlatform. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
