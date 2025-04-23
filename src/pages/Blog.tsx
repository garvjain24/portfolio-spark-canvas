
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Book } from 'lucide-react';

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="py-20 pt-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Blog</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay updated with our latest insights, tutorials, and tech discussions.
            </p>
            <div className="h-1 w-20 bg-portfolio-purple mx-auto rounded-full mt-4"></div>
          </div>
          
          <div className="text-center py-12">
            <Book size={48} className="text-portfolio-purple mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Coming Soon!</h3>
            <p className="text-gray-600">
              We're working hard to bring you exciting content. Stay tuned!
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blog;
