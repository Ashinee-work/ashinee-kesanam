
import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeProvider';
import { handleNavLinkClick } from '@/utils/smoothScroll';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Experience', id: 'experience' },
  { name: 'Projects', id: 'projects' },
  { name: 'Publications', id: 'publications' },
  { name: 'Mentoring', id: 'mentoring' },
  { name: 'Skills', id: 'skills' },
  { name: 'Achievements', id: 'achievements' },
  { name: 'Extracurricular', id: 'extracurricular' },
  { name: 'Contact', id: 'contact' }
];

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass-effect py-2 shadow-md' : 'py-4'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <a 
          href="#home" 
          className="text-xl font-bold"
          onClick={(e) => handleNavLinkClick(e, 'home')}
        >
          <span className="text-accent">Ashinee</span> Kesanam
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="text-sm hover:text-accent transition-colors"
                  onClick={(e) => handleNavLinkClick(e, link.id)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden glass-effect px-4 py-4 shadow-md">
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="block py-2 hover:text-accent transition-colors"
                  onClick={(e) => {
                    handleNavLinkClick(e, link.id);
                    closeMenu();
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
