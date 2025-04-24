import React from 'react';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div id="contact" className="pt-20">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
