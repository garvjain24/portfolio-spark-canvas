
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const useContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sheetUrl  =  "https://script.google.com/macros/s/AKfycbxQG_3OVsgi_FoZ35ZNjnECtisz4mtPWYWdFrBfpwrXwM6tMdmOUDUyx-uSS0YZgaba/exec";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try{if (!sheetUrl) {
      toast({
        title: "Missing Google Sheet URL",
        description: "Please enter your Google Sheet web app URL",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }}catch (error) {
      console.error(error);
    }
    finally {
      setIsSubmitting(false); // Ensure this is called
    }

    
    try {
      await fetch(sheetUrl, {
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
      
      toast({
        title: "Message sent successfully!",
        description: "Your message has been saved to Google Sheets.",
      });
      
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

  return {
    formData,
    isSubmitting,
    sheetUrl,
    handleChange,
    handleSubmit
  };
};
