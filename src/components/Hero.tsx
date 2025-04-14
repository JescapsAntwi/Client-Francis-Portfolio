
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-blue-50 pt-16"
    >
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-3 space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight">
                <span className="text-gold">Hello, I'm</span> Francis Acquah
              </h1>
              <p className="text-xl md:text-2xl text-gray-600">
                Business Administration Student | Forex Trader | Event Organizer
              </p>
            </div>
            
            <p className="text-lg text-gray-600 max-w-2xl">
              A passionate businessperson with interests in financial markets, event organization, 
              and entrepreneurship. I combine my academic knowledge with practical skills to deliver results.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => scrollToSection('contact')}
                size="lg" 
                className="bg-navy hover:bg-navy-dark text-white"
              >
                Get In Touch
              </Button>
              <Button 
                onClick={() => scrollToSection('about')}
                size="lg" 
                variant="outline" 
                className="border-navy text-navy hover:bg-navy hover:text-white"
              >
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="lg:col-span-2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 overflow-hidden rounded-full border-4 border-white shadow-lg">
                <img 
                  src="/lovable-uploads/09b5302b-1619-43ea-aaae-668e8b01e97a.png" 
                  alt="Francis Acquah" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gold text-white p-4 rounded-full shadow-lg">
                <div className="text-center">
                  <div className="text-xs font-medium">Forex</div>
                  <div className="text-lg font-bold">Trader</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => scrollToSection('about')}
            className="rounded-full border border-navy/20 bg-white/50 backdrop-blur-sm"
          >
            <ArrowDown className="h-6 w-6 text-navy" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
