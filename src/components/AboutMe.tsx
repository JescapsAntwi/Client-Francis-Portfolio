
import React from 'react';
import { Briefcase, LineChart, Calendar, User, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutMe = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mt-16">
          <div className="lg:col-span-2 flex flex-col justify-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gold/10 flex items-center justify-center">
                  <User className="h-5 w-5 text-gold" />
                </div>
                <h3 className="text-xl font-semibold text-navy">Personal Background</h3>
              </div>
              <p className="text-gray-600">
                My name is Acquah Francis, I am a businessperson, that is to say I am interested in anything legal that comes with profit. I have good marketing skills and excel at working with people in diverse environments.
              </p>
              
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gold/10 flex items-center justify-center">
                  <BookOpen className="h-5 w-5 text-gold" />
                </div>
                <h3 className="text-xl font-semibold text-navy">Education</h3>
              </div>
              <p className="text-gray-600">
                Currently pursuing a degree in Business Administration at Ashesi University, where I'm developing a strong foundation in business principles, marketing strategies, and financial management.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="mb-4 text-gold">
                  <LineChart className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-navy">Forex Trading</h3>
                <p className="text-gray-600">
                  As a forex trader and signal provider, I analyze market trends and help clients navigate financial markets for optimal returns.
                </p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="mb-4 text-gold">
                  <Briefcase className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-navy">Business & Marketing</h3>
                <p className="text-gray-600">
                  My entrepreneurial mindset drives me to seek out profitable opportunities while leveraging my marketing skills to build strong client relationships.
                </p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="mb-4 text-gold">
                  <Calendar className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-navy">Event Organization</h3>
                <p className="text-gray-600">
                  I plan and execute events with precision and creativity, ensuring memorable experiences for all participants.
                </p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="mb-4 text-gold">
                  <LineChart className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-navy">Financial Markets</h3>
                <p className="text-gray-600">
                  My enthusiasm for financial markets drives me to constantly learn about new trading strategies and investment opportunities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
