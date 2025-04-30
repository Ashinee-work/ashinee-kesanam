
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

interface LiteratureSurvey {
  title: string;
  description: string;
  skills: string[];
}

const literatureSurvey: LiteratureSurvey = {
  title: "SmartGuard",
  description: "Sensor-enabled car security with license plate and facial recognition.",
  skills: ["Face Recognition", "Computer Vision", "CNN", "Sensors"]
};

interface SkillCategory {
  category: string;
  skills: string[];
}

const skillsData: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Python", "C", "C++", "SQL", "Java (Familiar)", "R (Familiar)"]
  },
  {
    category: "Frameworks",
    skills: ["Git", "Linux", "Scikit-learn", "Tensorflow", "Keras"]
  },
  {
    category: "Skills",
    skills: [
      "Computer Vision", 
      "Pattern Recognition", 
      "Numpy", 
      "Pandas", 
      "Matplotlib", 
      "HTML", 
      "CSS", 
      "Google APIs"
    ]
  },
  {
    category: "Courses",
    skills: [
      "Data Structures & Algorithms", 
      "Artificial Intelligence", 
      "Machine Learning", 
      "Natural Language Processing", 
      "Data Science", 
      "Linear Algebra", 
      "Probability and Statistics"
    ]
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 section-padding">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="section-heading">Skills</h2>
            
            <Tabs defaultValue="Languages" className="mb-8">
              <TabsList className="mb-4">
                {skillsData.map(category => (
                  <TabsTrigger key={category.category} value={category.category}>
                    {category.category}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {skillsData.map(category => (
                <TabsContent key={category.category} value={category.category}>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex flex-wrap">
                        {category.skills.map((skill, index) => (
                          <Badge key={index} className="mr-2 mb-2">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
          
          <div>
            <h2 className="section-heading">Literature Survey</h2>
            
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">{literatureSurvey.title}</h3>
                <p className="mb-4">{literatureSurvey.description}</p>
                
                <div>
                  <p className="font-medium mb-2">Skills:</p>
                  <div className="flex flex-wrap">
                    {literatureSurvey.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="mr-2 mb-2">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
