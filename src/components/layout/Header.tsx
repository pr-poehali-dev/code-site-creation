import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Icon name="GraduationCap" className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">EduPlatform</span>
        </Link>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Главная
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/courses">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Курсы
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/about">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  О платформе
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/blog">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Блог
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/faq">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  FAQ
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/contact">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Контакты
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2">
          <Button variant="ghost" asChild className="hidden md:flex">
            <Link to="/login">Войти</Link>
          </Button>
          <Button asChild className="hidden md:flex">
            <Link to="/register">Регистрация</Link>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? 'X' : 'Menu'} className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="border-t md:hidden">
          <nav className="container flex flex-col gap-4 py-4">
            <Link to="/" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
              Главная
            </Link>
            <Link to="/courses" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
              Курсы
            </Link>
            <Link to="/about" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
              О платформе
            </Link>
            <Link to="/blog" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
              Блог
            </Link>
            <Link to="/faq" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
              FAQ
            </Link>
            <Link to="/contact" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
              Контакты
            </Link>
            <div className="flex flex-col gap-2 pt-2 border-t">
              <Button variant="ghost" asChild onClick={() => setIsMenuOpen(false)}>
                <Link to="/login">Войти</Link>
              </Button>
              <Button asChild onClick={() => setIsMenuOpen(false)}>
                <Link to="/register">Регистрация</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
