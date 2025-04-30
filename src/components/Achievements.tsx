
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy } from 'lucide-react';

interface Achievement {
  title: string;
  year?: string;
}

const achievementsData: Achievement[] = [
  { title: "IndiaAI Fellowship 2025" },
  { title: "1st Place, Campus Innovation Change, Incub8 Event 2025, E-Cell NITK" },
  { title: "Grace Hopper Celebration Advancing Inclusion Scholarship, AnitaB.org" },
  { title: "Amazon ML Summer School 2024 Winner" },
  { title: "Qualified Level 1, Flipkart Grid 5.0 (SDE and Robotics)" },
  { title: "Volunteer, NAACL Conference 2024" },
  { title: "Uber She++ 2023 Winner" },
  { title: "CWiCS (Cisco Women in Cybersecurity) Boost Program'23 Winner" },
  { title: "Google Kickstart Farewell Round A, Rank 5432" },
  { title: "KCET Rank 776/201,834, COMEDK Rank 89/66,304 (2021)" },
  { title: "Best Student Award, 12th Grade" },
  { title: "Felicitated by Ex-Chief Minister of Karnataka for 100% in PUC" },
  { title: "Karnataka State Rank 6, Bangalore Urban Rank 1, NMMS Exam 2016" }
];

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 section-padding bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="section-heading text-center">Achievements</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsData.map((achievement, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow bg-card">
              <CardContent className="p-4 flex items-start">
                <div className="mr-4 mt-1">
                  <Trophy className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium">{achievement.title}</p>
                  {achievement.year && (
                    <p className="text-sm text-muted-foreground">{achievement.year}</p>
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

export default Achievements;
