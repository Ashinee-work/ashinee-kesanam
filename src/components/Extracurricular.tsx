
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface Activity {
  title: string;
  organization: string;
  period: string;
  description: string;
}

const activitiesData: Activity[] = [
  {
    title: "Project Head and Executive Member",
    organization: "IEEE",
    period: "Oct 2022-Apr 2024",
    description: "Led projects, mentored, organized ML/Python/DBMS sessions, gave Uber She++ talk."
  },
  {
    title: "Yoga and Sports",
    organization: "NITK",
    period: "Jul 2022-Nov 2022",
    description: "Yoga Club member, Phoenix Freshers' Cup participant (Throwball, Cricket, Basketball)."
  },
  {
    title: "Placement Coordinator",
    organization: "CDC NITK",
    period: "Jun 2024-Present",
    description: "Coordinated placements, gave SDE career guidance talk."
  }
];

const Extracurricular: React.FC = () => {
  return (
    <section id="extracurricular" className="py-20 section-padding">
      <div className="container mx-auto">
        <h2 className="section-heading text-center">Extracurricular Activities</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {activitiesData.map((activity, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow h-full">
              <CardContent className="p-6 h-full flex flex-col">
                <div className="mb-4">
                  <h3 className="font-bold text-lg">{activity.title}</h3>
                  <p className="text-accent">{activity.organization}</p>
                  <p className="text-sm text-muted-foreground">{activity.period}</p>
                </div>
                
                <p className="flex-grow">{activity.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Extracurricular;
