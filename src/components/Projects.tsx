
import React, { useState } from 'react';
import { ExternalLink, Github, Code, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const navigate = useNavigate();
  
  // Sample project data
  const projectsData = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-featured online store with product catalog, shopping cart, and payment gateway integration.",
      image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      category: "web",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Fitness Tracker App",
      description: "Mobile app that allows users to track workouts, set fitness goals, and monitor progress over time.",
      image: "https://images.unsplash.com/photo-1539794830467-1f1755804d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      category: "mobile",
      technologies: ["Flutter", "Firebase", "RESTful API"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Restaurant Management System",
      description: "Comprehensive system for restaurant operations including inventory, orders, and customer management.",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      category: "web",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Travel Companion App",
      description: "Mobile app for travelers to explore destinations, create itineraries, and share experiences.",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      category: "mobile",
      technologies: ["Flutter", "Google Maps API", "Firebase"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];
  
  // Filter projects based on selected category
  const filteredProjects = filter === 'all' 
    ? projectsData.slice(0, 2) // Only show 2 projects on homepage
    : projectsData.filter(project => project.category === filter).slice(0, 2);
  
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise in web and mobile development.
          </p>
          <div className="h-1 w-20 bg-portfolio-purple mx-auto rounded-full mt-4"></div>
        </div>
        
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                filter === 'all' 
                  ? 'bg-portfolio-purple text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('web')}
              className={`px-4 py-2 text-sm font-medium ${
                filter === 'web' 
                  ? 'bg-portfolio-purple text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Web Development
            </button>
            <button
              onClick={() => setFilter('mobile')}
              className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                filter === 'mobile' 
                  ? 'bg-portfolio-purple text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Mobile Apps
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-md card-hover">
              <div 
                className="h-48 overflow-hidden cursor-pointer"
                onClick={() => navigate(`/project/${project.id}`)}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 
                    className="text-xl font-semibold hover:text-portfolio-purple cursor-pointer"
                    onClick={() => navigate(`/project/${project.id}`)}
                  >
                    {project.title}
                  </h3>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                    project.category === 'web' 
                      ? 'bg-blue-100 text-portfolio-blue' 
                      : 'bg-orange-100 text-portfolio-orange'
                  }`}>
                    {project.category === 'web' ? 'Web App' : 'Mobile App'}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="bg-gray-100 px-2 py-1 rounded text-xs text-gray-600">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    className="flex-1 flex justify-center items-center gap-2 border-portfolio-purple text-portfolio-purple hover:bg-portfolio-purple hover:text-white"
                    onClick={() => navigate(`/project/${project.id}`)}
                  >
                    <Code size={16} />
                    View Details
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="flex-1 flex justify-center items-center gap-2 border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue hover:text-white"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            className="bg-portfolio-purple hover:bg-portfolio-purple/90 flex items-center gap-2"
            onClick={() => navigate('/projects')}
          >
            View All Projects
            <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
