
import React, { useEffect } from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import ScrollIndicator from '@/components/ScrollIndicator';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Publications from '@/components/Publications';
import Mentoring from '@/components/Mentoring';
import Skills from '@/components/Skills';
import Achievements from '@/components/Achievements';
import Extracurricular from '@/components/Extracurricular';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

// Fade in animation for sections
const useFadeInObserver = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });
    
    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach(section => {
      observer.observe(section);
    });
    
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);
};

const Index: React.FC = () => {
  useFadeInObserver();
  
  useEffect(() => {
    // Set page title and description
    document.title = "Ashinee Kesanam - AI & Software Engineering Portfolio";
    
    // Smooth scroll to section if URL has hash
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);
  
  return (
    <ThemeProvider>
      <ScrollIndicator />
      <Navbar />
      
      <main>
        <Hero />
        
        <div className="fade-in-section">
          <About />
        </div>
        
        <div className="fade-in-section">
          <Experience />
        </div>
        
        <div className="fade-in-section">
          <Projects />
        </div>
        
        <div className="fade-in-section">
          <Publications />
        </div>
        
        <div className="fade-in-section">
          <Mentoring />
        </div>
        
        <div className="fade-in-section">
          <Skills />
        </div>
        
        <div className="fade-in-section">
          <Achievements />
        </div>
        
        <div className="fade-in-section">
          <Extracurricular />
        </div>
        
        <div className="fade-in-section">
          <Contact />
        </div>
      </main>
      
      <Footer />
    </ThemeProvider>
  );
};

export default Index;
