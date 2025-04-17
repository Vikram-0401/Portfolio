import { motion } from 'framer-motion';
import Icon from './ui/Icon';

const Contact = () => {
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

  return (
    <section id="contact" className="min-h-screen h-screen py-12 flex items-center">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential collaborations? 
            I'm always open to new opportunities and challenges.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 backdrop-blur-sm shadow-2xl border border-gray-700/50 max-w-md mx-auto overflow-hidden relative"
        >
          {/* Subtle glow effect */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-10 relative z-10"
          >
            {/* Contact methods */}
          <div className="space-y-6">
            <motion.div 
              variants={itemVariants}
              className="flex items-start space-x-4 group" // Changed to items-start
            >
              <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center border border-blue-500/20 group-hover:border-blue-500/50 transition-all duration-300 flex-shrink-0"> {/* Added flex-shrink-0 */}
                <Icon name="Mail" className="w-5 h-5 text-blue-400 group-hover:text-blue-300" />
              </div>
              <div className="min-w-0"> {/* Added min-w-0 for text truncation */}
                <h3 className="text-gray-400 text-sm font-medium mb-1">Email</h3>
                <a
                  href="mailto:vikramshettyr4@gmail.com"
                  className="text-white text-lg hover:text-blue-400 flex items-center gap-1 group-hover:gap-2 transition-all duration-300"
                >
                  vikramshettyr4@gmail.com
                  <Icon name="ArrowRight" className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all flex-shrink-0" />
                </a>
              </div>
            </motion.div>
  
            <motion.div 
              variants={itemVariants}
              className="flex items-start space-x-4 group" // Changed to items-start
            >
              <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center border border-purple-500/20 group-hover:border-purple-500/50 transition-all duration-300 flex-shrink-0"> {/* Added flex-shrink-0 */}
                <Icon name="MessageSquare" className="w-5 h-5 text-purple-400 group-hover:text-purple-300" />
              </div>
              <div className="min-w-0"> {/* Added min-w-0 for text truncation */}
                <h3 className="text-gray-400 text-sm font-medium mb-1">Let's chat</h3>
                <p className="text-white text-lg">
                  I'm available for freelance projects and full-time positions.
                </p>
              </div>
            </motion.div>
          </div>
            
            {/* Social connections */}
            <motion.div variants={itemVariants}>
              <h3 className="text-gray-400 mb-4 text-center font-medium">Connect with me</h3>
              <div className="flex items-center justify-center space-x-5">
                {[
                  { icon: 'Github', href: 'https://github.com/Vikram-0401', ariaLabel: 'GitHub Profile', hoverColor: 'hover:bg-gray-700' },
                  { icon: 'Linkedin', href: 'https://www.linkedin.com/in/vikram-shetty-6827b3259/', ariaLabel: 'LinkedIn Profile', hoverColor: 'hover:bg-blue-600/20' },
                  { icon: 'Twitter', href: 'https://x.com/VikramS87249739?mx=2', ariaLabel: 'Twitter Profile', hoverColor: 'hover:bg-sky-600/20' },
                  { icon: 'Mail', href: 'mailto:vikramshettyr4@gmail.com', ariaLabel: 'Email Contact', hoverColor: 'hover:bg-green-600/20' }
                ].map(({ icon, href, ariaLabel, hoverColor }, index) => (
                  <motion.a
                    key={href}
                    href={href}
                    aria-label={ariaLabel}
                    className={`w-10 h-10 bg-gray-800/50 rounded-full flex items-center justify-center text-gray-400 hover:text-white ${hoverColor} transition-all duration-300 border border-gray-700`}
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <Icon name={icon} className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
            
            {/* Contact button */}
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => window.location.href = 'mailto:vikramshettyr4@gmail.com'}
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white rounded-lg transition-all text-center font-medium shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 border border-blue-600/50"
            >
              Send me an email
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;