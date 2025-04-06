import { motion } from 'framer-motion';

const About = () => {
  return (
    
    <section id="about" className="py-20">
        
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from from-white to to-white bg-clip-text text-transparent">
        About me
      </h2>
    </motion.div>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/3"
          >
            <div className="relative w-64 h-64 mx-auto">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl opacity-20 blur-xl animate-pulse" />
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl opacity-20" />
              
              {/* Image container */}
              <div className="relative rounded-xl overflow-hidden h-full">
                <img
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-2/3"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-lg blur animate-pulse" />
              <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-lg p-8 border border-blue-500/20">
                <motion.h2 
                  className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                
                </motion.h2>
                
                <motion.div
                  className="space-y-6 text-gray-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {/* Introduction */}
                  <div className="space-y-4">
                  <p className="text-lg">
  I'm Vikram, a Computer Science undergraduate specializing in <span className="font-bold">Artificial Intelligence and Machine Learning</span> at Siddaganga Institute of Technology. As an aspiring developer, I'm actively exploring the fundamentals of <span className="font-bold">Data Structures and Algorithms</span> while building my knowledge in <span className="font-bold">web development</span>. I'm passionate about creating meaningful solutions and currently focused on expanding my expertise in both <span className="font-bold">AI/ML</span> technologies and modern web applications.
                    </p>
                  </div>

                  {/* Beyond Tech Section */}
  

{/* Beyond Tech Section */}
<div className="space-y-4">
  <h3 className="text-xl font-semibold text-blue-400">Beyond Tech</h3>
  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="flex items-start gap-3 p-4 rounded-lg bg-gray-800/50 border border-gray-700/50"
    >
      <img 
        src="/icons/Cricket.jpg"
        alt="Cricket"
        className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1"
      />
      <p className="text-sm">Cricket enthusiast who finds joy in both playing and watching the game</p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="flex items-start gap-3 p-4 rounded-lg bg-gray-800/50 border border-gray-700/50"
    >
      <img 
        src="/icons/Hiking.jpg"
        alt="Hiking"
        className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1"
      />
      <p className="text-sm">Avid hiker who loves exploring new trails and connecting with nature</p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="flex items-start gap-3 p-4 rounded-lg bg-gray-800/50 border border-gray-700/50"
    >
      <img 
        src="/icons/Drawing.jpg"
        alt="Drawing"
        className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1"
      />
      <p className="text-sm">Creative soul who expresses through drawing and artistic pursuits</p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.7 }}
      className="flex items-start gap-3 p-4 rounded-lg bg-gray-800/50 border border-gray-700/50"
    >
      <img 
        src="/icons/Batminton.png"
        alt="Badminton"
        className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1"
      />
      <p className="text-sm">Badminton player who enjoys competitive matches and staying active</p>
    </motion.div>
  </div>
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