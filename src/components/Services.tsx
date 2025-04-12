
import React from 'react';
import { 
  Monitor, 
  Smartphone, 
  Database, 
  Code, 
  LayoutGrid,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies, optimized for performance and search engines.",
      icon: <Monitor className="text-portfolio-purple" size={36} />,
      features: ["Responsive Design", "SEO Optimization", "E-commerce Solutions", "Content Management"]
    },
    {
      id: 2,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android devices that provide seamless user experiences.",
      icon: <Smartphone className="text-portfolio-purple" size={36} />,
      features: ["Cross-platform Apps", "Native iOS/Android", "App Store Publishing", "Maintenance & Updates"]
    },
    {
      id: 3,
      title: "Backend Development",
      description: "Robust server-side applications, APIs, and database solutions to power your web and mobile applications.",
      icon: <Database className="text-portfolio-purple" size={36} />,
      features: ["API Development", "Database Design", "Authentication", "Cloud Deployment"]
    },
    {
      id: 4,
      title: "UI/UX Design",
      description: "User-centered design solutions that enhance usability, accessibility, and visual appeal of your digital products.",
      icon: <LayoutGrid className="text-portfolio-purple" size={36} />,
      features: ["Wireframing", "Prototyping", "User Testing", "Visual Design"]
    },
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Services I Offer</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I provide comprehensive development solutions to help businesses establish a strong digital presence.
          </p>
          <div className="h-1 w-20 bg-portfolio-purple mx-auto rounded-full mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map(service => (
            <div key={service.id} className="bg-gray-50 rounded-lg p-8 border border-gray-100 shadow-sm card-hover">
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <div className="bg-purple-100 p-3 rounded-full inline-block mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
                
                <div className="mt-auto">
                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Features:</h4>
                    <ul className="grid grid-cols-2 gap-x-2 gap-y-1">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-1 text-sm text-gray-600">
                          <Code className="text-portfolio-blue" size={14} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-8 shadow-sm">
            <h3 className="text-xl md:text-2xl font-bold mb-4">Need a custom solution?</h3>
            <p className="text-gray-600 mb-6">
              Let's discuss your project requirements and create the perfect solution for your business.
            </p>
            <Button 
              onClick={scrollToContact}
              className="bg-portfolio-purple hover:bg-portfolio-purple/90 flex items-center gap-2 mx-auto"
            >
              Let's Build Together
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
