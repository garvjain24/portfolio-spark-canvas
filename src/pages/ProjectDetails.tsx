
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink, Github, Calendar, Tag, Users, Code } from 'lucide-react';

// Sample project data - this could come from an API in a real app
const projectsData = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-featured online store with product catalog, shopping cart, and payment gateway integration. This project demonstrates building a complete e-commerce solution with modern web technologies, focusing on performance and user experience.",
    fullDescription: "This comprehensive e-commerce platform was built with scalability and performance in mind. It features a responsive product catalog with advanced filtering and search capabilities, a secure shopping cart system, and seamless integration with popular payment gateways. The admin dashboard provides inventory management, order processing, and customer relationship tools. The application was optimized for both desktop and mobile experiences, with particular attention to checkout flow optimization and abandoned cart recovery processes.",
    image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "web",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux", "Express"],
    liveUrl: "#",
    githubUrl: "#",
    date: "January 2023",
    client: "RetailTech Inc.",
    team: ["Garv Jain (Lead Developer)", "UI/UX Designer", "Backend Developer"],
    challenge: "Creating a seamless shopping experience across devices while ensuring secure payment processing and efficient inventory management.",
    solution: "Implemented a microservices architecture with React for the frontend and Node.js for the backend. Used MongoDB for flexible product catalog management and integrated Stripe for secure payments.",
    screenshots: [
      "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    ],
    results: "Increased conversion rate by 25% and reduced cart abandonment by 30%. The platform now handles over 10,000 daily active users with minimal performance impact."
  },
  {
    id: 2,
    title: "Fitness Tracker App",
    description: "Mobile app that allows users to track workouts, set fitness goals, and monitor progress over time.",
    fullDescription: "This fitness tracking mobile application was designed to help users maintain consistent workout routines and achieve their fitness goals. The app features personalized workout plans, progress tracking with visual charts, and social features for motivation. Real-time syncing across devices ensures users always have access to their latest workout data. The app also integrates with various wearable devices to automatically import activity metrics.",
    image: "https://images.unsplash.com/photo-1539794830467-1f1755804d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "mobile",
    technologies: ["Flutter", "Firebase", "RESTful API", "Google Fit API", "Apple HealthKit"],
    liveUrl: "#",
    githubUrl: "#",
    date: "March 2023",
    client: "FitLife Solutions",
    team: ["Garv Jain (Mobile Developer)", "Backend Engineer", "UI Designer"],
    challenge: "Creating a seamless experience across iOS and Android while managing complex health data and ensuring accuracy in workout tracking.",
    solution: "Built with Flutter for cross-platform compatibility and utilized Firebase for real-time data synchronization. Implemented custom algorithms for accurate calorie and exercise tracking.",
    screenshots: [
      "https://images.unsplash.com/photo-1539794830467-1f1755804d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    ],
    results: "Over 50,000 downloads within three months of launch. Users report an average of 35% better adherence to workout routines after using the app for 30 days."
  },
  {
    id: 3,
    title: "Restaurant Management System",
    description: "Comprehensive system for restaurant operations including inventory, orders, and customer management.",
    fullDescription: "This restaurant management system provides a complete solution for food service businesses to manage their day-to-day operations efficiently. It includes modules for inventory tracking, order management, table reservations, employee scheduling, and customer relationship management. The system features a real-time kitchen display system, integrated POS, and comprehensive reporting dashboard. Special attention was paid to creating an intuitive interface that restaurant staff could learn quickly with minimal training.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "web",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.IO", "Chart.js"],
    liveUrl: "#",
    githubUrl: "#",
    date: "June 2023",
    client: "DigiDine Restaurant Group",
    team: ["Garv Jain (Full Stack Developer)", "UI/UX Specialist", "QA Engineer"],
    challenge: "Building a system that could handle high-volume peak hours while providing real-time updates between front-of-house and kitchen staff.",
    solution: "Implemented a real-time communication system using Socket.IO and designed a fault-tolerant architecture that caches critical data locally in case of connectivity issues.",
    screenshots: [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    ],
    results: "Implemented in 12 restaurant locations, resulting in 20% reduction in order errors and 15% increase in table turnover rate during peak hours."
  },
  {
    id: 4,
    title: "Travel Companion App",
    description: "Mobile app for travelers to explore destinations, create itineraries, and share experiences.",
    fullDescription: "This travel companion application helps users discover new destinations, plan comprehensive itineraries, and share their travel experiences. It features interactive maps with points of interest, local recommendations based on user preferences, and automated itinerary creation based on available time and interests. The app works offline, syncing data when connectivity becomes available, making it perfect for international travelers. Users can also connect with fellow travelers and exchange tips and recommendations.",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "mobile",
    technologies: ["Flutter", "Google Maps API", "Firebase", "Cloud Functions", "TripAdvisor API"],
    liveUrl: "#",
    githubUrl: "#",
    date: "October 2023",
    client: "Wanderlust Tech",
    team: ["Garv Jain (Lead Mobile Developer)", "Backend Developer", "UX Researcher"],
    challenge: "Creating an app that works reliably offline while traveling, with efficient data syncing when connectivity is restored.",
    solution: "Implemented robust offline-first architecture using local SQLite database and intelligent sync mechanisms that prioritize essential data when bandwidth is limited.",
    screenshots: [
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    ],
    results: "Featured in travel app collections with a 4.8/5 star rating. Users report saving an average of 4 hours of planning time per trip with the automated itinerary features."
  }
];

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState<any | null>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);
  
  useEffect(() => {
    // Find the project by id
    const projectId = parseInt(id || '0', 10);
    const foundProject = projectsData.find(p => p.id === projectId);
    
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
                  {project.screenshots.map((screenshot: string, index: number) => (
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
                  {project.team.map((member: string, index: number) => (
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
