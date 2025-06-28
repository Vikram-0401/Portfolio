import { motion, useMotionValue, useTransform } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Icon from './ui/Icon';
import { FaReact, FaPython, FaDocker, FaGitAlt, FaJs, FaFireAlt } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiNextdotjs, SiPostman, SiLeetcode } from 'react-icons/si';
import { BsFillLightningFill } from 'react-icons/bs';

// Enhanced skills data with 3D positioning
const skills = [
  { name: "React", color: "#61DAFB", position: [65, 30, 0], icon: FaReact, glowColor: "#61DAFB30" },
  { name: "TypeScript", color: "#3178C6", position: [30, 20, 10], icon: SiTypescript, glowColor: "#3178C630" },
  { name: "JavaScript", color: "#F7DF1E", position: [45, 15, -5], icon: FaJs, glowColor: "#F7DF1E30" },
  { name: "Firebase", color: "#FFCA28", position: [80, 50, 15], icon: FaFireAlt, glowColor: "#FFCA2830" },
  { name: "Python", color: "#3776AB", position: [25, 45, -10], icon: FaPython, glowColor: "#3776AB30" },
  { name: "MongoDB", color: "#47A248", position: [45, 70, 5], icon: SiMongodb, glowColor: "#47A24830" },
  { name: "Next.js", color: "#000000", position: [65, 85, -15], icon: SiNextdotjs, glowColor: "#FFFFFF30" },
  { name: "Docker", color: "#2496ED", position: [20, 80, 20], icon: FaDocker, glowColor: "#2496ED30" },
  { name: "Git", color: "#F05032", position: [85, 75, -5], icon: FaGitAlt, glowColor: "#F0503230" },
  { name: "Postman", color: "#FF6C37", position: [15, 60, 10], icon: SiPostman, glowColor: "#FF6C3730" },
  { name: "AI/ML", color: "#8e44ad", position: [50, 50, 0], icon: BsFillLightningFill, glowColor: "#8e44ad30" },
];

