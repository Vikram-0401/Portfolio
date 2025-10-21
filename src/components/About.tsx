import { motion } from 'framer-motion';
import { useState } from 'react';
import Icon from './ui/Icon';

const About = () => {
  const [hoveredHobby, setHoveredHobby] = useState<number | null>(null);

  const hobbies = [
    {
      icon: <Icon name="Gamepad2" className="w-6 h-6" />,
      title: "Cricket",
      description: "Cricket enthusiast who finds joy in both playing and watching the game",
      color: "#ffffff"
    },
    {
      icon: <Icon name="Compass" className="w-6 h-6" />,
      title: "Hiking",
      description: "Avid hiker who loves exploring new trails and connecting with nature",
      color: "#e5e5e5"
    },
    {
      icon: <Icon name="PenTool" className="w-6 h-6" />,
      title: "Drawing",
      description: "Creative soul who expresses through drawing and artistic pursuits",
      color: "#d4d4d4"
    },
    {
      icon: <Icon name="Gamepad2" className="w-6 h-6" />,
      title: "Badminton",
      description: "Badminton player who enjoys competitive matches and staying active",
      color: "#a3a3a3"
    }
  ];

  return (
    <section id="about" className="min-h-screen py-24 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            About Me
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-gray-400 to-white mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Profile Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/3 w-full"
          >
            <div className="relative w-80 h-80 mx-auto">
              <motion.div 
                className="relative rounded-2xl overflow-hidden h-full border-4 border-white/20 shadow-2xl"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)",
                  transition: { duration: 0.3 }
                }}
              >
                <img
                  src="/images/My_pic.jpg"
                  alt="Vikram's Profile"
                  className="object-cover object-top w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </motion.div>
              
              {/* Clean decorative ring */}
              <motion.div
                className="absolute -inset-4 rounded-2xl border-2 border-white/30 opacity-50"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-2/3"
          >
            <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
              <div className="space-y-8 text-slate-300">
                {/* Introduction */}
                <motion.div 
                  className="space-y-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-lg leading-relaxed">
                    I'm Vikram, a Computer Science undergraduate at Siddaganga Institute of Technology, specializing in{' '}
                    <span className="font-semibold text-white">AI and Machine Learning</span>. 
                    I'm passionate about{' '}
                    <span className="font-semibold text-gray-300">web development</span>
                    {' '}and{' '}
                    <span className="font-semibold text-gray-400">DSA</span>
                    , focused on building meaningful solutions using modern technologies.
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    I enjoy learning by building projects that solve real-world problems. My journey in tech started with competitive programming and has evolved into full-stack development with a strong foundation in data structures and algorithms.
                  </p>
                </motion.div>

                {/* Beyond Tech Section */}
                <motion.div 
                  className="space-y-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h3 className="text-2xl font-bold text-white">
                    Beyond Tech
                  </h3>
                  
                  {/* Hobby Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    {hobbies.map((hobby, index) => (
                      <motion.div
                        key={index}
                        className="group relative p-4 rounded-xl border border-white/20 bg-black/30 cursor-pointer transition-all duration-300"
                        style={{
                          borderColor: hoveredHobby === index ? hobby.color : undefined,
                          backgroundColor: hoveredHobby === index ? `${hobby.color}10` : undefined,
                        }}
                        whileHover={{ 
                          y: -4,
                          scale: 1.02,
                          boxShadow: `0 10px 25px ${hobby.color}20`,
                        }}
                        onHoverStart={() => setHoveredHobby(index)}
                        onHoverEnd={() => setHoveredHobby(null)}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                      >
                        <div className="flex flex-col items-center text-center space-y-3">
                          <motion.div 
                            className="p-3 rounded-full bg-black/50 border-2 transition-all duration-300"
                            style={{ 
                              borderColor: hobby.color,
                              color: hobby.color,
                            }}
                            whileHover={{ 
                              scale: 1.1,
                              rotate: 5,
                            }}
                          >
                            {hobby.icon}
                          </motion.div>
                          
                          <h4 
                            className="font-semibold text-sm transition-colors duration-300"
                            style={{ color: hoveredHobby === index ? hobby.color : undefined }}
                          >
                            {hobby.title}
                          </h4>
                          
                          <p className="text-xs text-slate-400 leading-relaxed transition-colors duration-300">
                            {hobby.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;