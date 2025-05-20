import React, { useEffect, useRef } from 'react';
import { useInView } from '../hooks/useInView';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 });

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 md:py-32 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div 
          className={`transform transition-all duration-1000 ${
            isInView 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>
          
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold">
                I'm a passionate developer crafting digital experiences
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                With over X years of experience in web development, I specialize in creating 
                responsive, user-friendly applications that solve real-world problems. My journey 
                in technology started when I built my first website at the age of Y, and I've 
                been hooked ever since.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I believe that great design and clean code go hand in hand. My approach combines 
                technical expertise with creative problem-solving to deliver solutions that not 
                only work flawlessly but also provide exceptional user experiences.
              </p>
              
              <div className="pt-4">
                <a 
                  href="https://console.cloudinary.com/console/c-f3d7772b800bdc640b61ae5b3befdc/media_library/asset/0aa52312f53f3a865315f41d92e9017f/manage" 
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Resume
                </a>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md transform transition-transform hover:scale-105">
                  <h4 className="font-bold text-xl mb-2">10+</h4>
                  <p className="text-gray-600 dark:text-gray-400">Completed Projects</p>
                </div>
                
                <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md transform transition-transform hover:scale-105">
                  <h4 className="font-bold text-xl mb-2">2+</h4>
                  <p className="text-gray-600 dark:text-gray-400">Years of Experience</p>
                </div>
                
                <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md transform transition-transform hover:scale-105">
                  <h4 className="font-bold text-xl mb-2">8+</h4>
                  <p className="text-gray-600 dark:text-gray-400">Certifications</p>
                </div>
                
                <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md transform transition-transform hover:scale-105">
                  <h4 className="font-bold text-xl mb-2">15+</h4>
                  <p className="text-gray-600 dark:text-gray-400">Technologies</p>
                </div>
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-l-4 border-blue-500">
                <p className="text-gray-700 dark:text-gray-300 italic">
                  "I approach each project with dedication and a commitment to excellence, 
                  whether it's a simple landing page or a complex web application."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;