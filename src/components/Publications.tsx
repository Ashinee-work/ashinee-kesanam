
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowUpRight } from 'lucide-react';

interface Publication {
  title: string;
  description: string;
  link?: string;
  githubLink?: string;
}

const publicationsData: Publication[] = [
  {
    title: "Focal-RoBERTa: Multi-head attention RoBERTa with focal loss for emotion classification",
    description: "SEM Eval 2025, Rank 13/80.",
    link: "#",
    githubLink: "#"
  },
  {
    title: "LIGHT-ME: Lightweight attention-based multimodal emotion detection",
    description: "Submitted to MIND Conference 2024.",
    link: "#"
  },
  {
    title: "Leveraging LLMs for Zero-Shot Feature Selection",
    description: "Fine-tuned LLM for heart disease/diabetes prediction, submitted to MIND Conference 2024.",
    link: "#",
    githubLink: "#"
  },
  {
    title: "Leveraging Physical and Semantic Features",
    description: "Sig Edu Shared Task 2024, Bio-BERT embeddings, Ranks 19 and 12.",
    link: "#"
  },
  {
    title: "End-to-End Pipeline for NL Query",
    description: "NLP-driven spacecraft health data analytics, ICITIIT 2024, IEEE.",
    link: "#"
  },
  {
    title: "Comprehensive Multi-Modal Analysis",
    description: "Vehicle violation detection, ICISPD 2023, Springer.",
    link: "#",
    githubLink: "#"
  }
];

const Publications: React.FC = () => {
  return (
    <section id="publications" className="py-20 section-padding">
      <div className="container mx-auto">
        <h2 className="section-heading text-center">Publications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {publicationsData.map((publication, index) => (
            <Card key={index} className="flex flex-col h-full hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex flex-col h-full">
                <h3 className="font-bold text-lg mb-2">{publication.title}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">{publication.description}</p>
                
                <div className="mt-auto flex space-x-4">
                  {publication.link && (
                    <a 
                      href={publication.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm hover:text-accent transition-colors"
                    >
                      <ArrowUpRight className="w-4 h-4 mr-1" />
                      <span>View Paper</span>
                    </a>
                  )}
                  
                  {publication.githubLink && (
                    <a 
                      href={publication.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm hover:text-accent transition-colors"
                    >
                      <ArrowUpRight className="w-4 h-4 mr-1" />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