const Hero = () => {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 3D rotation based on mouse position
  const rotateX = useTransform(mouseY, [-300, 300], [15, -15]);
  const rotateY = useTransform(mouseX, [-300, 300], [-15, 15]);

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

  const handleNavigate = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <div className="w-full h-full flex items-center justify-center py-16 md:py-24 relative overflow-hidden">
      {/* Enhanced 3D Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating 3D Geometric Shapes */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              rotateX: [0, 360],
              rotateY: [0, 180],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          >
            <div 
              className="w-8 h-8 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-400/30"
              style={{
                transform: `perspective(1000px) rotateX(${Math.random() * 45}deg) rotateY(${Math.random() * 45}deg)`,
                borderRadius: Math.random() > 0.5 ? '50%' : '4px',
                boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)',
              }}
            />
          </motion.div>
        ))}

        {/* Enhanced Animated Circles with 3D Effect */}
        <motion.div
          className="absolute top-1/4 left-10 md:left-16 w-40 md:w-64 h-40 md:h-64 rounded-full"
          style={{
            background: 'radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.15), rgba(59, 130, 246, 0.05))',
            filter: 'blur(40px)',
            transform: `perspective(1000px) rotateX(${rotateX.get() * 0.5}deg) rotateY(${rotateY.get() * 0.5}deg)`,
          }}
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
            rotateZ: [0, 180, 360],
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-10 md:right-16 w-48 md:w-80 h-48 md:h-80 rounded-full"
          style={{
            background: 'radial-gradient(circle at 70% 70%, rgba(168, 85, 247, 0.15), rgba(168, 85, 247, 0.05))',
            filter: 'blur(50px)',
            transform: `perspective(1000px) rotateX(${rotateX.get() * -0.3}deg) rotateY(${rotateY.get() * -0.3}deg)`,
          }}
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            rotateZ: [360, 180, 0],
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Particle System */}
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: '0 0 6px rgba(59, 130, 246, 0.8)',
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Enhanced Text Content with 3D Effects */}
          <motion.div
            initial={{ opacity: 0, y: 50, z: -100 }}
            animate={{ opacity: 1, y: 0, z: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center lg:text-left space-y-6 md:space-y-8 lg:w-1/2"
            style={{
              transform: `perspective(1000px) rotateX(${rotateX.get() * 0.1}deg) rotateY(${rotateY.get() * 0.1}deg)`,
            }}
          >
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white space-y-2 md:space-y-3"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <motion.span 
                className="block"
                whileHover={{ 
                  scale: 1.05,
                  textShadow: "0 0 20px rgba(255,255,255,0.5)",
                }}
              >
                Hi, I'm
              </motion.span>
              <motion.span 
                className="block bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent"
                style={{
                  filter: 'drop-shadow(0 0 10px rgba(52, 211, 153, 0.5))',
                }}
                whileHover={{ 
                  scale: 1.05,
                  filter: 'drop-shadow(0 0 20px rgba(52, 211, 153, 0.8))',
                }}
              >
                Vikram
              </motion.span>
              <TypeAnimation
                sequence={[
                  'Developer',
                  1000,
                  'AI/ML Enthusiast',
                  1000,
                  'Problem Solver',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="block text-2xl sm:text-3xl md:text-4xl text-blue-400"
                style={{
                  filter: 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.5))',
                }}
              />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-base md:text-xl text-gray-400 max-w-2xl lg:mx-0 mx-auto"
              whileHover={{ 
                color: '#e5e7eb',
                transition: { duration: 0.3 }
              }}
            >
              Passionate about creating innovative solutions and exploring the frontiers of AI & Machine Learning.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                onClick={() => handleNavigate('/contact')}
                className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full font-medium relative overflow-hidden group"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(59, 130, 246, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Get in Touch</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-400"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
              
              <motion.button
                onClick={() => handleNavigate('/projects')}
                className="px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-blue-500/50 text-blue-400 rounded-full font-medium relative overflow-hidden group backdrop-blur-sm"
                whileHover={{ 
                  scale: 1.05,
                  borderColor: 'rgba(59, 130, 246, 0.8)',
                  boxShadow: "0 10px 30px rgba(59, 130, 246, 0.2)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">View Projects</span>
                <motion.div
                  className="absolute inset-0 bg-blue-500/10"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex gap-6 justify-center lg:justify-start"
            >
              {[
                { icon: 'Github', href: 'https://github.com/Vikram-0401' },
                { icon: 'Linkedin', href: 'https://www.linkedin.com/in/vikram-shetty-6827b3259/' },
                { icon: 'Twitter', href: 'https://x.com/VikramS87249739?mx=2' },
                { 
                  icon: 'custom', 
                  customIcon: <SiLeetcode className="w-5 h-5 sm:w-6 sm:h-6" />, 
                  href: 'https://leetcode.com/u/Vikram0401/' 
                },
              ].map(({ icon, href, customIcon }, index) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10 backdrop-blur-sm"
                  whileHover={{ 
                    scale: 1.3, 
                    y: -8,
                    boxShadow: "0 10px 20px rgba(255,255,255,0.1)",
                    rotateY: 15,
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                >
                  {icon === 'custom' ? customIcon : <Icon name={icon as any} className="w-5 h-5 sm:w-6 sm:h-6" />}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Enhanced 3D Skills Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 100, rotateY: -30 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden lg:block lg:w-1/2"
            style={{
              transform: `perspective(1000px) rotateX(${rotateX.get() * 0.2}deg) rotateY(${rotateY.get() * 0.2}deg)`,
            }}
          >
            <div className="relative w-full h-[500px]">
              {/* Enhanced 3D Container */}
              <motion.div
                className="absolute inset-0 rounded-2xl overflow-hidden"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.4), rgba(15, 23, 42, 0.2))',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(148, 163, 184, 0.1)',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                }}
                animate={{
                  boxShadow: [
                    '0 25px 50px -12px rgba(59, 130, 246, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                    '0 25px 50px -12px rgba(168, 85, 247, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                    '0 25px 50px -12px rgba(59, 130, 246, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                {/* Neural Network Background */}
                <svg className="absolute inset-0 w-full h-full opacity-30" style={{ pointerEvents: 'none' }}>
                  <defs>
                    <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.6" />
                      <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.6" />
                    </linearGradient>
                  </defs>
                  
                  {/* Animated Neural Connections */}
                  {skills.map((skill, i) => {
                    const centerSkill = skills.find(s => s.name === "AI/ML");
                    if (!centerSkill || skill.name === "AI/ML") return null;
                    
                    return (
                      <motion.line
                        key={`neural-${i}`}
                        x1={`${skill.position[0]}%`}
                        y1={`${skill.position[1]}%`}
                        x2={`${centerSkill.position[0]}%`}
                        y2={`${centerSkill.position[1]}%`}
                        stroke="url(#neuralGradient)"
                        strokeWidth="2"
                        strokeDasharray="5 5"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ 
                          pathLength: [0, 1, 0],
                          opacity: [0, 0.8, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 0.2,
                          ease: "easeInOut"
                        }}
                      />
                    );
                  })}
                </svg>

                {/* Enhanced Skill Nodes */}
                <div className="absolute inset-0">
                  {skills.map((skill, index) => {
                    const IconComponent = skill.icon;
                    const isCenter = skill.name === "AI/ML";
                    const baseSize = isCenter ? 80 : 60;
                    
                    return (
                      <motion.div
                        key={`skill-${index}`}
                        className="absolute group cursor-pointer"
                        style={{
                          top: `${skill.position[1]}%`,
                          left: `${skill.position[0]}%`,
                          transform: 'translate(-50%, -50%)',
                          zIndex: isCenter ? 20 : 10,
                        }}
                        initial={{ 
                          opacity: 0, 
                          scale: 0,
                          rotateX: -90,
                          z: skill.position[2] || 0,
                        }}
                        animate={{ 
                          opacity: 1, 
                          scale: 1,
                          rotateX: 0,
                          y: [0, -10, 0],
                        }}
                        transition={{ 
                          duration: 0.8, 
                          delay: isCenter ? 0.3 : 0.5 + index * 0.1,
                          y: {
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }
                        }}
                        whileHover={{ 
                          scale: 1.2,
                          z: 50,
                          rotateY: 15,
                          transition: { duration: 0.3 }
                        }}
                      >
                        {/* 3D Node Container */}
                        <div 
                          className="relative rounded-full flex items-center justify-center"
                          style={{
                            width: `${baseSize}px`,
                            height: `${baseSize}px`,
                            background: `linear-gradient(135deg, ${skill.color}90, ${skill.color}60)`,
                            boxShadow: `
                              0 0 30px ${skill.color}80,
                              inset 0 2px 4px rgba(255,255,255,0.3),
                              inset 0 -2px 4px rgba(0,0,0,0.3),
                              0 8px 16px rgba(0,0,0,0.3)
                            `,
                            border: `2px solid ${skill.color}`,
                            transform: 'perspective(1000px) rotateX(10deg)',
                          }}
                        >
                          {/* Icon with enhanced styling */}
                          <IconComponent 
                            size={isCenter ? baseSize * 0.5 : baseSize * 0.4} 
                            color="white"
                            style={{
                              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))',
                              transform: 'translateZ(10px)',
                            }}
                          />
                          
                          {/* Pulsing Ring Effect */}
                          <motion.div
                            className="absolute inset-0 rounded-full border-2"
                            style={{ borderColor: skill.color }}
                            animate={{
                              scale: [1, 1.5, 1],
                              opacity: [0.8, 0, 0.8],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: index * 0.2,
                            }}
                          />
                        </div>
                        
                        {/* Enhanced Tooltip */}
                        <motion.div
                          className="absolute text-sm font-bold rounded-lg px-4 py-2 z-30 pointer-events-none"
                          style={{ 
                            top: '120%',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            background: `linear-gradient(135deg, ${skill.color}20, rgba(0,0,0,0.9))`,
                            color: 'white',
                            border: `2px solid ${skill.color}`,
                            boxShadow: `0 10px 25px ${skill.color}40`,
                            backdropFilter: 'blur(10px)',
                            whiteSpace: 'nowrap',
                          }}
                          initial={{ opacity: 0, y: 10, scale: 0.8 }}
                          whileInView={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                        >
                          {skill.name}
                          <div 
                            className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rotate-45"
                            style={{ backgroundColor: skill.color }}
                          />
                        </motion.div>
                        
                        {/* Orbiting Particles for non-center nodes */}
                        {!isCenter && Array.from({ length: 3 }).map((_, i) => (
                          <motion.div
                            key={`orbit-${index}-${i}`}
                            className="absolute w-2 h-2 rounded-full"
                            style={{
                              backgroundColor: skill.color,
                              boxShadow: `0 0 10px ${skill.color}`,
                              top: '50%',
                              left: '50%',
                              marginTop: '-4px',
                              marginLeft: '-4px',
                            }}
                            animate={{
                              rotate: [0, 360],
                              scale: [0.5, 1, 0.5],
                              opacity: [0.5, 1, 0.5],
                            }}
                            style={{
                              transformOrigin: `${(baseSize/2 + 20) * Math.cos(i * (2 * Math.PI / 3))}px ${(baseSize/2 + 20) * Math.sin(i * (2 * Math.PI / 3))}px`,
                            }}
                            transition={{
                              duration: 4 + i,
                              repeat: Infinity,
                              ease: "linear"
                            }}
                          />
                        ))}
                      </motion.div>
                    );
                  })}
                </div>

                {/* Central AI/ML Highlight Effect */}
                {skills.filter(s => s.name === "AI/ML").map((centerSkill, i) => (
                  <motion.div
                    key={`center-highlight-${i}`}
                    className="absolute rounded-full pointer-events-none"
                    style={{
                      top: `${centerSkill.position[1]}%`,
                      left: `${centerSkill.position[0]}%`,
                      width: '40px',
                      height: '40px',
                      transform: 'translate(-50%, -50%)',
                      border: `3px solid ${centerSkill.color}`,
                      backgroundColor: 'transparent',
                    }}
                    animate={{
                      scale: [1, 3, 1],
                      opacity: [0.8, 0, 0.8],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;