
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-navy">
              <span className="text-gold">Francis</span> Acquah
            </h1>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost"
                onClick={() => scrollToSection('home')}
                className="text-gray-600 hover:text-navy hover:bg-gray-100"
              >
                Home
              </Button>
              <Button 
                variant="ghost"
                onClick={() => scrollToSection('about')}
                className="text-gray-600 hover:text-navy hover:bg-gray-100"
              >
                About
              </Button>
              <Button 
                variant="ghost"
                onClick={() => scrollToSection('experience')}
                className="text-gray-600 hover:text-navy hover:bg-gray-100"
              >
                Experience
              </Button>
              <Button 
                variant="ghost"
                onClick={() => scrollToSection('skills')}
                className="text-gray-600 hover:text-navy hover:bg-gray-100"
              >
                Skills
              </Button>
              <Button 
                variant="default"
                onClick={() => scrollToSection('contact')}
                className="bg-navy hover:bg-navy-dark text-white"
              >
                Contact
              </Button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              onClick={toggleMenu}
              className="text-gray-600 hover:text-navy"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
        
        {/* Mobile menu */}
        <div className={cn(
          "md:hidden transition-all duration-300 ease-in-out",
          isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        )}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Button 
              variant="ghost"
              onClick={() => scrollToSection('home')}
              className="w-full justify-start text-gray-600 hover:text-navy hover:bg-gray-100"
            >
              Home
            </Button>
            <Button 
              variant="ghost"
              onClick={() => scrollToSection('about')}
              className="w-full justify-start text-gray-600 hover:text-navy hover:bg-gray-100"
            >
              About
            </Button>
            <Button 
              variant="ghost"
              onClick={() => scrollToSection('experience')}
              className="w-full justify-start text-gray-600 hover:text-navy hover:bg-gray-100"
            >
              Experience
            </Button>
            <Button 
              variant="ghost"
              onClick={() => scrollToSection('skills')}
              className="w-full justify-start text-gray-600 hover:text-navy hover:bg-gray-100"
            >
              Skills
            </Button>
            <Button 
              variant="default"
              onClick={() => scrollToSection('contact')}
              className="w-full bg-navy hover:bg-navy-dark text-white"
            >
              Contact
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
