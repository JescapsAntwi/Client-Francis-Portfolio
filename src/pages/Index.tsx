
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutMe from '@/components/AboutMe';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import DownloadCV from '@/components/DownloadCV';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <AboutMe />
      <Experience />
      <Skills />
      <DownloadCV />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
