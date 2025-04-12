
import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Amit Kumar",
      role: "CEO, TechStartup",
      content: "Working with Garv was an excellent experience. He delivered our e-commerce platform ahead of schedule and exceeded our expectations in terms of quality and functionality.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
      rating: 5,
      project: "E-commerce Website"
    },
    {
      id: 2,
      name: "Priya Singh",
      role: "Founder, HealthTech",
      content: "Garv created an outstanding mobile app for our healthcare platform. His attention to detail and understanding of user experience resulted in an app that our customers love using.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
      rating: 5,
      project: "Healthcare Mobile App"
    },
    {
      id: 3,
      name: "Vikram Sharma",
      role: "Marketing Director, RetailBrand",
      content: "Our company website redesign was in safe hands with Garv. He transformed our outdated site into a modern, responsive platform that has significantly increased our conversion rates.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
      rating: 4,
      project: "Website Redesign"
    },
  ];
  
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, index) => (
      <Star 
        key={index} 
        size={16} 
        className={index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} 
      />
    ));
  };
  
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take my word for it. Here's what my clients have to say about working with me.
          </p>
          <div className="h-1 w-20 bg-portfolio-purple mx-auto rounded-full mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="bg-white rounded-lg p-6 shadow-md relative card-hover">
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-md">
                <Quote className="text-portfolio-purple" size={24} />
              </div>
              
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>
              
              <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
              
              <div className="text-xs text-gray-500 mt-4 pt-4 border-t">
                Project: <span className="font-medium">{testimonial.project}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-1 text-portfolio-purple">
            <span className="font-medium">More testimonials available upon request</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
