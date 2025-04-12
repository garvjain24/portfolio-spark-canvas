
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Linkedin, Github, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sheetUrl, setSheetUrl] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSheetUrlChange = () => {
    setSheetUrl("https://script.google.com/macros/s/AKfycbxQG_3OVsgi_FoZ35ZNjnECtisz4mtPWYWdFrBfpwrXwM6tMdmOUDUyx-uSS0YZgaba/exec");
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (!sheetUrl) {
      toast({
        title: "Missing Google Sheet URL",
        description: "Please enter your Google Sheet web app URL",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }
    
    try {
      const response = await fetch(sheetUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString()
        }),
      });
      
      // Since no-cors mode doesn't return readable response
      // We'll assume success if no error is thrown
      toast({
        title: "Message sent successfully!",
        description: "Your message has been saved to Google Sheets.",
      });
      
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error sending message",
        description: "There was a problem saving your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
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
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
            
            /*<div className="mb-4 p-4 bg-blue-50 rounded-lg">
              <h4 className="font-medium text-blue-700 mb-2">Google Sheet Integration</h4>
              <p className="text-sm text-blue-600 mb-3">
                Enter the Google Apps Script Web App URL to connect this form to your Google Sheet.
              </p>
              <Input
                type="url"
                placeholder="Paste your Google Script Web App URL here"
                value={sheetUrl}
                onChange={handleSheetUrlChange}
                className="border-blue-300 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>*/
            
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
          
          <div className="space-y-8">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
