import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { useNavigate } from 'react-router-dom';
import Icon from './ui/Icon';
import { FaReact, FaPython, FaDocker, FaGitAlt, FaJs, FaFireAlt } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiNextdotjs, SiPostman, SiLeetcode } from 'react-icons/si';
import { BsFillLightningFill } from 'react-icons/bs';

// Skills data with proper styling
const skills = [
  { name: "React", color: "#61DAFB", position: [65, 30], icon: FaReact, glowColor: "#61DAFB30" },
  { name: "TypeScript", color: "#3178C6", position: [30, 20], icon: SiTypescript, glowColor: "#3178C630" },
  { name: "JavaScript", color: "#F7DF1E", position: [45, 15], icon: FaJs, glowColor: "#F7DF1E30" },
  { name: "Firebase", color: "#FFCA28", position: [80, 50], icon: FaFireAlt, glowColor: "#FFCA2830" },
  { name: "Python", color: "#3776AB", position: [25, 45], icon: FaPython, glowColor: "#3776AB30" },
  { name: "MongoDB", color: "#47A248", position: [45, 70], icon: SiMongodb, glowColor: "#47A24830" },
  { name: "Next.js", color: "#000000", position: [65, 85], icon: SiNextdotjs, glowColor: "#FFFFFF30" },
  { name: "Docker", color: "#2496ED", position: [20, 80], icon: FaDocker, glowColor: "#2496ED30" },
  { name: "Git", color: "#F05032", position: [85, 75], icon: FaGitAlt, glowColor: "#F0503230" },
  { name: "Postman", color: "#FF6C37", position: [15, 60], icon: SiPostman, glowColor: "#FF6C3730" },
  { name: "AI/ML", color: "#8e44ad", position: [50, 50], icon: BsFillLightningFill, glowColor: "#8e44ad30" },
];

