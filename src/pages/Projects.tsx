import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ExternalLink, Github, Code } from 'lucide-react';
import { Button } from '@/components/ui/custom-button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/custom-card';
import { Project } from '@/types/Project'; // Import Project interface
import projectsData from '@/data/projects.json'; // Import JSON data

const Projects = () => {
  const [filter, setFilter] = useState<'all' | 'web' | 'mobile'>('all');
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Projects | Garv Jain Portfolio";
  }, []);

  const filteredProjects = filter === 'all' 
    ? projectsData as Project[] 
    : (projectsData as Project[]).filter(project => project.category === filter);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section id="projects" className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white flex-grow">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-gradient text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and expertise in web and mobile development.
            </p>
            <div className="h-1 w-20 bg-portfolio-purple mx-auto rounded-full mt-4"></div>
          </div>
          
          <div className="flex justify-center mb-10">
            <div className="p-1 bg-gray-100 rounded-full inline-flex">
              <button
                onClick={() => setFilter('all')}
                className={`px-5 py-2 text-sm font-medium rounded-full transition-all ${
                  filter === 'all' 
                    ? 'bg-portfolio-purple text-white shadow-md' 
                    : 'bg-transparent text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Projects
              </button>
              <button
                onClick={() => setFilter('web')}
                className={`px-5 py-2 text-sm font-medium rounded-full transition-all ${
                  filter === 'web' 
                    ? 'bg-portfolio-blue text-white shadow-md' 
                    : 'bg-transparent text-gray-700 hover:bg-gray-200'
                }`}
              >
                Web Development
              </button>
              <button
                onClick={() => setFilter('mobile')}
                className={`px-5 py-2 text-sm font-medium rounded-full transition-all ${
                  filter === 'mobile' 
                    ? 'bg-portfolio-orange text-white shadow-md' 
                    : 'bg-transparent text-gray-700 hover:bg-gray-200'
                }`}
              >
                Mobile Apps
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} variant={project.category === 'web' ? 'glass' : 'gradient'}>
                <div 
                  className="h-52 overflow-hidden cursor-pointer relative group"
                  onClick={() => navigate(`/project/${project.id}`)}
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <h4 className="font-semibold">{project.title}</h4>
                      <p className="text-sm text-white/80">Click to view details</p>
                    </div>
                  </div>
                </div>
                
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 
                      className="text-xl font-bold text-gray-800 hover:text-portfolio-purple cursor-pointer transition-colors"
                      onClick={() => navigate(`/project/${project.id}`)}
                    >
                      {project.title}
                    </h3>
                    <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                      project.category === 'web' 
                        ? 'bg-blue-100 text-portfolio-blue' 
                        : 'bg-orange-100 text-portfolio-orange'
                    }`}>
                      {project.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-xs text-gray-600">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="flex gap-3">
                  <Button 
                    variant="outline" 
                    className="flex-1 flex justify-center items-center gap-2"
                    onClick={() => navigate(`/project/${project.id}`)}
                  >
                    <Code size={16} />
                    Details
                  </Button>
                  
                  <Button 
                    variant="gradient" 
                    className="flex-1 flex justify-center items-center gap-2"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Projects;
