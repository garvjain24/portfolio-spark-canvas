
import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Code className="text-portfolio-purple" />
              <span className="text-xl font-bold">Garv<span className="text-portfolio-purple">.</span>Dev</span>
            </Link>
            
            <p className="text-gray-400 mb-4">
              Building beautiful, functional websites and applications that help businesses grow and succeed in the digital world.
            </p>
            
            <div className="text-gray-400 text-sm">
              © {currentYear} Garv Jain. All rights reserved.
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            
            <ul className="space-y-2">
              <li>
                <Link to="/#about" className="text-gray-400 hover:text-white transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link to="/#projects" className="text-gray-400 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/#services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/#testimonials" className="text-gray-400 hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Technologies I Work With</h4>
            
            <div className="flex flex-wrap gap-2">
              {['React', 'Flutter', 'Node.js', 'TypeScript', 'MongoDB', 'Firebase', 'Express', 'Next.js'].map((tech, index) => (
                <span key={index} className="bg-gray-800 px-3 py-1 rounded-full text-xs">
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="mt-6 text-gray-400 flex items-center gap-2">
              <span>Made with</span> 
              <Heart className="text-red-500" size={16} /> 
              <span>in India</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