const Hero = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };
  return (
    <div className="w-full h-full flex items-center justify-center py-16 md:py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated circles */}
        <motion.div
          className="absolute top-1/4 left-10 md:left-16 w-40 md:w-64 h-40 md:h-64 rounded-full bg-blue-500/5 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.2, 0.3]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 md:right-16 w-48 md:w-80 h-48 md:h-80 rounded-full bg-purple-500/5 blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left space-y-6 md:space-y-8 lg:w-1/2"
          >
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white space-y-2 md:space-y-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="block">Hi, I'm</span>
              <span className="block bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Vikram
              </span>
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
              />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-base md:text-xl text-gray-400 max-w-2xl lg:mx-0 mx-auto"
            >
              Passionate about creating innovative solutions and exploring the frontiers of AI & Machine Learning.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                onClick={() => handleNavigate('/contact')}
                className="px-6 sm:px-8 py-2.5 sm:py-3 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition-colors text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.button>
              <motion.button
                onClick={() => handleNavigate('/projects')}
                className="px-6 sm:px-8 py-2.5 sm:py-3 border border-blue-500/30 text-blue-400 rounded-full font-medium hover:bg-blue-500/10 transition-colors text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
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
              ].map(({ icon, href, customIcon }) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {icon === 'custom' ? customIcon : <Icon name={icon as any} className="w-5 h-5 sm:w-6 sm:h-6" />}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Skills Visualization - Enhanced for Better Visibility and Responsiveness */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block lg:w-1/2"
          >
            <div className="relative w-full h-[400px]">
              {/* Background with removed blurred circles */}
              <motion.div
                className="absolute inset-0 rounded-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                style={{ 
                  boxShadow: "0 0 20px rgba(50, 50, 200, 0.05)",
                  border: "1px solid rgba(80, 100, 240, 0.15)",
                  background: "linear-gradient(135deg, rgba(20, 30, 60, 0.2), rgba(10, 15, 30, 0.1))"
                }}
              >
                {/* Animated particles in background */}
                {Array.from({ length: 70 }).map((_, index) => (
                  <motion.div
                    key={`particle-${index}`}
                    className="absolute rounded-full"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      width: Math.random() < 0.3 ? "2px" : "1px",
                      height: Math.random() < 0.3 ? "2px" : "1px",
                      backgroundColor: `hsl(${Math.random() * 60 + 200}, 80%, 70%)`,
                      boxShadow: `0 0 ${Math.random() * 5 + 2}px hsl(${Math.random() * 60 + 200}, 80%, 70%, 0.8)`
                    }}
                    animate={{
                      y: [0, Math.random() * 30 - 15, 0],
                      x: [0, Math.random() * 30 - 15, 0],
                      opacity: [0.2, 0.6, 0.2],
                      scale: [1, Math.random() * 1.5 + 0.5, 1]
                    }}
                    transition={{
                      duration: Math.random() * 4 + 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </motion.div>

              {/* Skill icons with improved visibility */}
              <div className="absolute inset-0">
                {skills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  // Making central AI/ML node larger
                  const isCenter = skill.name === "AI/ML";
                  const baseSize = isCenter ? 56 : 46;
                  
                  return (
                    <motion.div
                      key={`skill-${index}`}
                      className="absolute z-10 group"
                      style={{
                        top: `${skill.position[1]}%`,
                        left: `${skill.position[0]}%`,
                        transform: 'translate(-50%, -50%)',
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: isCenter ? 0.3 : 0.5 + index * 0.1,
                        type: "spring",
                        stiffness: 200
                      }}
                      whileHover={{ 
                        scale: 1.1,
                        transition: { duration: 0.2 }
                      }}
                    >
                      {/* Main circular background */}
                      <div 
                        className="rounded-full flex items-center justify-center relative"
                        style={{
                          width: `${baseSize}px`,
                          height: `${baseSize}px`,
                          background: `radial-gradient(circle at 30% 30%, ${skill.color}70, ${skill.color}30)`,
                          boxShadow: `0 0 15px ${skill.color}, inset 0 0 5px rgba(255,255,255,0.4)`,
                          border: `2px solid ${skill.color}`,
                        }}
                      >
                        {/* Icon */}
                        <IconComponent 
                          size={isCenter ? baseSize * 0.7 : baseSize * 0.65} 
                          color="white"
                          style={{
                            filter: `drop-shadow(0 0 2px rgba(0,0,0,0.5))`
                          }}
                        />
                      </div>
                      
                      {/* Skill name tooltip on hover - Fixed to properly show on hover */}
                      <div
                        className="absolute text-sm font-medium rounded-md px-3 py-1.5 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        style={{ 
                          top: '105%',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          background: 'rgba(10,10,20,0.9)',
                          color: 'white',
                          border: `2px solid ${skill.color}`,
                          boxShadow: `0 0 10px ${skill.color}`,
                          pointerEvents: 'none',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {skill.name}
                      </div>
                      
                      {/* Orbiting particles */}
                      {isCenter ? null : Array.from({ length: 2 }).map((_, i) => (
                        <motion.div
                          key={`orbit-${index}-${i}`}
                          className="absolute rounded-full"
                          style={{
                            width: '4px',
                            height: '4px',
                            backgroundColor: 'white',
                            boxShadow: `0 0 8px ${skill.color}`,
                            top: '50%',
                            left: '50%',
                            marginTop: '-2px',
                            marginLeft: '-2px',
                          }}
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.6, 1, 0.6],
                            rotate: [0, 360],
                            translateX: [
                              `${(baseSize / 2) * Math.cos(i * Math.PI)}px`,
                              `${(baseSize / 2) * Math.cos((i * Math.PI) + Math.PI)}px`,
                              `${(baseSize / 2) * Math.cos(i * Math.PI)}px`,
                            ],
                            translateY: [
                              `${(baseSize / 2) * Math.sin(i * Math.PI)}px`,
                              `${(baseSize / 2) * Math.sin((i * Math.PI) + Math.PI)}px`,
                              `${(baseSize / 2) * Math.sin(i * Math.PI)}px`,
                            ],
                          }}
                          transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        />
                      ))}
                    </motion.div>
                  );
                })}

                {/* Connection lines between skills */}
                <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#4F46E5A0" />
                      <stop offset="50%" stopColor="#8B5CF6A0" />
                      <stop offset="100%" stopColor="#06B6D4A0" />
                    </linearGradient>
                  </defs>
                  
                  {skills.map((skill, i) => {
                    // Connect each skill to AI/ML center and some random connections
                    const centerSkill = skills.find(s => s.name === "AI/ML");
                    if (!centerSkill || skill.name === "AI/ML") return null;
                    
                    return (
                      <motion.line
                        key={`line-${i}-center`}
                        x1={skill.position[0]}
                        y1={skill.position[1]}
                        x2={centerSkill.position[0]}
                        y2={centerSkill.position[1]}
                        stroke="url(#lineGradient)"
                        strokeWidth="1.2"
                        strokeDasharray="4 2"
                        initial={{ opacity: 0, pathLength: 0 }}
                        animate={{ 
                          opacity: 0.7,
                          pathLength: 1
                        }}
                        transition={{
                          pathLength: { duration: 1.5, delay: 0.5 + i * 0.1 },
                          opacity: { duration: 0.8, delay: 0.5 + i * 0.1 }
                        }}
                      />
                    );
                  })}
                  
                  {/* Additional connections for visual interest */}
                  {skills.map((skill, i) => {
                    if (i === skills.length - 1 || skill.name === "AI/ML") return null;
                    
                    // Connect to next skill in array for a circular effect
                    const nextSkill = skills[i + 1 === skills.length - 1 ? 0 : i + 1];
                    if (nextSkill.name === "AI/ML") return null;
                    
                    return (
                      <motion.line
                        key={`line-${i}-next`}
                        x1={skill.position[0]}
                        y1={skill.position[1]}
                        x2={nextSkill.position[0]}
                        y2={nextSkill.position[1]}
                        stroke="url(#lineGradient)"
                        strokeWidth="0.8"
                        strokeDasharray="2 3"
                        initial={{ opacity: 0, pathLength: 0 }}
                        animate={{ 
                          opacity: 0.5,
                          pathLength: 1
                        }}
                        transition={{
                          pathLength: { duration: 1.5, delay: 1 + i * 0.1 },
                          opacity: { duration: 0.8, delay: 1 + i * 0.1 }
                        }}
                      />
                    );
                  })}
                </svg>

                {/* Center skill highlight effect */}
                {skills.filter(s => s.name === "AI/ML").map((centerSkill, i) => (
                  <motion.div
                    key={`center-wave-${i}`}
                    className="absolute rounded-full"
                    style={{
                      top: `${centerSkill.position[1]}%`,
                      left: `${centerSkill.position[0]}%`,
                      width: '20px',
                      height: '20px',
                      transform: 'translate(-50%, -50%)',
                      border: `2px solid ${centerSkill.color}`,
                      backgroundColor: 'transparent'
                    }}
                    animate={{
                      scale: [1, 15],
                      opacity: [0.8, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeOut",
                      repeatDelay: 1
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;