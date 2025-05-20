import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Github, Linkedin, Twitter } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4 ${
          scrolled 
            ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a 
            href="#home" 
            className="text-2xl font-bold relative overflow-hidden group cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
          >
           <span className="inline-block transition-transform duration-700 ease-in-out transform group-hover:translate-x-full">Shivansh Maurya </span>
            <span className="absolute left-0 -bottom-full transform transition-transform duration-300 group-hover:translate-y-full text-blue-500 dark:text-blue-400">Portfolio</span>
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav>
              <ul className="flex space-x-6">
                {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item}`}
                      className="relative py-2 uppercase text-sm font-medium cursor-pointer hover:text-blue-500 dark:hover:text-blue-400 transition-colors before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-blue-500 dark:before:bg-blue-400 before:transition-all before:duration-300 hover:before:w-full"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item);
                      }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <ThemeToggle />
          </div>
          
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button 
              onClick={toggleMenu}
              className="text-gray-700 dark:text-gray-300 focus:outline-none"
              aria-label="Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu */}
      <div className={`
        fixed inset-0 z-50 bg-white dark:bg-gray-900 transform transition-transform duration-300 ease-in-out
        ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        md:hidden
      `}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <a 
              href="#home" 
              className="text-2xl font-bold"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('home');
              }}
            >
              Shivansh Maurya
            </a>
            <button 
              onClick={toggleMenu}
              className="text-gray-700 dark:text-gray-300 focus:outline-none"
              aria-label="Close Menu"
            >
              <X size={24} />
            </button>
          </div>
          
          <nav>
            <ul className="space-y-6">
              {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item}`}
                    className="block text-lg uppercase font-medium py-2 border-b border-gray-200 dark:border-gray-700"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item);
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex space-x-6 justify-center">
              <a href="https://github.com/Quantumdevlpr" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
                <Github size={22} />
              </a>
              <a href="https://www.linkedin.com/in/shivansh-maurya-a79128220/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
                <Linkedin size={22} />
              </a>
              <a href="https://x.com/ShivanshMa58143" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
                <Twitter size={22} />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <main>
        {children}
      </main>
      
      <footer className="bg-gray-100 dark:bg-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center md:flex-row md:justify-between">
            <p className="text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="https://github.com/Quantumdevlpr" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
                <Github size={22} />
              </a>
              <a href="https://www.linkedin.com/in/shivansh-maurya-a79128220/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
                <Linkedin size={22} />
              </a>
              <a href="https://x.com/ShivanshMa58143" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
                <Twitter size={22} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;