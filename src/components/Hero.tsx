
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, ArrowDown } from 'lucide-react';
import { scrollToSection } from '@/utils/smoothScroll';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-20 px-4 section-padding"
    >
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="block">Ashinee Kesanam</span>
            <span className="text-accent block mt-2 text-2xl md:text-3xl lg:text-4xl">
              AI & Software Engineering Enthusiast
            </span>
          </h1>
          
          <p className="text-muted-foreground my-6 max-w-2xl mx-auto md:mx-0">
            BTech in Artificial Intelligence from NITK (CGPA: 8.48), with expertise in AI, ML, NLP, 
            and software development. Founder of HSpectrum and HSuite, with internships at Uber India 
            and research experience at NUS.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-8">
            <Button className="group flex items-center gap-2" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              onClick={() => scrollToSection('about')}
              className="flex items-center gap-2"
            >
              <span>Learn More</span>
              <ArrowDown className="w-4 h-4" />
            </Button>
          </div>
        </div>
        
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full bg-accent/10 animate-pulse"></div>
            <img 
              src="https://via.placeholder.com/400x400.png?text=AK" 
              alt="Ashinee Kesanam" 
              className="rounded-full w-full h-full object-cover border-4 border-accent shadow-xl float-animation" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
