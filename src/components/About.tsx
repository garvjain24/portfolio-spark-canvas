
import React from 'react';
import { 
  CheckCircle, 
  Code, 
  Smartphone, 
  Server, 
  Database
} from 'lucide-react';

const About = () => {
  const skills = [
    { name: "UI/UX Design", icon: <CheckCircle className="text-portfolio-purple" size={18} /> },
    { name: "Web Development", icon: <CheckCircle className="text-portfolio-purple" size={18} /> },
    { name: "App Development", icon: <CheckCircle className="text-portfolio-purple" size={18} /> },
    { name: "API Integration", icon: <CheckCircle className="text-portfolio-purple" size={18} /> },
    { name: "Database Design", icon: <CheckCircle className="text-portfolio-purple" size={18} /> },
    { name: "Cloud Deployment", icon: <CheckCircle className="text-portfolio-purple" size={18} /> },
  ];

  const technologies = [
    { name: "React", icon: <Code className="text-portfolio-blue" size={24} /> },
    { name: "Flutter", icon: <Smartphone className="text-portfolio-blue" size={24} /> },
    { name: "Node.js", icon: <Server className="text-portfolio-blue" size={24} /> },
    { name: "MongoDB", icon: <Database className="text-portfolio-blue" size={24} /> }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-portfolio-purple mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-portfolio-dark">
              Full-Stack Developer with a passion for creating beautiful, functional digital products
            </h3>
            
            <p className="text-gray-700">
              I'm a developer who combines technical skills with creative problem-solving. 
              With expertise in both frontend and backend technologies, I specialize in 
              building responsive web applications and cross-platform mobile apps that deliver 
              exceptional user experiences.
            </p>
            
            <p className="text-gray-700">
              My goal is to help businesses grow by creating digital solutions that are not only 
              visually appealing but also highly functional and optimized for performance.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-2">
                  {skill.icon}
                  <span className="text-gray-700">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-6 text-center">Tech Stack</h3>
            
            <div className="grid grid-cols-2 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-white p-4 rounded-md shadow-sm flex flex-col items-center justify-center card-hover">
                  <div className="mb-2 p-3 bg-blue-50 rounded-full">
                    {tech.icon}
                  </div>
                  <span className="font-medium">{tech.name}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h4 className="text-lg font-medium mb-3">Also familiar with:</h4>
              <div className="flex flex-wrap gap-2">
                {["TypeScript", "Firebase", "AWS", "GraphQL", "Docker", "Git"].map((item, index) => (
                  <span key={index} className="bg-blue-50 text-portfolio-blue px-3 py-1 rounded-full text-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
