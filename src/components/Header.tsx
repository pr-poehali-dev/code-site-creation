import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon name="GraduationCap" size={32} className="text-primary" />
          <span className="text-xl font-bold">EduPlatform</span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToSection('home')}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Главная
          </button>
          <button
            onClick={() => scrollToSection('courses')}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Курсы
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            О платформе
          </button>
          <button
            onClick={() => scrollToSection('blog')}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Блог
          </button>
          <button
            onClick={() => scrollToSection('faq')}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Вопросы
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Контакты
          </button>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="outline" onClick={() => scrollToSection('login')}>
            Войти
          </Button>
          <Button onClick={() => scrollToSection('login')}>
            Регистрация
          </Button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Icon name={isMenuOpen ? 'X' : 'Menu'} size={24} />
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container flex flex-col gap-4 py-4">
            <button
              onClick={() => scrollToSection('home')}
              className="text-sm font-medium hover:text-primary transition-colors text-left"
            >
              Главная
            </button>
            <button
              onClick={() => scrollToSection('courses')}
              className="text-sm font-medium hover:text-primary transition-colors text-left"
            >
              Курсы
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm font-medium hover:text-primary transition-colors text-left"
            >
              О платформе
            </button>
            <button
              onClick={() => scrollToSection('blog')}
              className="text-sm font-medium hover:text-primary transition-colors text-left"
            >
              Блог
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-sm font-medium hover:text-primary transition-colors text-left"
            >
              Вопросы
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm font-medium hover:text-primary transition-colors text-left"
            >
              Контакты
            </button>
            <div className="flex flex-col gap-2 pt-2">
              <Button variant="outline" onClick={() => scrollToSection('login')}>
                Войти
              </Button>
              <Button onClick={() => scrollToSection('login')}>
                Регистрация
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
