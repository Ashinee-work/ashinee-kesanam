
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarIcon, MapPinIcon } from 'lucide-react';

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  skills: string[];
}

const experienceData: ExperienceItem[] = [
  {
    company: "HSpectrum",
    role: "Founder & CTO",
    period: "Sep 2024-Present",
    location: "Remote",
    description: "Non-profit promoting AI in healthcare. Built website using Supabase, React, Postgres. Managed research activities.",
    skills: ["AI", "Healthcare", "React", "Supabase", "Postgres", "Research Management"]
  },
  {
    company: "CogAI4Sci, NUS",
    role: "Research Intern",
    period: "Dec 2024-Apr 2025",
    location: "Remote",
    description: "Worked on LLM tokenization for video datasets, extracting context/content tokens from keyframes.",
    skills: ["LLMs", "Computer Vision", "Video Processing", "Research"]
  },
  {
    company: "HSuite",
    role: "Founder & CTO",
    period: "Dec 2024-Mar 2024",
    location: "Remote",
    description: "Developed HIMS software for administrative/clinical tasks. Paused due to competition. Community of 400 members.",
    skills: ["HIMS", "Healthcare Software", "Community Building", "Project Management"]
  },
  {
    company: "Uber India",
    role: "SWE Intern (Data Backend)",
    period: "May 2024-Jul 2024",
    location: "Bangalore",
    description: "Built Tableau dashboards, automated failure alerts, migrated MySQL DB, designed dynamic data pipelines.",
    skills: ["API Development", "Java (Springboot)", "Python", "Tableau", "MySQL", "Data Pipelines"]
  },
  {
    company: "Uber India",
    role: "UberSTAR Intern",
    period: "Jun 2023-Aug 2023",
    location: "Bangalore",
    description: "Developed data quality reporting tool with visualizations, integrated Google Drive APIs.",
    skills: ["SQL", "Data Visualizations", "Google APIs", "Ipywidgets", "JSON"]
  },
  {
    company: "GKN Aerospace",
    role: "ML Research Intern",
    period: "Dec 2023-Jan 2024",
    location: "Bangalore",
    description: "Created dataset for aviation wire character recognition, used YOLOv8 (Precision: 0.878, Recall: 0.885).",
    skills: ["Dataset Creation", "YOLOv8", "OCR", "Computer Vision"]
  },
  {
    company: "Scalar Team",
    role: "Web Admin & Member",
    period: "Sep 2023-Ongoing",
    location: "NITK",
    description: "Built static website for SCaLAR Lab NITK, working on H-Suite capstone.",
    skills: ["HTML", "CSS", "JavaScript", "Deep Learning", "Web Development"]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 section-padding">
      <div className="container mx-auto">
        <h2 className="section-heading text-center">Work Experience</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experienceData.map((item, index) => (
            <div key={index} className="experience-card">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-xl">{item.role}</h3>
                  <p className="text-accent font-medium">{item.company}</p>
                </div>
              </div>
              
              <div className="flex items-center text-sm text-muted-foreground mb-4">
                <div className="flex items-center mr-4">
                  <CalendarIcon className="w-4 h-4 mr-1" />
                  <span>{item.period}</span>
                </div>
                <div className="flex items-center">
                  <MapPinIcon className="w-4 h-4 mr-1" />
                  <span>{item.location}</span>
                </div>
              </div>
              
              <p className="mb-4">{item.description}</p>
              
              <div className="mt-4">
                <p className="font-medium mb-2">Skills:</p>
                <div className="flex flex-wrap">
                  {item.skills.map((skill, i) => (
                    <Badge key={i} variant="secondary" className="mr-2 mb-2">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
