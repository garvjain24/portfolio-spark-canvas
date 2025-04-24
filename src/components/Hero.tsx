import React from 'react';
import { ArrowRight, Code, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/projects';
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/contact';
    }
  };

  return (
    <div className="hero-gradient min-h-screen flex flex-col justify-center relative overflow-hidden py-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-blue-100 opacity-60 animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-32 h-32 rounded-full bg-purple-100 opacity-60 animate-float" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/3 right-20 w-24 h-24 rounded-full bg-orange-100 opacity-60 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 rounded-full bg-blue-100 opacity-60 animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="md:w-1/2 md:pr-8">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-sm">
              <Code size={16} className="text-portfolio-purple" />
              <span className="text-sm font-medium">Web & App Developer</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Hi, I'm Garv Jain
              <span className="block text-gradient mt-2">Crafting digital experiences</span>
            </h1>
            
            <p className="text-lg text-gray-700 mb-8 max-w-lg">
              I build modern, responsive websites and mobile applications that help businesses grow. Let's turn your ideas into reality.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact}
                className="bg-portfolio-purple hover:bg-portfolio-purple/90 text-white px-8 py-6 rounded-lg font-medium flex items-center gap-2"
              >
                Let's Work Together
                <ArrowRight size={18} />
              </Button>
              
              <Button 
                variant="outline" 
                onClick={scrollToProjects}
                className="border-portfolio-dark text-portfolio-dark hover:text-portfolio-purple hover:border-portfolio-purple px-8 py-6 rounded-lg font-medium flex items-center gap-2"
              >
                Explore Projects
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-12 md:mt-0 relative">
            <div className="bg-white rounded-lg shadow-lg p-6 rotate-3 z-20 relative card-hover">
              <div className="bg-gray-800 rounded-md p-4 mb-4">
                <pre className="text-green-400 text-xs">
                  <code>
                    {`// Developer.js
class Developer {
  constructor() {
    this.name = "Garv Jain";
    this.skills = ["React", "Flutter", "Node.js"];
  }
  
  buildAwesomeProject() {
    return "Let's create something amazing!";
  }
}`}
                  </code>
                </pre>
              </div>
              <div className="flex items-center gap-3 mt-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="text-xs text-gray-500 ml-2">developer-portfolio.js</div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-blue-50 border border-blue-100 rounded-lg shadow-sm p-4 -rotate-6 z-10 hidden md:block">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-portfolio-blue rounded-full"></div>
                <div className="text-xs font-medium">Mobile App Development</div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-orange-50 border border-orange-100 rounded-lg shadow-sm p-4 rotate-6 z-10 hidden md:block">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-portfolio-orange rounded-full"></div>
                <div className="text-xs font-medium">Web Development</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-portfolio-dark opacity-50" />
      </div>
    </div>
  );
};

export default Hero;
