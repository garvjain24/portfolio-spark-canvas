
import React from 'react';
import { ContactForm } from './contact/ContactForm';
import { ContactInfo } from './contact/ContactInfo';
import { SocialLinks } from './contact/SocialLinks';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how I can help bring your ideas to life.
          </p>
          <div className="h-1 w-20 bg-portfolio-purple mx-auto rounded-full mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <ContactForm />
          <div className="space-y-8">
            <ContactInfo />
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
