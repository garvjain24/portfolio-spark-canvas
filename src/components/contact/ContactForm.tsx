
import React from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useContactForm } from '@/hooks/useContactForm';


export const ContactForm = () => {
  const {
    formData,
    isSubmitting,
    sheetUrl,
    handleChange,
    handleSubmit
  } = useContactForm();

  return (
    <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border-gray-300 focus:border-portfolio-purple focus:ring-portfolio-purple"
          />
        </div>
        
        <div>
          <Input
            name="email"
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border-gray-300 focus:border-portfolio-purple focus:ring-portfolio-purple"
          />
        </div>
        
        <div>
          <Input
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="border-gray-300 focus:border-portfolio-purple focus:ring-portfolio-purple"
          />
        </div>
        
        <div>
          <Textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="border-gray-300 focus:border-portfolio-purple focus:ring-portfolio-purple min-h-[150px]"
          />
        </div>
        
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-portfolio-purple hover:bg-portfolio-purple/90 flex items-center justify-center gap-2"
        >
          {isSubmitting ? 'Sending...' : (
            <>
              <Send size={16} />
              Send Message
            </>
          )}
        </Button>
      </form>
    </div>
  );
};
