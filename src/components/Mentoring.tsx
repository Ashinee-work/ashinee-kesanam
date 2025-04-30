
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarIcon } from 'lucide-react';

interface MentoringProject {
  title: string;
  organization: string;
  period: string;
  description: string;
  skills: string[];
}

const mentoringData: MentoringProject[] = [
  {
    title: "Handwritten Character Recognition",
    organization: "IEEE-NITK",
    period: "Feb 2023-May 2023",
    description: "Mentored CNN model, 92% accuracy.",
    skills: ["Deep Learning", "Computer Vision", "Tensorflow", "Keras"]
  },
  {
    title: "Virtual Fashion Try On",
    organization: "IEEE-NITK",
    period: "Sep 2023-Mar 2024",
    description: "Mentored GAN-based model.",
    skills: ["GAN", "Deep Learning", "Segmentation"]
  },
  {
    title: "Mess Complaint Registration",
    organization: "NITK",
    period: "Jan 2025-Apr 2025",
    description: "Mentored synthetic dataset creation, built dashboards.",
    skills: ["ML", "React", "Node.js"]
  },
  {
    title: "AI Based Smart Kitchen",
    organization: "NITK",
    period: "Jan 2025-Apr 2025",
    description: "Mentored RAG-based LLM for recipe generation.",
    skills: ["LLM", "NLP", "Computer Vision"]
  }
];

const Mentoring: React.FC = () => {
  return (
    <section id="mentoring" className="py-20 section-padding bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="section-heading text-center">Mentoring Experience</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mentoringData.map((project, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-1">{project.title}</h3>
                <div className="flex items-center mb-4">
                  <span className="text-accent font-medium">{project.organization}</span>
                  <span className="mx-2">•</span>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CalendarIcon className="w-4 h-4 mr-1" />
                    <span>{project.period}</span>
                  </div>
                </div>
                
                <p className="mb-4">{project.description}</p>
                
                <div>
                  <p className="font-medium mb-2">Skills:</p>
                  <div className="flex flex-wrap">
                    {project.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary" className="mr-2 mb-2">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mentoring;
