
import React from 'react';
import { ArrowUp } from 'lucide-react';
import { scrollToSection } from '@/utils/smoothScroll';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <p className="text-lg font-bold mb-2">Ashinee Kesanam</p>
            <p className="text-sm opacity-80">AI & Software Engineering Portfolio</p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <button 
              onClick={() => scrollToSection('home')}
              aria-label="Scroll to top"
              className="p-3 bg-accent text-accent-foreground rounded-full hover:bg-accent/80 transition-colors"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-primary-foreground/20 text-center text-sm opacity-80">
          <p>© {currentYear} Ashinee Kesanam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
