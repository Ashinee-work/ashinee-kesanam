
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CalendarIcon, BookOpen } from 'lucide-react';

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  grade: string;
}

const educationData: EducationItem[] = [
  {
    degree: "BTech in Artificial Intelligence",
    institution: "NITK",
    period: "2021-2025",
    grade: "CGPA: 8.48"
  },
  {
    degree: "Minor in Management",
    institution: "NITK",
    period: "2022-2025",
    grade: "CGPA: 8.2"
  },
  {
    degree: "Grade 12 - PCME",
    institution: "Sri Chaitanya PU College",
    period: "2019-2021",
    grade: "100%"
  },
  {
    degree: "Grade 10",
    institution: "Stella Maris High School",
    period: "2018-2019",
    grade: "98.08%"
  }
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 section-padding bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="section-heading text-center">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <p className="mb-6 text-lg">
              I am a BTech student specializing in Artificial Intelligence at NITK, with a minor in Management. 
              My academic journey has been fueled by a deep passion for AI and its applications in healthcare and social impact.
            </p>
            
            <p className="mb-6">
              Throughout my studies, I've combined theoretical knowledge with hands-on experience through various internships and research projects. 
              As the founder of HSpectrum, I'm dedicated to promoting AI applications in healthcare, and my work with HSuite focused on developing HIMS software for healthcare facilities.
            </p>
            
            <p>
              My research at NUS CogAI4Sci allowed me to explore cutting-edge LLM tokenization for video datasets, 
              further expanding my expertise in AI and computer vision. I'm constantly seeking new challenges and opportunities to apply my skills in meaningful ways.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Education Timeline</h3>
            
            <div className="timeline">
              {educationData.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-dot">
                    {index % 2 === 0 ? (
                      <BookOpen className="w-3 h-3 text-white" />
                    ) : (
                      <CalendarIcon className="w-3 h-3 text-white" />
                    )}
                  </div>
                  
                  <div className="timeline-content">
                    <h4 className="font-bold">{item.degree}</h4>
                    <p className="text-muted-foreground">{item.institution}</p>
                    <div className="flex justify-between items-center mt-2 text-sm">
                      <span>{item.period}</span>
                      <span className="font-semibold text-accent">{item.grade}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
