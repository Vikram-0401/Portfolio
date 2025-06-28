import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import Icon from './ui/Icon';

const About = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 3D rotation based on mouse position
  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

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

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, rotateX: -15 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // Enhanced hobby data
  const hobbies = [
    {
      icon: <Icon name="Gamepad2" className="w-6 h-6 text-blue-400" />,
      title: "Cricket",
      description: "Cricket enthusiast who finds joy in both playing and watching the game",
      color: "#3B82F6"
    },
    {
      icon: <Icon name="Compass" className="w-6 h-6 text-emerald-400" />,
      title: "Hiking",
      description: "Avid hiker who loves exploring new trails and connecting with nature",
      color: "#10B981"
    },
    {
      icon: <Icon name="PenTool" className="w-6 h-6 text-purple-400" />,
      title: "Drawing",
      description: "Creative soul who expresses through drawing and artistic pursuits",
      color: "#8B5CF6"
    },
    {
      icon: <Icon name="Gamepad2" className="w-6 h-6 text-orange-400" />,
      title: "Badminton",
      description: "Badminton player who enjoys competitive matches and staying active",
      color: "#F97316"
    }
  ];

  return (
    <section id="about" className="min-h-screen py-12 md:py-24 flex items-center mt-[-80px] pt-[80px] relative overflow-hidden">
      {/* Enhanced 3D Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating 3D Orbs */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${40 + Math.random() * 60}px`,
              height: `${40 + Math.random() * 60}px`,
              background: `radial-gradient(circle at 30% 30%, ${['#3B82F6', '#8B5CF6', '#10B981', '#F97316'][Math.floor(Math.random() * 4)]}40, transparent)`,
              filter: 'blur(20px)',
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 30 - 15, 0],
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent"
            style={{
              filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.3))',
            }}
            whileHover={{
              scale: 1.05,
              filter: 'drop-shadow(0 0 30px rgba(59, 130, 246, 0.5))',
            }}
          >
            About Me
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Enhanced 3D Profile Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -100, rotateY: -30 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:w-1/3 w-full mb-8 lg:mb-0"
            style={{
              transform: `perspective(1000px) rotateX(${rotateX.get() * 0.1}deg) rotateY(${rotateY.get() * 0.1}deg)`,
            }}
          >
            <div className="relative w-80 h-80 mx-auto">
              {/* Multiple 3D Rings */}
              {Array.from({ length: 3 }).map((_, i) => (
                <motion.div
                  key={`ring-${i}`}
                  className="absolute inset-0 rounded-full border-2"
                  style={{
                    borderColor: ['#3B82F6', '#8B5CF6', '#10B981'][i],
                    transform: `perspective(1000px) rotateX(${60 + i * 20}deg) rotateY(${i * 30}deg)`,
                    opacity: 0.6,
                  }}
                  animate={{
                    rotateZ: [0, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    rotateZ: {
                      duration: 10 + i * 2,
                      repeat: Infinity,
                      ease: "linear"
                    },
                    scale: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.5
                    }
                  }}
                />
              ))}

              {/* Enhanced Glow Effect */}
              <motion.div 
                className="absolute -inset-8 rounded-full opacity-30"
                style={{
                  background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4), rgba(139, 92, 246, 0.3), transparent)',
                  filter: 'blur(30px)',
                }}
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* 3D Image Container */}
              <motion.div 
                className="relative rounded-2xl overflow-hidden h-full border-4 border-blue-500/50 shadow-2xl"
                style={{
                  transform: 'perspective(1000px) rotateX(5deg) rotateY(-5deg)',
                  boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                }}
                whileHover={{
                  transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1.05)',
                  boxShadow: '0 35px 70px -12px rgba(59, 130, 246, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                  transition: { duration: 0.3 }
                }}
              >
                <img
                  src="/images/My_pic.jpg"
                  alt="Vikram's Profile"
                  className="object-cover object-top w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
                
                {/* Floating Particles around image */}
                {Array.from({ length: 8 }).map((_, i) => (
                  <motion.div
                    key={`img-particle-${i}`}
                    className="absolute w-2 h-2 bg-blue-400 rounded-full"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      boxShadow: '0 0 10px rgba(59, 130, 246, 0.8)',
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2 + Math.random(),
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Enhanced Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 100, rotateY: 30 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:w-2/3"
            style={{
              transform: `perspective(1000px) rotateX(${rotateX.get() * 0.05}deg) rotateY(${rotateY.get() * 0.05}deg)`,
            }}
          >
            <div className="relative">
              {/* Enhanced 3D Glass Card */}
              <motion.div
                className="absolute -inset-2 rounded-2xl opacity-60"
                style={{
                  background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2))',
                  filter: 'blur(20px)',
                }}
                animate={{
                  background: [
                    'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2))',
                    'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(16, 185, 129, 0.2))',
                    'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(59, 130, 246, 0.2))',
                  ]
                }}
                transition={{ duration: 6, repeat: Infinity }}
              />
              
              <motion.div 
                className="relative rounded-2xl p-8 backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.6))',
                  transform: 'perspective(1000px) rotateX(2deg)',
                }}
                whileHover={{
                  transform: 'perspective(1000px) rotateX(0deg) scale(1.02)',
                  transition: { duration: 0.3 }
                }}
              >
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <motion.div
                      key={`pattern-${i}`}
                      className="absolute w-1 h-1 bg-blue-400 rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
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

                <motion.div
                  className="space-y-8 text-gray-200 relative z-10"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {/* Enhanced Introduction */}
                  <motion.div 
                    className="space-y-6"
                    variants={itemVariants}
                  >
                    <motion.p 
                      className="text-base md:text-lg leading-relaxed"
                      whileHover={{ 
                        color: '#f1f5f9',
                        transition: { duration: 0.3 }
                      }}
                    >
                      I'm Vikram, a Computer Science undergraduate at Siddaganga Institute of Technology, specializing in{' '}
                      <motion.span 
                        className="font-bold text-blue-400"
                        whileHover={{ 
                          textShadow: '0 0 10px rgba(59, 130, 246, 0.8)',
                          scale: 1.05 
                        }}
                      >
                        AI and Machine Learning
                      </motion.span>
                      . I'm passionate about{' '}
                      <motion.span 
                        className="font-bold text-emerald-400"
                        whileHover={{ 
                          textShadow: '0 0 10px rgba(16, 185, 129, 0.8)',
                          scale: 1.05 
                        }}
                      >
                        web development
                      </motion.span>
                      {' '}and{' '}
                      <motion.span 
                        className="font-bold text-purple-400"
                        whileHover={{ 
                          textShadow: '0 0 10px rgba(139, 92, 246, 0.8)',
                          scale: 1.05 
                        }}
                      >
                        DSA
                      </motion.span>
                      , and I'm focused on building meaningful solutions using modern technologies.
                    </motion.p>
                    
                    <motion.p 
                      className="text-base md:text-lg leading-relaxed"
                      whileHover={{ 
                        color: '#f1f5f9',
                        transition: { duration: 0.3 }
                      }}
                    >
                      I enjoy learning by building projects that solve real-world problems. My journey in tech started with competitive programming and has evolved into full-stack development with a strong foundation in data structures and algorithms.
                    </motion.p>
                  </motion.div>

                  {/* Enhanced Beyond Tech Section */}
                  <motion.div 
                    className="space-y-6"
                    variants={itemVariants}
                  >
                    <motion.h3 
                      className="text-2xl font-bold relative inline-block"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                        Beyond Tech
                      </span>
                      <motion.div 
                        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                      />
                    </motion.h3>
                    
                    {/* Enhanced 3D Hobby Cards */}
                    <motion.div 
                      className="grid grid-cols-2 gap-4"
                      variants={containerVariants}
                    >
                      {hobbies.map((hobby, index) => (
                        <motion.div
                          key={index}
                          variants={itemVariants}
                          className="group relative p-4 rounded-xl overflow-hidden cursor-pointer"
                          style={{
                            background: `linear-gradient(135deg, ${hobby.color}20, rgba(15, 23, 42, 0.8))`,
                            border: `1px solid ${hobby.color}40`,
                            transform: 'perspective(1000px) rotateX(5deg)',
                          }}
                          whileHover={{ 
                            y: -8,
                            rotateX: 0,
                            scale: 1.05,
                            boxShadow: `0 20px 40px ${hobby.color}40`,
                            border: `2px solid ${hobby.color}80`,
                            transition: { duration: 0.3 }
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {/* Animated Background */}
                          <motion.div
                            className="absolute inset-0 opacity-0 group-hover:opacity-20"
                            style={{ background: `radial-gradient(circle at center, ${hobby.color}, transparent)` }}
                            transition={{ duration: 0.3 }}
                          />
                          
                          <div className="relative z-10 flex flex-col items-center text-center space-y-3">
                            <motion.div 
                              className="p-3 rounded-full"
                              style={{ backgroundColor: `${hobby.color}20` }}
                              whileHover={{ 
                                scale: 1.2,
                                rotate: 360,
                                backgroundColor: `${hobby.color}30`,
                              }}
                              transition={{ duration: 0.5 }}
                            >
                              {hobby.icon}
                            </motion.div>
                            
                            <motion.h4 
                              className="font-bold text-sm"
                              style={{ color: hobby.color }}
                              whileHover={{ scale: 1.1 }}
                            >
                              {hobby.title}
                            </motion.h4>
                            
                            <motion.p 
                              className="text-xs text-gray-300 leading-relaxed"
                              whileHover={{ color: '#f1f5f9' }}
                            >
                              {hobby.description}
                            </motion.p>
                          </div>

                          {/* Floating particles for each card */}
                          {Array.from({ length: 3 }).map((_, i) => (
                            <motion.div
                              key={`hobby-particle-${index}-${i}`}
                              className="absolute w-1 h-1 rounded-full opacity-0 group-hover:opacity-100"
                              style={{
                                backgroundColor: hobby.color,
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                boxShadow: `0 0 6px ${hobby.color}`,
                              }}
                              animate={{
                                y: [0, -10, 0],
                                opacity: [0, 1, 0],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.3,
                              }}
                            />
                          ))}
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;