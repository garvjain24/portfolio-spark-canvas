import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink, Github, Calendar, Tag, Users, Code } from 'lucide-react';
import { Project } from '@/types/Project'; // Import Project interface
import projectsData from '@/data/projects.json'; // Import JSON data

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  useEffect(() => {
    const projectId = parseInt(id || '0', 10);
    const foundProject = (projectsData as Project[]).find(p => p.id === projectId);

    if (foundProject) {
      setProject(foundProject);
      setActiveImage(foundProject.image);
      document.title = `${foundProject.title} | Garv Jain Portfolio`;
    } else {
      navigate('/projects');
    }
  }, [id, navigate]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin w-8 h-8 border-4 border-portfolio-purple border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-gray-600">Loading project details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          {/* Back Button */}
          <Button 
            variant="outline" 
            onClick={() => navigate('/projects')}
            className="mb-6 flex items-center gap-2 border-portfolio-purple text-portfolio-purple hover:bg-portfolio-purple hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Button>
          
          {/* Project Header */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{project.title}</h1>
                <div className="flex items-center gap-2 text-gray-500 mb-4">
                  <Calendar size={16} />
                  <span>{project.date}</span>
                  <span className="mx-2">•</span>
                  <span>for {project.client}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech: string, index: number) => (
                    <span 
                      key={index} 
                      className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700 flex items-center gap-1"
                    >
                      <Tag size={14} />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  className="flex items-center gap-2 border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue hover:text-white"
                  asChild
                >
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="flex items-center gap-2 border-portfolio-dark text-portfolio-dark hover:bg-portfolio-dark hover:text-white"
                  asChild
                >
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github size={16} />
                    View Code
                  </a>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Project Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content - 2/3 width */}
            <div className="lg:col-span-2 space-y-8">
              {/* Main Image */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={activeImage || project.image} 
                  alt={project.title} 
                  className="w-full h-[400px] object-cover object-center"
                />
                
                {/* Thumbnails */}
                <div className="p-4 bg-gray-50 border-t border-gray-100 flex gap-2 overflow-x-auto">
                  {project.screenshots?.map((screenshot: string, index: number) => (
                    <div 
                      key={index}
                      onClick={() => setActiveImage(screenshot)}
                      className={`w-16 h-16 rounded-md overflow-hidden cursor-pointer border-2 ${
                        activeImage === screenshot ? 'border-portfolio-purple' : 'border-transparent'
                      }`}
                    >
                      <img 
                        src={screenshot} 
                        alt={`${project.title} screenshot ${index + 1}`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Description */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {project.fullDescription}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">The Challenge</h3>
                    <p className="text-gray-700">{project.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">The Solution</h3>
                    <p className="text-gray-700">{project.solution}</p>
                  </div>
                </div>
              </div>
              
              {/* Results */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4">Results & Impact</h2>
                <p className="text-gray-700 leading-relaxed">{project.results}</p>
              </div>
            </div>
            
            {/* Sidebar - 1/3 width */}
            <div className="space-y-8">
              {/* Project Details Card */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">Project Details</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">CLIENT</h3>
                    <p className="text-gray-800">{project.client}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">DATE</h3>
                    <p className="text-gray-800">{project.date}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">CATEGORY</h3>
                    <p className="text-gray-800 capitalize">{project.category} Development</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">TECHNOLOGIES</h3>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {project.technologies.map((tech: string, index: number) => (
                        <span 
                          key={index} 
                          className="bg-gray-100 px-2 py-1 text-xs rounded text-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Team Members */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Users size={20} />
                  Team Members
                </h2>
                <ul className="space-y-3">
                  {project.team?.map((member: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="bg-gray-100 rounded-full p-1 mt-0.5">
                        <Code size={14} className="text-gray-600" />
                      </div>
                      <span className="text-gray-700">{member}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Next Project */}
              <div className="bg-gradient-to-br from-portfolio-purple to-portfolio-blue text-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-2">Ready to start your project?</h2>
                <p className="mb-4 text-white/90">Let's discuss how I can help bring your vision to life.</p>
                <Button 
                  className="w-full bg-white text-portfolio-purple hover:bg-white/90"
                  onClick={() => navigate('/#contact')}
                >
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectDetails;
