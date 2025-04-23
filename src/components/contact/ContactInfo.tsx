
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export const ContactInfo = () => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
      
      <div className="space-y-4">
        <div className="flex items-start gap-4">
          <div className="bg-purple-100 p-3 rounded-full">
            <Mail className="text-portfolio-purple" size={20} />
          </div>
          <div>
            <h4 className="font-medium text-gray-900">Email</h4>
            <a href="mailto:hello@garvjain.com" className="text-portfolio-blue hover:underline">
              hello@garvjain.com
            </a>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="bg-purple-100 p-3 rounded-full">
            <Phone className="text-portfolio-purple" size={20} />
          </div>
          <div>
            <h4 className="font-medium text-gray-900">Phone</h4>
            <a href="tel:+919876543210" className="text-portfolio-blue hover:underline">
              +91 98765 43210
            </a>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="bg-purple-100 p-3 rounded-full">
            <MapPin className="text-portfolio-purple" size={20} />
          </div>
          <div>
            <h4 className="font-medium text-gray-900">Location</h4>
            <p className="text-gray-600">
              Mumbai, Maharashtra, India
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
