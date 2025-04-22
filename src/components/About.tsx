import { motion } from 'framer-motion';
import Icon from './ui/Icon';

const About = () => {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  // Hobby data for consistency
  const hobbies = [
    {
      icon: <Icon name="Gamepad2" className="w-6 h-6 text-blue-400" />,
      title: "Cricket",
      description: "Cricket enthusiast who finds joy in both playing and watching the game"
    },
    {
      icon: <Icon name="Compass" className="w-6 h-6 text-blue-400" />,
      title: "Hiking",
      description: "Avid hiker who loves exploring new trails and connecting with nature"
    },
    {
      icon: <Icon name="PenTool" className="w-6 h-6 text-blue-400" />,
      title: "Drawing",
      description: "Creative soul who expresses through drawing and artistic pursuits"
    },
    {
      icon: <Icon name="Gamepad2" className="w-6 h-6 text-blue-400" />,
      title: "Badminton",
      description: "Badminton player who enjoys competitive matches and staying active"
    }
  ];

  return (
    <section id="about" className="min-h-screen h-screen py-12 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from from-white to to-white bg-clip-text text-transparent">
           About Me
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/3"
          >
            <div className="relative w-64 h-64 mx-auto perspective-effect">
              {/* Enhanced decorative elements */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl opacity-20 blur-xl"
                animate={{ 
                  boxShadow: ["0 0 20px 0px rgba(59, 130, 246, 0.5)", "0 0 25px 5px rgba(124, 58, 237, 0.5)", "0 0 20px 0px rgba(59, 130, 246, 0.5)"],
                }}
                transition={{
                  opacity: { duration: 1 },
                  boxShadow: {
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut"
                  }
                }}
              />
              
              {/* Image container with enhanced styling */}
              <div className="relative rounded-xl overflow-hidden h-full border-2 border-blue-500/30 shadow-lg shadow-blue-500/20">
    <img
      src="/images/My_pic.jpg"
      alt="Vikram's Profile"
      className="object-cover object-top w-full h-full" // Added object-top and w-full
    />
    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
  </div>
            </div>
          </motion.div>

          {/* Content Section with enhanced styling */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-2/3"
          >
            <div className="relative">
              {/* Enhanced glass effect card with subtle animation */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ 
                  opacity: { duration: 0.7 },
                  background: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 rounded-lg blur"
                animate={{
                  background: [
                    "linear-gradient(to right, rgba(37, 99, 235, 0.2), rgba(124, 58, 237, 0.2), rgba(37, 99, 235, 0.2))",
                    "linear-gradient(to right, rgba(124, 58, 237, 0.2), rgba(37, 99, 235, 0.2), rgba(124, 58, 237, 0.2))",
                    "linear-gradient(to right, rgba(37, 99, 235, 0.2), rgba(124, 58, 237, 0.2), rgba(37, 99, 235, 0.2))"
                  ]
                }}
              />
              
              {/* Main content card with enhanced glass effect */}
              <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-lg p-8 border border-blue-500/30 shadow-lg shadow-blue-500/10">
                <motion.div
                  className="space-y-6 text-gray-200"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {/* Introduction with enhanced typography */}
                  <div className="space-y-4">
                  <p className="text-lg leading-relaxed">
                    I'm Vikram, a Computer Science undergraduate at Siddaganga Institute of Technology, specializing in <span className="font-bold text-blue-400">AI and Machine Learning</span>. I'm passionate about <span className="font-bold text-blue-400">web development</span> and <span className="font-bold text-blue-400">DSA</span>, and I'm focused on building meaningful solutions using modern technologies.  
                    I enjoy learning by building projects that solve real-world problems. My journey in tech started with competitive programming and has evolved into full-stack development with a strong foundation in data structures and algorithms.
                  </p>
                  </div>

                  {/* Enhanced Beyond Tech Section */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold relative inline-block">
                      <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">Beyond Tech</span>
                      <motion.span 
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r"
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      />
                    </h3>
                    
                    {/* Compact hobby cards with better animations */}
                    <motion.div 
                      className="grid grid-cols-2 md:grid-cols-4 gap-3"
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {hobbies.map((hobby, index) => (
                        <motion.div
                          key={index}
                          variants={itemVariants}
                          whileHover={{ 
                            y: -3, 
                            boxShadow: "0 8px 20px -5px rgba(59, 130, 246, 0.5)",
                            borderColor: "rgba(59, 130, 246, 0.5)"
                          }}
                          className="flex flex-col items-center p-3 rounded-lg bg-gray-800/80 border border-gray-700/80 hover:border-blue-500/50 transition-all duration-300"
                        >
                          <div className="bg-blue-500/10 p-2 rounded-full mb-2">
                            {hobby.icon}
                          </div>
                          <h4 className="font-medium text-blue-400 mb-1 text-sm">{hobby.title}</h4>
                          <p className="text-xs text-center text-gray-300 line-clamp-2">{hobby.description}</p>
                        </motion.div>
                      ))}
                    </motion.div>
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