
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowUpRight, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  skills: string[];
  githubLink?: string;
  webLink?: string;
  kaggleLink?: string;
}

interface ProjectCategory {
  category: string;
  projects: Project[];
}

const projectsData: ProjectCategory[] = [
  {
    category: "major",
    projects: [
      {
        title: "VITAL App",
        description: "AI virtual mental health counselor using Hugging Face models, with journaling, tests, podcasts, meditation.",
        skills: ["React", "Supabase", "LLMs", "Mental Health", "AI"],
        githubLink: "#"
      }
    ]
  },
  {
    category: "capstone",
    projects: [
      {
        title: "NITK Health Care Automation",
        description: "Online health check-up tools (fracture detection, eye/heart disease prediction, diet recommendation).",
        skills: ["Express", "React", "Node.js", "REST API", "MySQL", "ML"],
        githubLink: "#",
        webLink: "#"
      }
    ]
  },
  {
    category: "other",
    projects: [
      {
        title: "MRI Annotator",
        description: "RESTful app for MRI annotation, 83% accuracy brain tumor segmentation.",
        skills: ["MySQL", "React", "Express", "Node.js", "Deep Learning", "Flask"],
        githubLink: "#"
      },
      {
        title: "Lumbar Degenerative Disease Detection",
        description: "Used DenseNet, YOLO, Custom 3D CNN on RSNA 2024 dataset.",
        skills: ["Data Analytics", "Computer Vision", "NLP"],
        kaggleLink: "#"
      },
      {
        title: "Human or AI Text Classification",
        description: "SEM EVAL 2024, RoBERTa-based, 86% accuracy.",
        skills: ["NLP", "Deep Learning"],
        githubLink: "#"
      },
      {
        title: "Face Mask Recognition",
        description: "CNN with PyTorch, 90.31% accuracy.",
        skills: ["Deep Learning", "PyTorch", "Data Parallelism"],
        githubLink: "#"
      },
      {
        title: "Unsupervised Text Classification",
        description: "Multinomial Naive Bayes, 97% accuracy.",
        skills: ["ML", "Feature Extraction", "Sklearn"],
        githubLink: "#"
      },
      {
        title: "Citation Link Prediction",
        description: "XGBoost, Random Forest, 48.62% accuracy.",
        skills: ["ML", "NetworkX"],
        githubLink: "#"
      },
      {
        title: "Happy Health - Prescription Translator",
        description: "Used EasyOCR for prescription text, displays medicine images, nearby hospitals.",
        skills: ["EasyOCR", "OpenCV", "Matplotlib", "Pandas", "PIL"],
        githubLink: "#"
      },
      {
        title: "Vehicle Traffic Violation Detection",
        description: "YOLOv3, Hopcroft-Karp, 75% accuracy.",
        skills: ["OpenCV", "YOLOv3", "Matplotlib"],
        githubLink: "#"
      }
    ]
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 section-padding bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="section-heading text-center">Projects</h2>
        
        <Tabs defaultValue="all" className="mb-8">
          <div className="flex justify-center">
            <TabsList>
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="major">Major Project</TabsTrigger>
              <TabsTrigger value="capstone">Capstone Project</TabsTrigger>
              <TabsTrigger value="other">Other Projects</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all" className="mt-8">
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {projectsData.flatMap(category => 
                category.projects.map((project, index) => (
                  <ProjectCard key={`${category.category}-${index}`} project={project} />
                ))
              )}
            </div>
          </TabsContent>
          
          {projectsData.map(category => (
            <TabsContent key={category.category} value={category.category} className="mt-8">
              <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {category.projects.map((project, index) => (
                  <ProjectCard key={`${category.category}-${index}`} project={project} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-card-header">
        <h3 className="font-bold text-lg mb-1">{project.title}</h3>
      </div>
      
      <div className="project-card-body">
        <p className="text-muted-foreground mb-4">{project.description}</p>
        
        <div className="mb-4">
          {project.skills.map((skill, index) => (
            <span key={index} className="skill-badge">
              {skill}
            </span>
          ))}
        </div>
      </div>
      
      <div className="project-card-footer">
        <div className="flex space-x-3">
          {project.githubLink && (
            <a 
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm hover:text-accent transition-colors"
            >
              <Github className="w-4 h-4 mr-1" />
              <span>GitHub</span>
            </a>
          )}
          
          {project.webLink && (
            <a 
              href={project.webLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm hover:text-accent transition-colors"
            >
              <ArrowUpRight className="w-4 h-4 mr-1" />
              <span>Live Demo</span>
            </a>
          )}
          
          {project.kaggleLink && (
            <a 
              href={project.kaggleLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm hover:text-accent transition-colors"
            >
              <ArrowUpRight className="w-4 h-4 mr-1" />
              <span>Kaggle</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
