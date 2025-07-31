import { motion, useMotionValue, useTransform } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Icon from './ui/Icon';
import { FaReact, FaPython, FaDocker, FaGitAlt, FaJs, FaFireAlt } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiNextdotjs, SiLeetcode } from 'react-icons/si';
import { BsFillLightningFill } from 'react-icons/bs';

// Professional skills data with clean positioning
const skills = [
  { name: "React", color: "#0EA5E9", position: [70, 25], icon: FaReact },
  { name: "TypeScript", color: "#0EA5E9", position: [25, 20], icon: SiTypescript },
  { name: "JavaScript", color: "#F59E0B", position: [50, 15], icon: FaJs },
  { name: "Firebase", color: "#F59E0B", position: [80, 45], icon: FaFireAlt },
  { name: "Python", color: "#0EA5E9", position: [20, 40], icon: FaPython },
  { name: "MongoDB", color: "#059669", position: [45, 65], icon: SiMongodb },
  { name: "Next.js", color: "#374151", position: [75, 75], icon: SiNextdotjs },
  { name: "Docker", color: "#0EA5E9", position: [15, 70], icon: FaDocker },
  { name: "Git", color: "#F59E0B", position: [85, 65], icon: FaGitAlt },
  { name: "AI/ML", color: "#059669", position: [50, 45], icon: BsFillLightningFill },
];

