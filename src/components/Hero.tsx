import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleScrollDown = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden 
                 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div 
        className={`max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 md:py-32 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* Left Text Section */}
          <div className="order-2 md:order-1 text-center md:text-left">
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-blue-600 dark:text-blue-400">
                  Hello, I'm
                </h2>
                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight 
                               text-gray-900 dark:text-white leading-tight">
                  <span className="block">Shivansh Maurya</span>
                  <span className="block mt-1 text-blue-600 dark:text-blue-400">
                    <span className="inline-block mr-3 relative overflow-hidden">
                      <span className="animate-typewriter inline-block relative after:content-['|'] after:ml-1 after:animate-cursor">
                        Web and Mobile Developer
                      </span>
                    </span>
                  </span>
                </h1>
              </div>
              
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 
                             max-w-md mx-auto md:mx-0 leading-relaxed">
                I create elegant solutions through code, specializing in building 
                exceptional digital experiences that live on the web.
              </p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <a 
                  href="#projects" 
                  className="px-5 sm:px-6 py-2.5 sm:py-3 bg-blue-600 text-white rounded-md font-medium 
                             transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-blue-700
                             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  View My Work
                </a>
                <a 
                  href="#contact" 
                  className="px-5 sm:px-6 py-2.5 sm:py-3 border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 
                             rounded-md font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg 
                             hover:bg-blue-50 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
          
          {/* Right Image Section */}
          <div className="order-1 md:order-2 flex justify-center relative">
            <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 
                            rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center relative overflow-hidden shadow-xl">
              <img 
                src="https://res.cloudinary.com/dvcwzd8ri/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1747650885/WhatsApp_Image_2025-05-17_at_11.33.57_bd8e5379_qwv60b.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20 mix-blend-overlay"></div>
            </div>
            
            {/* Floating Shapes */}
            <div className="absolute h-full w-full">
              <div className="absolute top-1/4 -left-4 w-8 sm:w-10 h-8 sm:h-10 bg-yellow-400 dark:bg-yellow-600 rounded-full animate-float opacity-70"></div>
              <div className="absolute bottom-1/3 -right-4 w-5 sm:w-6 h-5 sm:h-6 bg-blue-400 dark:bg-blue-600 rounded-full animate-float-delay opacity-70"></div>
              <div className="absolute bottom-1/4 left-1/4 w-3 sm:w-4 h-3 sm:h-4 bg-purple-400 dark:bg-purple-600 rounded-full animate-float-long opacity-70"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Button */}
      <button 
        className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 text-gray-600 dark:text-gray-400 animate-bounce"
        onClick={handleScrollDown}
        aria-label="Scroll down">
        <ArrowDown size={24} className="sm:size-28" />
      </button>
    </section>
  );
};

export default Hero;
