
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code, Briefcase, User, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/custom-button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path: string) => {
    setIsOpen(false);
    if (isHomePage) {
      const element = document.getElementById(path.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-portfolio-dark flex items-center gap-2">
            <Code className="text-portfolio-purple" />
            <span>Garv<span className="text-portfolio-purple">.</span>Dev</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to={isHomePage ? "/#about" : "/#about"}
              onClick={() => handleNavigation('#about')} 
              className="link-underline text-portfolio-dark hover:text-portfolio-purple"
            >
              About
            </Link>
            <Link 
              to="/projects"
              className={`link-underline text-portfolio-dark hover:text-portfolio-purple ${
                location.pathname === '/projects' || location.pathname.includes('/project/') ? 'text-portfolio-purple' : ''
              }`}
            >
              Projects
            </Link>
            <Link 
              to={isHomePage ? "/#services" : "/#services"} 
              onClick={() => handleNavigation('#services')}
              className="link-underline text-portfolio-dark hover:text-portfolio-purple"
            >
              Services
            </Link>
            <Link 
              to={isHomePage ? "/#testimonials" : "/#testimonials"} 
              onClick={() => handleNavigation('#testimonials')}
              className="link-underline text-portfolio-dark hover:text-portfolio-purple"
            >
              Testimonials
            </Link>
            <Link 
              to={isHomePage ? "/#contact" : "/#contact"}
              onClick={() => handleNavigation('#contact')}
            >
              <Button className="bg-portfolio-purple hover:bg-portfolio-purple/90">
                Contact Me
              </Button>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg p-4 transition-all duration-300 ease-in-out">
            <div className="flex flex-col space-y-3">
              <Link 
                to={isHomePage ? "/#about" : "/#about"}
                className="py-2 px-4 hover:bg-gray-100 rounded-md flex items-center gap-2"
                onClick={() => handleNavigation('#about')}
              >
                <User size={18} />
                About
              </Link>
              <Link 
                to="/projects"
                className={`py-2 px-4 hover:bg-gray-100 rounded-md flex items-center gap-2 ${
                  location.pathname === '/projects' || location.pathname.includes('/project/') ? 'bg-gray-100' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                <Code size={18} />
                Projects
              </Link>
              <Link 
                to={isHomePage ? "/#services" : "/#services"}
                className="py-2 px-4 hover:bg-gray-100 rounded-md flex items-center gap-2"
                onClick={() => handleNavigation('#services')}
              >
                <Briefcase size={18} />
                Services
              </Link>
              <Link 
                to={isHomePage ? "/#testimonials" : "/#testimonials"}
                className="py-2 px-4 hover:bg-gray-100 rounded-md flex items-center gap-2"
                onClick={() => handleNavigation('#testimonials')}
              >
                <MessageSquare size={18} />
                Testimonials
              </Link>
              <Link 
                to={isHomePage ? "/#contact" : "/#contact"}
                onClick={() => handleNavigation('#contact')}
              >
                <Button className="w-full bg-portfolio-purple hover:bg-portfolio-purple/90">
                  Contact Me
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
