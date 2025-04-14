
import React from 'react';
import { Progress } from '@/components/ui/progress';

interface SkillItemProps {
  name: string;
  percentage: number;
  color?: string;
}

const SkillItem = ({ name, percentage, color = "bg-gold" }: SkillItemProps) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-navy font-medium">{name}</span>
        <span className="text-gray-500">{percentage}%</span>
      </div>
      <Progress value={percentage} className="h-2" />
    </div>
  );
};

const Skills = () => {
  const businessSkills = [
    { name: "Marketing", percentage: 90 },
    { name: "Interpersonal Communication", percentage: 95 },
    { name: "Financial Analysis", percentage: 85 },
    { name: "Strategic Planning", percentage: 80 },
  ];

  const technicalSkills = [
    { name: "Forex Trading", percentage: 92 },
    { name: "Technical Analysis", percentage: 88 },
    { name: "Event Management", percentage: 90 },
    { name: "Project Coordination", percentage: 85 },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title">My Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          <div>
            <h3 className="text-xl font-semibold mb-8 text-navy relative inline-block">
              Business Skills
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gold rounded mt-1 transform -translate-y-2"></span>
            </h3>
            
            <div className="space-y-6">
              {businessSkills.map((skill, index) => (
                <SkillItem 
                  key={index}
                  name={skill.name}
                  percentage={skill.percentage}
                />
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-8 text-navy relative inline-block">
              Technical Skills
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gold rounded mt-1 transform -translate-y-2"></span>
            </h3>
            
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <SkillItem 
                  key={index}
                  name={skill.name}
                  percentage={skill.percentage}
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16 bg-navy/5 rounded-lg p-8">
          <h3 className="text-xl font-semibold mb-4 text-navy">Key Highlights</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 bg-gold rounded-full"></span>
              Business Administration Student at Ashesi University
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 bg-gold rounded-full"></span>
              Forex Trader & Signal Provider
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 bg-gold rounded-full"></span>
              Financial Markets Enthusiast
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 bg-gold rounded-full"></span>
              Event Organizer
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 bg-gold rounded-full"></span>
              Hockey Player
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 bg-gold rounded-full"></span>
              Skilled in Interpersonal Communication
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
