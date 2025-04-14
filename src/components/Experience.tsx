
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BadgeCheck } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Forex Trading",
      period: "2020 - Present",
      company: "Independent",
      description: "Analyze currency pairs and market trends to execute profitable trades. Provide trading signals to clients based on market analysis and technical indicators.",
      achievements: [
        "Developed a consistent trading strategy focusing on major currency pairs",
        "Built a growing client base for forex signal services",
        "Maintained a positive return on investment through strategic trading"
      ]
    },
    {
      title: "Event Organizer",
      period: "2019 - Present",
      company: "Various Organizations",
      description: "Plan and coordinate events from conception to execution. Manage budgets, vendors, and logistics to ensure successful events.",
      achievements: [
        "Successfully organized campus-wide events at Ashesi University",
        "Coordinated corporate networking events with industry professionals",
        "Managed event budgets with efficient resource allocation"
      ]
    },
    {
      title: "Hockey Player",
      period: "2016 - Present",
      company: "School Team",
      description: "Represent the school in various hockey tournaments and competitions. Develop teamwork and strategic thinking skills through competitive play.",
      achievements: [
        "Selected for regional hockey competitions",
        "Helped team secure multiple tournament victories",
        "Developed leadership skills as a senior team member"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">Work Experience</h2>
        
        <div className="mt-16 grid grid-cols-1 gap-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-l-gold">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div>
                    <CardTitle className="text-xl text-navy">{exp.title}</CardTitle>
                    <p className="text-sm text-gray-500">{exp.company}</p>
                  </div>
                  <div className="px-3 py-1 bg-navy-light/10 rounded-full text-navy-light text-sm font-medium">
                    {exp.period}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-600">{exp.description}</p>
                <div className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <BadgeCheck className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                      <p className="text-gray-600">{achievement}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
