import { motion } from 'framer-motion';
import Icon from './ui/Icon';
import { SiLeetcode } from 'react-icons/si';

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
    <section id="contact" className="min-h-screen py-16 md:py-24 flex items-center mt-[-80px] pt-[80px]">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Have a project in mind or want to discuss potential collaborations? 
            I'm always open to new opportunities and challenges.
          </p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row items-stretch gap-10">
          {/* Contact form card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 lg:p-10 backdrop-blur-sm shadow-2xl border border-gray-700/50 w-full lg:w-3/5 overflow-hidden relative"
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
              <div className="space-y-8">
                <motion.div 
                  variants={itemVariants}
                  className="flex items-start space-x-5 group"
                >
                  <div className="w-14 h-14 bg-blue-500/10 rounded-full flex items-center justify-center border border-blue-500/20 group-hover:border-blue-500/50 transition-all duration-300 flex-shrink-0">
                    <Icon name="Mail" className="w-6 h-6 text-blue-400 group-hover:text-blue-300" />
                  </div>
                  <div className="min-w-0">
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
                  className="flex items-start space-x-5 group"
                >
                  <div className="w-14 h-14 bg-purple-500/10 rounded-full flex items-center justify-center border border-purple-500/20 group-hover:border-purple-500/50 transition-all duration-300 flex-shrink-0">
                    <Icon name="MessageSquare" className="w-6 h-6 text-purple-400 group-hover:text-purple-300" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-gray-400 text-sm font-medium mb-1">Let's chat</h3>
                    <p className="text-white text-lg">
                      I'm available for freelance projects and full-time positions.
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  variants={itemVariants}
                  className="flex items-start space-x-5 group"
                >
                  <div className="w-14 h-14 bg-green-500/10 rounded-full flex items-center justify-center border border-green-500/20 group-hover:border-green-500/50 transition-all duration-300 flex-shrink-0">
                    ?<Icon name="MapPin" className="w-6 h-6 text-green-400 group-hover:text-green-300" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-gray-400 text-sm font-medium mb-1">Location</h3>
                    <p className="text-white text-lg">
                      Bengaluru, Karnataka, India
                    </p>
                  </div>
                </motion.div>
              </div>
                
              {/* Contact button */}
              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => window.location.href = 'mailto:vikramshettyr4@gmail.com'}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white rounded-lg transition-all text-center font-medium shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 border border-blue-600/50 text-lg"
              >
                Send me an email
              </motion.button>
            </motion.div>
          </motion.div>
          
          {/* Social connections card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 lg:p-10 backdrop-blur-sm shadow-2xl border border-gray-700/50 w-full lg:w-2/5 overflow-hidden relative flex flex-col"
          >
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl" />
            
            <h3 className="text-xl font-semibold text-white mb-6">Connect with me</h3>
            
            <div className="grid grid-cols-2 gap-6 flex-grow">
              {[
                { 
                  icon: 'Github', 
                  name: 'GitHub',
                  href: 'https://github.com/Vikram-0401', 
                  ariaLabel: 'GitHub Profile', 
                  color: 'from-gray-700 to-gray-600',
                  textColor: 'text-gray-200'
                },
                { 
                  icon: 'Linkedin', 
                  name: 'LinkedIn',
                  href: 'https://www.linkedin.com/in/vikram-shetty-6827b3259/', 
                  ariaLabel: 'LinkedIn Profile', 
                  color: 'from-blue-700 to-blue-600',
                  textColor: 'text-blue-100'
                },
                { 
                  icon: 'Twitter', 
                  name: 'Twitter',
                  href: 'https://x.com/VikramS87249739?mx=2', 
                  ariaLabel: 'Twitter Profile', 
                  color: 'from-sky-700 to-sky-600',
                  textColor: 'text-sky-100'
                },
                { 
                  icon: 'custom', 
                  customIcon: <SiLeetcode className="w-5 h-5" />,
                  name: 'LeetCode',
                  href: 'https://leetcode.com/u/Vikram0401/', 
                  ariaLabel: 'LeetCode Profile', 
                  color: 'from-yellow-700 to-yellow-600',
                  textColor: 'text-yellow-100'
                }
              ].map(({ icon, customIcon, name, href, ariaLabel, color, textColor }, index) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={ariaLabel}
                  className={`bg-gradient-to-br ${color} p-4 rounded-lg flex flex-col items-center justify-center gap-3 hover:scale-105 transition-all duration-300 border border-white/10 shadow-lg ${textColor}`}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm">
                    {icon === 'custom' ? customIcon : <Icon name={icon} className="w-5 h-5" />}
                  </div>
                  <span className="font-medium">{name}</span>
                </motion.a>
              ))}
            </div>
            
            <p className="text-gray-400 text-center mt-6">
              Feel free to reach out on any platform!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;