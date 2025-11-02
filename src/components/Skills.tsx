import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  logo: string; // logo image path
  category: 'frontend' | 'backend' | 'other';
}

const skillsData: Skill[] = [
  // 🖼 Frontend
  { name: 'HTML5', logo: 'https://res.cloudinary.com/dvoned9mv/image/upload/v1762099092/3de4872f-179a-4576-bed3-625622da411f.png', category: 'frontend' },
  { name: 'CSS3', logo: 'https://res.cloudinary.com/dvoned9mv/image/upload/v1762099134/fe79e22f-3168-465d-9178-e5d9b1137784.png', category: 'frontend' },
  { name: 'JavaScript', logo: 'https://res.cloudinary.com/dvoned9mv/image/upload/v1762099207/5e3e6988-ecbb-4360-ba7b-e81e4a60a93f.png', category: 'frontend' },
  { name: 'Swift', logo: 'https://res.cloudinary.com/dvoned9mv/image/upload/v1762099694/b95417c6-83cc-48cc-bca6-111af4f71099.png', category: 'frontend' },
  { name: 'React', logo: 'https://res.cloudinary.com/dvoned9mv/image/upload/v1762099247/ce56cb13-b112-4d2b-b4f8-baa4989bff82.png', category: 'frontend' },
  { name: 'TypeScript', logo: 'https://res.cloudinary.com/dvoned9mv/image/upload/v1762099360/ff720116-7d07-438b-9869-2c5d964ff7d1.png', category: 'frontend' },

  // ⚙️ Backend
  { name: 'Node.js', logo: 'https://res.cloudinary.com/dvoned9mv/image/upload/v1762099409/c2171d98-7d34-41ba-b7f0-9052bb2e50aa.png', category: 'backend' },
  { name: 'MongoDB', logo: 'https://res.cloudinary.com/dvoned9mv/image/upload/v1762099495/0039b9cc-1dc4-480c-8f97-3e58d09ae3c6.png', category: 'backend' },
   { name: 'Java', logo: 'https://res.cloudinary.com/dvoned9mv/image/upload/v1762099819/8b0f4eea-4532-40bf-8a5a-90cf3db2bf8b.png', category: 'backend' },

  // 🧩 Others
  { name: 'Git & GitHub', logo: 'https://res.cloudinary.com/dvoned9mv/image/upload/v1762099877/3e923955-1da7-40b6-8174-7a40320199ff.png', category: 'other' },
  { name: 'UI/UX Design', logo: 'https://res.cloudinary.com/dvoned9mv/image/upload/v1762099915/abccc64a-1671-4afb-89b5-0f2baa847be2.png', category: 'other' },
];

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="flex flex-col items-center bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-md p-5 
               transition-all duration-300 hover:shadow-blue-500/30 hover:shadow-lg cursor-pointer"
  >
    <img 
      src={skill.logo} 
      alt={skill.name} 
      className="w-16 h-16 mb-3 transition-transform duration-300"
    />
    <span className="text-gray-800 dark:text-gray-200 font-medium">{skill.name}</span>
  </motion.div>
);

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  const frontendSkills = skillsData.filter(s => s.category === 'frontend');
  const backendSkills = skillsData.filter(s => s.category === 'backend');
  const otherSkills = skillsData.filter(s => s.category === 'other');

  return (
    <section id="skills" ref={sectionRef} className="py-20 md:py-32 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`transform transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            My <span className="text-blue-600 dark:text-blue-400">Tech Stack</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-12"></div>

          <p className="text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto mb-16">
            Here are the technologies and tools I use to build efficient, scalable, and beautiful applications.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Frontend */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-blue-600 dark:text-blue-400 text-center">
                Frontend
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {frontendSkills.map(skill => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </div>

            {/* Backend */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-blue-600 dark:text-blue-400 text-center">
                Backend
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {backendSkills.map(skill => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </div>

            {/* Others */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-blue-600 dark:text-blue-400 text-center">
                Other Tools
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {otherSkills.map(skill => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
