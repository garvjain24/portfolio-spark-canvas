
import React from 'react';
import { Github, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const SocialLinks = () => {
  return (
    <>
      <div>
        <h3 className="text-xl font-semibold mb-6">Follow Me</h3>
        
        <div className="flex gap-4">
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-blue-100 p-3 rounded-full text-blue-700 hover:bg-blue-700 hover:text-white transition-colors"
          >
            <Linkedin size={24} />
          </a>
          
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gray-100 p-3 rounded-full text-gray-800 hover:bg-gray-800 hover:text-white transition-colors"
          >
            <Github size={24} />
          </a>
          
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-pink-100 p-3 rounded-full text-pink-700 hover:bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 hover:text-white transition-colors"
          >
            <Instagram size={24} />
          </a>
        </div>
      </div>
      
      <div className="p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
        <h4 className="font-semibold mb-2">Let's Build Something Awesome Together</h4>
        <p className="text-gray-600 mb-4">
          I'm currently available for freelance projects and full-time opportunities.
        </p>
        <Button className="bg-portfolio-purple hover:bg-portfolio-purple/90 w-full">
          Get a Quote
        </Button>
      </div>
    </>
  );
};
