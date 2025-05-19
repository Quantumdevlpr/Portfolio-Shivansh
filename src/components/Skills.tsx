import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'other';
}

const skillsData: Skill[] = [
  { name: 'HTML/CSS', level: 90, category: 'frontend' },
  { name: 'JavaScript', level: 85, category: 'frontend' },
  { name: 'React', level: 90, category: 'frontend' },
  { name: 'TypeScript', level: 80, category: 'frontend' },
  { name: 'Tailwind CSS', level: 85, category: 'frontend' },
  { name: 'Node.js', level: 75, category: 'backend' },
  { name: 'Express', level: 80, category: 'backend' },
  { name: 'MongoDB', level: 70, category: 'backend' },
  { name: 'PostgreSQL', level: 65, category: 'backend' },
  { name: 'Git/GitHub', level: 85, category: 'other' },
  { name: 'UI/UX Design', level: 70, category: 'other' },
  { name: 'Responsive Design', level: 90, category: 'other' },
];

const SkillBar: React.FC<{ skill: Skill; delay: number; isVisible: boolean }> = ({ 
  skill, 
  delay,
  isVisible
}) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <h4 className="font-medium">{skill.name}</h4>
        <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
      </div>
      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div 
          className="h-full bg-blue-600 dark:bg-blue-500 rounded-full transition-all duration-1000 ease-out"
          style={{ 
            width: isVisible ? `${skill.level}%` : '0%',
            transitionDelay: `${delay * 100}ms`
          }}
        ></div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  const frontendSkills = skillsData.filter(skill => skill.category === 'frontend');
  const backendSkills = skillsData.filter(skill => skill.category === 'backend');
  const otherSkills = skillsData.filter(skill => skill.category === 'other');

  return (
    <section 
      id="skills" 
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
            My <span className="text-blue-600 dark:text-blue-400">Skills</span>
          </h2>
          
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-12"></div>
          
          <p className="text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto mb-16">
            I've developed a diverse skill set throughout my career. Here's a breakdown of my technical expertise:
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-6 text-blue-600 dark:text-blue-400">Frontend Development</h3>
              
              {frontendSkills.map((skill, index) => (
                <SkillBar 
                  key={skill.name} 
                  skill={skill} 
                  delay={index} 
                  isVisible={isInView}
                />
              ))}
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-6 text-blue-600 dark:text-blue-400">Backend Development</h3>
              
              {backendSkills.map((skill, index) => (
                <SkillBar 
                  key={skill.name} 
                  skill={skill} 
                  delay={index + frontendSkills.length} 
                  isVisible={isInView}
                />
              ))}
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-6 text-blue-600 dark:text-blue-400">Other Skills</h3>
              
              {otherSkills.map((skill, index) => (
                <SkillBar 
                  key={skill.name} 
                  skill={skill} 
                  delay={index + frontendSkills.length + backendSkills.length} 
                  isVisible={isInView}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;