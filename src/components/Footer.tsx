
import React from 'react';
import { ChevronRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-navy text-white">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">
              <span className="text-gold">Francis</span> Acquah
            </h2>
            <p className="text-gray-300 mb-6 max-w-md">
              A Business Administration student at Ashesi University with interests in 
              forex trading, financial markets, event organization, and entrepreneurship.
            </p>
            <p className="text-gray-400 flex items-center">
              <span className="flex-shrink-0 bg-gold/20 px-3 py-1 rounded-full text-gold text-sm font-medium mr-2">
                Available for opportunities
              </span>
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-gold flex items-center transition-colors"
                >
                  <ChevronRight className="h-4 w-4 mr-1" /> Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-gold flex items-center transition-colors"
                >
                  <ChevronRight className="h-4 w-4 mr-1" /> About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('experience')}
                  className="text-gray-300 hover:text-gold flex items-center transition-colors"
                >
                  <ChevronRight className="h-4 w-4 mr-1" /> Experience
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('skills')}
                  className="text-gray-300 hover:text-gold flex items-center transition-colors"
                >
                  <ChevronRight className="h-4 w-4 mr-1" /> Skills
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-gold flex items-center transition-colors"
                >
                  <ChevronRight className="h-4 w-4 mr-1" /> Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gold">Expertise</h3>
            <ul className="space-y-2">
              <li className="text-gray-300 hover:text-white flex items-center transition-colors">
                <ChevronRight className="h-4 w-4 mr-1" /> Forex Trading
              </li>
              <li className="text-gray-300 hover:text-white flex items-center transition-colors">
                <ChevronRight className="h-4 w-4 mr-1" /> Event Organization
              </li>
              <li className="text-gray-300 hover:text-white flex items-center transition-colors">
                <ChevronRight className="h-4 w-4 mr-1" /> Business Administration
              </li>
              <li className="text-gray-300 hover:text-white flex items-center transition-colors">
                <ChevronRight className="h-4 w-4 mr-1" /> Marketing
              </li>
              <li className="text-gray-300 hover:text-white flex items-center transition-colors">
                <ChevronRight className="h-4 w-4 mr-1" /> Hockey
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} Francis Acquah. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