const Hero = () => {
  const navigate = useNavigate();
  const [, setMousePosition] = useState({ x: 0, y: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Subtle parallax effects
  const yOffset = useTransform(mouseY, [-300, 300], [5, -5]);
  const xOffset = useTransform(mouseX, [-300, 300], [-5, 5]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX - innerWidth / 2) / (innerWidth / 2);
      const y = (clientY - innerHeight / 2) / (innerHeight / 2);
      
      setMousePosition({ x: clientX, y: clientY });
      mouseX.set(x * 100);
      mouseY.set(y * 100);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const handleNavigate = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <div className="w-full min-h-[calc(100vh-80px)] flex items-center justify-center px-2 sm:px-4 md:px-8 py-8 md:py-0 relative overflow-hidden transition-colors duration-300">
      {/* Clean Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle geometric shapes */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            className="absolute opacity-5 dark:opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div 
              className="w-16 h-16 border border-slate-200 dark:border-slate-700"
              style={{
                borderRadius: i % 2 === 0 ? '50%' : '8px',
              }}
            />
          </motion.div>
        ))}

        {/* Clean gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/6 w-64 h-64 rounded-full opacity-10 dark:opacity-5"
          style={{
            background: 'radial-gradient(circle, #0EA5E9, transparent)',
            filter: 'blur(40px)',
            transform: `translate(${xOffset.get()}px, ${yOffset.get()}px)`,
          }}
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-1/6 w-80 h-80 rounded-full opacity-8 dark:opacity-4"
          style={{
            background: 'radial-gradient(circle, #059669, transparent)',
            filter: 'blur(50px)',
            transform: `translate(${-xOffset.get()}px, ${-yOffset.get()}px)`,
          }}
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.08, 0.12, 0.08],
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left space-y-8 lg:w-1/2"
          >
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 dark:text-white space-y-2 transition-colors duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <motion.span 
                className="block text-slate-600 dark:text-slate-400 transition-colors duration-300"
                whileHover={{ 
                  color: '#0EA5E9',
                  transition: { duration: 0.3 }
                }}
              >
                Hi, I'm
              </motion.span>
              <motion.span 
                className="block bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent font-extrabold"
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                Vikram
              </motion.span>
              <TypeAnimation
                sequence={[
                  'Developer',
                  2000,
                  'AI/ML Enthusiast',
                  2000,
                  'Problem Solver',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="block text-2xl sm:text-3xl md:text-4xl text-slate-500 dark:text-slate-400 font-medium transition-colors duration-300"
              />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl lg:mx-0 mx-auto leading-relaxed transition-colors duration-300"
            >
              Passionate about creating innovative solutions and exploring the frontiers of AI & Machine Learning with clean, efficient code.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                onClick={() => handleNavigate('/contact')}
                className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-medium relative overflow-hidden group transition-all duration-300"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 25px rgba(15, 23, 42, 0.2)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Get in Touch</span>
                <motion.div
                  className="absolute inset-0 bg-sky-600"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
              
              <motion.button
                onClick={() => handleNavigate('/projects')}
                className="px-8 py-4 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg font-medium relative overflow-hidden group transition-all duration-300 hover:border-sky-500"
                whileHover={{ 
                  scale: 1.02,
                  color: '#0EA5E9',
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">View Projects</span>
                <motion.div
                  className="absolute inset-0 bg-sky-50 dark:bg-sky-950"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex gap-4 sm:gap-6 justify-center lg:justify-start"
            >
              {[
                { icon: 'Github', href: 'https://github.com/Vikram-0401' },
                { icon: 'Linkedin', href: 'https://www.linkedin.com/in/vikram-shetty-6827b3259/' },
                { icon: 'Twitter', href: 'https://x.com/VikramS87249739?mx=2' },
                { 
                  icon: 'custom', 
                  customIcon: <SiLeetcode className="w-6 h-6" />, 
                  href: 'https://leetcode.com/u/Vikram0401/' 
                },
              ].map(({ icon, href, customIcon }, index) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all duration-300 p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                  whileHover={{ 
                    scale: 1.1, 
                    y: -2,
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                >
                  {icon === 'custom' ? customIcon : <Icon name={icon as any} className="w-6 h-6" />}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Skills Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden lg:block lg:w-1/2"
          >
            <div className="relative w-full h-[350px] md:h-[400px] lg:h-[500px]">
              {/* Clean container */}
              <motion.div
                className="absolute inset-0 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm transition-colors duration-300"
                style={{ 
                  boxShadow: '0 20px 40px rgba(15, 23, 42, 0.08)',
                }}
              >
                {/* Skills nodes */}
                <div className="absolute inset-0 p-8">
                  {skills.map((skill, index) => {
                    const IconComponent = skill.icon;
                    const isCenter = skill.name === "AI/ML";
                    const size = isCenter ? 70 : 50;
                    
                    return (
                      <motion.div
                        key={`skill-${index}`}
                        className="absolute group cursor-pointer"
                        style={{
                          top: `${skill.position[1]}%`,
                          left: `${skill.position[0]}%`,
                          transform: 'translate(-50%, -50%)',
                        }}
                        initial={{ 
                          opacity: 0, 
                          scale: 0,
                        }}
                        animate={{ 
                          opacity: 1, 
                          scale: 1,
                        }}
                        transition={{ 
                          duration: 0.6, 
                          delay: isCenter ? 0.2 : 0.4 + index * 0.1,
                        }}
                        whileHover={{ 
                          scale: 1.1,
                          y: -5,
                          transition: { duration: 0.2 }
                        }}
                      >
                        {/* Skill node */}
                        <div 
                          className="relative rounded-full flex items-center justify-center border-2 bg-white dark:bg-slate-800 shadow-lg transition-all duration-300 group-hover:shadow-xl"
                          style={{
                            width: `${size}px`,
                            height: `${size}px`,
                            borderColor: skill.color,
                            boxShadow: `0 4px 12px ${skill.color}20`,
                          }}
                        >
                          <IconComponent 
                            size={size * 0.4} 
                            color={skill.color}
                          />
                          
                          {/* Subtle pulse effect */}
                          <motion.div
                            className="absolute inset-0 rounded-full border-2"
                            style={{ borderColor: skill.color }}
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0.5, 0, 0.5],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              delay: index * 0.3,
                            }}
                          />
                        </div>
                        
                        {/* Clean tooltip */}
                        <motion.div
                          className="absolute text-sm font-medium rounded-lg px-3 py-2 z-30 pointer-events-none bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg transition-colors duration-300"
                          style={{ 
                            top: '120%',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            color: skill.color,
                            whiteSpace: 'nowrap',
                          }}
                          initial={{ opacity: 0, y: 10, scale: 0.9 }}
                          whileInView={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                        >
                          {skill.name}
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Clean connecting lines for center node */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
                  {skills.map((skill, i) => {
                    const centerSkill = skills.find(s => s.name === "AI/ML");
                    if (!centerSkill || skill.name === "AI/ML") return null;
                    
                    return (
                      <motion.line
                        key={`line-${i}`}
                        x1={`${skill.position[0]}%`}
                        y1={`${skill.position[1]}%`}
                        x2={`${centerSkill.position[0]}%`}
                        y2={`${centerSkill.position[1]}%`}
                        stroke="currentColor"
                        className="text-slate-300 dark:text-slate-600"
                        strokeWidth="1"
                        strokeDasharray="3 3"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ 
                          pathLength: 1,
                          opacity: 0.3,
                        }}
                        transition={{
                          duration: 1,
                          delay: 0.8 + i * 0.1,
                          ease: "easeInOut"
                        }}
                      />
                    );
                  })}
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;