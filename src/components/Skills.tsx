import { motion } from 'framer-motion';
import { useState } from 'react';

const SkillsSection = () => {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

  const skillCategories = [
    {
      title: "Development",
      icon: "⚡",
      color: "#0EA5E9",
      skills: ['React', 'MongoDB', 'Express', 'TypeScript', 'Firebase', 'Prisma', 'Cloudflare', 'Tailwind'],
      description: "Full-stack development with modern frameworks"
    },
    {
      title: "Languages",
      icon: "💻",
      color: "#059669",
      skills: ['C++', 'C', 'JavaScript', 'HTML/CSS'],
      description: "Programming languages and markup technologies"
    },
    {
      title: "Tools & Platforms",
      icon: "🛠️",
      color: "#F59E0B",
      skills: ['Git', 'GitHub', 'VSCode', 'Docker', 'Postman', 'Figma', 'PostgreSQL'],
      description: "Development tools and version control"
    }
  ];

  return (
    <section id="skills" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white transition-colors duration-300"
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            Technical Expertise
          </motion.h2>
          
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-sky-500 to-emerald-500 mx-auto rounded-full mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          
          <motion.p
            className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-lg transition-colors duration-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            A comprehensive overview of my technical skills and expertise across various domains
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div className="space-y-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Category Card */}
              <motion.div
                className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700 transition-all duration-300"
                style={{
                  borderColor: hoveredCategory === categoryIndex ? category.color : undefined,
                  boxShadow: hoveredCategory === categoryIndex 
                    ? `0 20px 40px ${category.color}20` 
                    : undefined,
                }}
                whileHover={{
                  y: -4,
                  transition: { duration: 0.2 }
                }}
                onHoverStart={() => setHoveredCategory(categoryIndex)}
                onHoverEnd={() => setHoveredCategory(null)}
              >
                {/* Header */}
                <motion.div
                  className="flex items-center gap-4 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + categoryIndex * 0.1 }}
                >
                  <motion.div
                    className="text-4xl p-3 rounded-xl border-2 bg-white dark:bg-slate-700 transition-all duration-300"
                    style={{ 
                      borderColor: category.color,
                      backgroundColor: hoveredCategory === categoryIndex ? `${category.color}10` : undefined,
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                    }}
                  >
                    {category.icon}
                  </motion.div>
                  
                  <div>
                    <motion.h3 
                      className="text-2xl md:text-3xl font-bold mb-2 transition-colors duration-300"
                      style={{ 
                        color: hoveredCategory === categoryIndex ? category.color : undefined 
                      }}
                    >
                      {category.title}
                    </motion.h3>
                    <p className="text-slate-600 dark:text-slate-400 transition-colors duration-300">
                      {category.description}
                    </p>
                  </div>
                </motion.div>
                
                {/* Skills Grid */}
                <motion.div 
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { staggerChildren: 0.1 }
                    }
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill}
                      className="group relative p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 cursor-pointer transition-all duration-300"
                      style={{
                        borderColor: hoveredCategory === categoryIndex ? `${category.color}40` : undefined,
                        backgroundColor: hoveredCategory === categoryIndex ? `${category.color}10` : undefined,
                      }}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 }
                      }}
                      whileHover={{ 
                        y: -4,
                        scale: 1.02,
                        borderColor: category.color,
                        backgroundColor: `${category.color}20`,
                        boxShadow: `0 8px 20px ${category.color}20`,
                      }}
                    >
                      {/* Skill Icon */}
                      <motion.div 
                        className="flex items-center justify-center mb-3"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <img
                          src={`https://skillicons.dev/icons?i=${
                            skill.toLowerCase() === 'c++' ? 'cpp' : 
                            skill.toLowerCase() === 'html/css' ? 'html' : 
                            skill.toLowerCase() === 'cloudflare' ? 'cloudflare' :
                            skill.toLowerCase() === 'tailwind' ? 'tailwind' :
                            skill.toLowerCase()
                          }`}
                          alt={skill}
                          className="w-8 h-8 md:w-10 md:h-10"
                        />
                      </motion.div>
                      
                      {/* Skill Name */}
                      <span 
                        className="text-sm md:text-base font-medium text-center block transition-colors duration-300"
                        style={{ 
                          color: hoveredCategory === categoryIndex ? category.color : undefined 
                        }}
                      >
                        {skill === 'Tailwind' ? 'Tailwind CSS' : 
                         skill === 'Cloudflare' ? 'Cloudflare Workers' : 
                         skill}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;