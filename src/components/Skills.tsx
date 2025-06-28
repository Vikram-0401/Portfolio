import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

const SkillsSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 3D rotation based on mouse position
  const rotateX = useTransform(mouseY, [-300, 300], [5, -5]);
  const rotateY = useTransform(mouseX, [-300, 300], [-5, 5]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX - innerWidth / 2) / (innerWidth / 2);
      const y = (clientY - innerHeight / 2) / (innerHeight / 2);
      
      setMousePosition({ x: clientX, y: clientY });
      mouseX.set(x * 300);
      mouseY.set(y * 300);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const skillCategories = [
    {
      title: "Development",
      icon: "⚡",
      color: "#3B82F6",
      skills: ['MongoDB', 'React', 'Express', 'TypeScript', 'Firebase'],
      description: "Full-stack development with modern frameworks"
    },
    {
      title: "Languages",
      icon: "💻",
      color: "#8B5CF6",
      skills: ['C++', 'C', 'JavaScript', 'HTML/CSS'],
      description: "Programming languages and markup technologies"
    },
    {
      title: "Tools & Platforms",
      icon: "🛠️",
      color: "#10B981",
      skills: ['Git', 'GitHub', 'VSCode', 'Docker', 'Postman'],
      description: "Development tools and version control"
    }
  ];

  return (
    <section id="skills" className="min-h-screen py-12 md:py-24 flex items-center relative mt-[-80px] pt-[80px] overflow-hidden">
      {/* Enhanced 3D Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Code Symbols */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={`code-symbol-${i}`}
            className="absolute text-2xl font-mono opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              color: ['#3B82F6', '#8B5CF6', '#10B981'][Math.floor(Math.random() * 3)],
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          >
            {['<>', '{}', '[]', '()', '/>', '&&', '||', '=>'][Math.floor(Math.random() * 8)]}
          </motion.div>
        ))}

        {/* Geometric Shapes */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={`geo-shape-${i}`}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${20 + Math.random() * 30}px`,
              height: `${20 + Math.random() * 30}px`,
              background: `linear-gradient(135deg, ${['#3B82F6', '#8B5CF6', '#10B981'][Math.floor(Math.random() * 3)]}20, transparent)`,
              borderRadius: Math.random() > 0.5 ? '50%' : '8px',
              filter: 'blur(10px)',
            }}
            animate={{
              y: [0, -50, 0],
              rotate: [0, 360],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.7,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent"
            style={{
              filter: 'drop-shadow(0 0 30px rgba(59, 130, 246, 0.3))',
            }}
            whileHover={{
              scale: 1.05,
              filter: 'drop-shadow(0 0 40px rgba(59, 130, 246, 0.5))',
            }}
          >
            Technical Expertise
          </motion.h2>
          
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 mx-auto rounded-full mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          
          <motion.p
            className="text-gray-400 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            A comprehensive overview of my technical skills and expertise across various domains
          </motion.p>
        </motion.div>

        {/* Enhanced Skills Grid */}
        <div className="space-y-8 md:space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -100 : 100, rotateY: categoryIndex % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1, delay: categoryIndex * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative"
              style={{
                transform: `perspective(1000px) rotateX(${rotateX.get() * 0.1}deg) rotateY(${rotateY.get() * 0.1}deg)`,
              }}
            >
              {/* Enhanced 3D Card Container */}
              <motion.div
                className="relative rounded-2xl p-6 md:p-8 backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, rgba(15, 23, 42, 0.9), rgba(30, 41, 59, 0.8))`,
                  transform: 'perspective(1000px) rotateX(3deg)',
                }}
                whileHover={{
                  transform: 'perspective(1000px) rotateX(0deg) scale(1.02)',
                  boxShadow: `0 25px 50px ${category.color}40`,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Animated Background Glow */}
                <motion.div
                  className="absolute inset-0 opacity-20"
                  style={{
                    background: `radial-gradient(circle at 20% 20%, ${category.color}40, transparent)`,
                  }}
                  animate={{
                    background: [
                      `radial-gradient(circle at 20% 20%, ${category.color}40, transparent)`,
                      `radial-gradient(circle at 80% 80%, ${category.color}40, transparent)`,
                      `radial-gradient(circle at 20% 20%, ${category.color}40, transparent)`,
                    ]
                  }}
                  transition={{ duration: 6, repeat: Infinity }}
                />

                {/* Floating Particles */}
                <div className="absolute inset-0 opacity-30">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <motion.div
                      key={`skill-particle-${categoryIndex}-${i}`}
                      className="absolute w-1 h-1 rounded-full"
                      style={{
                        backgroundColor: category.color,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: Math.random() * 3,
                      }}
                    />
                  ))}
                </div>

                {/* Enhanced Header */}
                <motion.div
                  className="flex items-center gap-4 mb-6 relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + categoryIndex * 0.1 }}
                >
                  <motion.div
                    className="text-4xl p-3 rounded-2xl backdrop-blur-sm border border-white/20"
                    style={{ backgroundColor: `${category.color}20` }}
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 360,
                      boxShadow: `0 10px 25px ${category.color}40`,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {category.icon}
                  </motion.div>
                  
                  <div>
                    <motion.h3 
                      className="text-2xl md:text-3xl font-bold mb-2"
                      style={{ color: category.color }}
                      whileHover={{ 
                        scale: 1.05,
                        textShadow: `0 0 20px ${category.color}80`,
                      }}
                    >
                      {category.title}
                    </motion.h3>
                    <motion.p 
                      className="text-gray-400"
                      whileHover={{ color: '#e5e7eb' }}
                    >
                      {category.description}
                    </motion.p>
                  </div>
                </motion.div>
                
                {/* Enhanced Skills Grid */}
                <motion.div 
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 relative z-10"
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
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      className="group relative p-4 rounded-xl border border-white/10 backdrop-blur-sm cursor-pointer"
                      style={{
                        background: `linear-gradient(135deg, ${category.color}15, rgba(15, 23, 42, 0.8))`,
                        transform: 'perspective(1000px) rotateX(5deg)',
                      }}
                      variants={{
                        hidden: { opacity: 0, y: 20, rotateX: -15 },
                        visible: { opacity: 1, y: 0, rotateX: 5 }
                      }}
                      whileHover={{ 
                        y: -8,
                        rotateX: 0,
                        scale: 1.05,
                        borderColor: `${category.color}60`,
                        backgroundColor: `${category.color}25`,
                        boxShadow: `0 15px 30px ${category.color}40`,
                        transition: { duration: 0.3 }
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* Skill Icon */}
                      <motion.div 
                        className="flex items-center justify-center mb-3"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                      >
                        <img
                          src={`https://skillicons.dev/icons?i=${skill.toLowerCase() === 'c++' ? 'cpp' : skill.toLowerCase() === 'html/css' ? 'html' : skill.toLowerCase()}`}
                          alt={skill}
                          className="w-8 h-8 md:w-10 md:h-10"
                          style={{
                            filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
                          }}
                        />
                      </motion.div>
                      
                      {/* Skill Name */}
                      <motion.span 
                        className="text-sm md:text-base font-medium text-center block"
                        style={{ color: category.color }}
                        whileHover={{ 
                          scale: 1.1,
                          textShadow: `0 0 10px ${category.color}80`,
                        }}
                      >
                        {skill}
                      </motion.span>

                      {/* Hover Glow Effect */}
                      <motion.div
                        className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100"
                        style={{
                          background: `radial-gradient(circle at center, ${category.color}30, transparent)`,
                        }}
                        transition={{ duration: 0.3 }}
                      />

                      {/* Floating Skill Particles */}
                      {Array.from({ length: 3 }).map((_, i) => (
                        <motion.div
                          key={`skill-item-particle-${skillIndex}-${i}`}
                          className="absolute w-1 h-1 rounded-full opacity-0 group-hover:opacity-100"
                          style={{
                            backgroundColor: category.color,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                          }}
                          animate={{
                            y: [0, -10, 0],
                            opacity: [0, 1, 0],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                        />
                      ))}
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