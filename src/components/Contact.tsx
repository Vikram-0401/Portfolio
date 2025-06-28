import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import Icon from './ui/Icon';
import { SiLeetcode } from 'react-icons/si';

const Contact = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 3D rotation based on mouse position
  const rotateX = useTransform(mouseY, [-300, 300], [8, -8]);
  const rotateY = useTransform(mouseX, [-300, 300], [-8, 8]);

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

  return (
    <section id="contact" className="min-h-screen py-16 md:py-24 flex items-center mt-[-80px] pt-[80px] relative overflow-hidden">
      {/* Enhanced 3D Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating 3D Orbs */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={`contact-orb-${i}`}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${30 + Math.random() * 50}px`,
              height: `${30 + Math.random() * 50}px`,
              background: `radial-gradient(circle at 30% 30%, ${['#3B82F6', '#8B5CF6', '#10B981', '#F97316'][Math.floor(Math.random() * 4)]}40, transparent)`,
              filter: 'blur(20px)',
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 20 - 10, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}

        {/* Particle System */}
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={`contact-particle-${i}`}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: '0 0 6px rgba(59, 130, 246, 0.8)',
            }}
            animate={{
              y: [0, -60, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Enhanced Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent"
            style={{
              filter: 'drop-shadow(0 0 30px rgba(59, 130, 246, 0.3))',
            }}
            whileHover={{
              scale: 1.05,
              filter: 'drop-shadow(0 0 40px rgba(59, 130, 246, 0.5))',
            }}
          >
            Get In Touch
          </motion.h2>
          
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Have a project in mind or want to discuss potential collaborations? 
            I'm always open to new opportunities and challenges.
          </motion.p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row items-stretch gap-12">
          {/* Enhanced Contact Form Card */}
          <motion.div 
            initial={{ opacity: 0, x: -100, rotateY: -20 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full lg:w-3/5 overflow-hidden relative"
            style={{
              transform: `perspective(1000px) rotateX(${rotateX.get() * 0.1}deg) rotateY(${rotateY.get() * 0.1}deg)`,
            }}
          >
            <motion.div
              className="relative rounded-2xl p-8 lg:p-12 backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9), rgba(30, 41, 59, 0.8))',
                transform: 'perspective(1000px) rotateX(3deg)',
              }}
              whileHover={{
                transform: 'perspective(1000px) rotateX(0deg) scale(1.02)',
                transition: { duration: 0.3 }
              }}
            >
              {/* Enhanced Glow Effects */}
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl" />
              
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                {Array.from({ length: 25 }).map((_, i) => (
                  <motion.div
                    key={`contact-pattern-${i}`}
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
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-10 relative z-10"
              >
                {/* Enhanced Contact Methods */}
                <div className="space-y-8">
                  <motion.div 
                    variants={itemVariants}
                    className="flex items-start space-x-6 group"
                  >
                    <motion.div 
                      className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-600/30 rounded-2xl flex items-center justify-center border border-blue-500/30 backdrop-blur-sm flex-shrink-0"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5,
                        boxShadow: "0 15px 30px rgba(59, 130, 246, 0.4)",
                      }}
                      style={{
                        transform: 'perspective(1000px) rotateX(10deg)',
                      }}
                    >
                      <Icon name="Mail" className="w-7 h-7 text-blue-400" />
                    </motion.div>
                    <div className="min-w-0">
                      <motion.h3 
                        className="text-gray-400 text-sm font-medium mb-2"
                        whileHover={{ color: '#e5e7eb' }}
                      >
                        Email
                      </motion.h3>
                      <motion.a
                        href="mailto:vikramshettyr4@gmail.com"
                        className="text-white text-xl hover:text-blue-400 flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                      >
                        vikramshettyr4@gmail.com
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          whileHover={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Icon name="ArrowRight" className="w-5 h-5 flex-shrink-0" />
                        </motion.div>
                      </motion.a>
                    </div>
                  </motion.div>
        
                  <motion.div 
                    variants={itemVariants}
                    className="flex items-start space-x-6 group"
                  >
                    <motion.div 
                      className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-purple-600/30 rounded-2xl flex items-center justify-center border border-purple-500/30 backdrop-blur-sm flex-shrink-0"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: -5,
                        boxShadow: "0 15px 30px rgba(139, 92, 246, 0.4)",
                      }}
                      style={{
                        transform: 'perspective(1000px) rotateX(10deg)',
                      }}
                    >
                      <Icon name="MessageSquare" className="w-7 h-7 text-purple-400" />
                    </motion.div>
                    <div className="min-w-0">
                      <motion.h3 
                        className="text-gray-400 text-sm font-medium mb-2"
                        whileHover={{ color: '#e5e7eb' }}
                      >
                        Let's chat
                      </motion.h3>
                      <motion.p 
                        className="text-white text-xl"
                        whileHover={{ color: '#e5e7eb' }}
                      >
                        I'm available for freelance projects and full-time positions.
                      </motion.p>
                    </div>
                  </motion.div>

                  <motion.div 
                    variants={itemVariants}
                    className="flex items-start space-x-6 group"
                  >
                    <motion.div 
                      className="w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-emerald-600/30 rounded-2xl flex items-center justify-center border border-emerald-500/30 backdrop-blur-sm flex-shrink-0"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5,
                        boxShadow: "0 15px 30px rgba(16, 185, 129, 0.4)",
                      }}
                      style={{
                        transform: 'perspective(1000px) rotateX(10deg)',
                      }}
                    >
                      <Icon name="Compass" className="w-7 h-7 text-emerald-400" />
                    </motion.div>
                    <div className="min-w-0">
                      <motion.h3 
                        className="text-gray-400 text-sm font-medium mb-2"
                        whileHover={{ color: '#e5e7eb' }}
                      >
                        Location
                      </motion.h3>
                      <motion.p 
                        className="text-white text-xl"
                        whileHover={{ color: '#e5e7eb' }}
                      >
                        Bengaluru, Karnataka, India
                      </motion.p>
                    </div>
                  </motion.div>
                </div>
                  
                {/* Enhanced Contact Button */}
                <motion.button
                  variants={itemVariants}
                  onClick={() => window.location.href = 'mailto:vikramshettyr4@gmail.com'}
                  className="w-full py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 text-white rounded-2xl transition-all text-center font-bold shadow-2xl border border-white/20 text-lg relative overflow-hidden group"
                  whileHover={{ 
                    scale: 1.03,
                    boxShadow: "0 25px 50px rgba(59, 130, 246, 0.4)",
                  }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="relative z-10">Send me an email</span>
                  
                  {/* Animated Background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 via-emerald-600 to-blue-600"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                  
                  {/* Floating Particles */}
                  {Array.from({ length: 5 }).map((_, i) => (
                    <motion.div
                      key={`btn-particle-${i}`}
                      className="absolute w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [0, -15, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Enhanced Social Connections Card */}
          <motion.div
            initial={{ opacity: 0, x: 100, rotateY: 20 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="w-full lg:w-2/5 overflow-hidden relative"
            style={{
              transform: `perspective(1000px) rotateX(${rotateX.get() * 0.1}deg) rotateY(${rotateY.get() * 0.1}deg)`,
            }}
          >
            <motion.div
              className="relative rounded-2xl p-8 lg:p-10 backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden h-full flex flex-col"
              style={{
                background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9), rgba(30, 41, 59, 0.8))',
                transform: 'perspective(1000px) rotateX(3deg)',
              }}
              whileHover={{
                transform: 'perspective(1000px) rotateX(0deg) scale(1.02)',
                transition: { duration: 0.3 }
              }}
            >
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl" />
              
              <motion.h3 
                className="text-2xl font-bold text-white mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Connect with me
              </motion.h3>
              
              <div className="grid grid-cols-2 gap-6 flex-grow">
                {[
                  { 
                    icon: 'Github', 
                    name: 'GitHub',
                    href: 'https://github.com/Vikram-0401', 
                    ariaLabel: 'GitHub Profile', 
                    color: '#6B7280',
                    bgColor: 'from-gray-700 to-gray-600'
                  },
                  { 
                    icon: 'Linkedin', 
                    name: 'LinkedIn',
                    href: 'https://www.linkedin.com/in/vikram-shetty-6827b3259/', 
                    ariaLabel: 'LinkedIn Profile', 
                    color: '#3B82F6',
                    bgColor: 'from-blue-700 to-blue-600'
                  },
                  { 
                    icon: 'Twitter', 
                    name: 'Twitter',
                    href: 'https://x.com/VikramS87249739?mx=2', 
                    ariaLabel: 'Twitter Profile', 
                    color: '#0EA5E9',
                    bgColor: 'from-sky-700 to-sky-600'
                  },
                  { 
                    icon: 'custom', 
                    customIcon: <SiLeetcode className="w-6 h-6" />,
                    name: 'LeetCode',
                    href: 'https://leetcode.com/u/Vikram0401/', 
                    ariaLabel: 'LeetCode Profile', 
                    color: '#F59E0B',
                    bgColor: 'from-yellow-700 to-yellow-600'
                  }
                ].map(({ icon, customIcon, name, href, ariaLabel, color, bgColor }, index) => (
                  <motion.a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={ariaLabel}
                    className={`bg-gradient-to-br ${bgColor} p-6 rounded-2xl flex flex-col items-center justify-center gap-4 border border-white/10 shadow-xl relative overflow-hidden group`}
                    style={{
                      transform: 'perspective(1000px) rotateX(5deg)',
                    }}
                    whileHover={{ 
                      y: -8,
                      rotateX: 0,
                      scale: 1.05,
                      boxShadow: `0 25px 50px ${color}40`,
                      transition: { duration: 0.3 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    {/* Animated Background */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-20"
                      style={{ background: `radial-gradient(circle at center, ${color}, transparent)` }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    <motion.div 
                      className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm"
                      whileHover={{ 
                        scale: 1.2,
                        rotate: 360,
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      {icon === 'custom' ? customIcon : <Icon name={icon} className="w-6 h-6" />}
                    </motion.div>
                    
                    <motion.span 
                      className="font-bold text-lg"
                      whileHover={{ scale: 1.1 }}
                    >
                      {name}
                    </motion.span>

                    {/* Floating Particles */}
                    {Array.from({ length: 3 }).map((_, i) => (
                      <motion.div
                        key={`social-particle-${index}-${i}`}
                        className="absolute w-1 h-1 rounded-full opacity-0 group-hover:opacity-100"
                        style={{
                          backgroundColor: color,
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                        }}
                        animate={{
                          y: [0, -15, 0],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3,
                        }}
                      />
                    ))}
                  </motion.a>
                ))}
              </div>
              
              <motion.p 
                className="text-gray-400 text-center mt-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                Feel free to reach out on any platform!
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;