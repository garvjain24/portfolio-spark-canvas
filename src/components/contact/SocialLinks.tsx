
import React from 'react';
import { Github, Instagram, Linkedin, ExternalLink, LinkedinIcon } from 'lucide-react';
import { TbBrandFiverr } from "react-icons/tb";
import { SiUpwork , SiFreelancer} from "react-icons/si";
import { Button } from '@/components/ui/button';

export const SocialLinks = () => {
  const workPlatforms = [
    {
      name: "Upwork",
      url: "https://www.upwork.com/",
      bgColor: "bg-[#14a800]",
      hoverColor: "hover:bg-[#14a800]/90"
    },
    {
      name: "Fiverr",
      url: "https://www.fiverr.com/",
      bgColor: "bg-[#1dbf73]",
      hoverColor: "hover:bg-[#1dbf73]/90"
    },
    {
      name: "Freelancer",
      url: "https://www.freelancer.com/",
      bgColor: "bg-[#29b2fe]",
      hoverColor: "hover:bg-[#29b2fe]/90"
    }
  ];

  return (
    <div className="space-y-8">
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
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-green-100 p-3 rounded-full text-green-800 hover:bg-gray-800 hover:text-white transition-colors"
          >
            <TbBrandFiverr size={24} />
          </a>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-green-100 p-3 rounded-full text-green-800 hover:bg-gray-800 hover:text-white transition-colors"
          >
            <SiUpwork size={24} />
          </a>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-green-100 p-3 rounded-full text-green-800 hover:bg-gray-800 hover:text-white transition-colors"
          >
            <SiFreelancer size={24} />
          </a>
        </div>
      </div>
      
      <div className="p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
        <h4 className="font-semibold mb-4">Find Me On</h4>
        <div className="grid gap-3">
          {workPlatforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-2 py-2 px-4 rounded-lg text-white transition-all ${platform.bgColor} ${platform.hoverColor}`}
            >
              {platform.name}
              <ExternalLink size={16} />
            </a>
          ))}
        </div>
        <p className="text-gray-600 text-sm mt-4">
          I'm available for freelance projects and full-time opportunities.
        </p>
      </div>
    </div>
  );
};
