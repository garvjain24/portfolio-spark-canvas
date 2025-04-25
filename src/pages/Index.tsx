
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import Testtimonials from '@/components/Testimonials';

const Index = () => {
  useEffect(() => {
    // Update page title
    document.title = "Garv Jain | Web & App Developer";
    
    // Smooth scroll to section if there's a hash in the URL
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Testtimonials />
      <Footer />
    </div>
  );
};

export default Index;
