import { motion } from 'framer-motion';
import { Mail, MessageSquare, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-white mb-6"
        >
          Get In Touch
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          Have a project in mind or want to discuss potential collaborations? I'm always open to new opportunities and challenges.
        </motion.p>
        
        <motion.div 
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="bg-gray-900/80 rounded-xl p-8 backdrop-blur-sm shadow-xl border border-gray-800 max-w-md mx-auto" // Center the card
>
  <div className="flex justify-center"> {/* Center the content */}
    <div className="space-y-8">
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
            <Mail className="w-6 h-6 text-blue-500" />
          </div>
          <div>
            <h3 className="text-gray-400 text-sm font-medium">Email</h3>
            <motion.a
              href="mailto:vikramshettyr4@gmail.com"
              className="text-white text-lg hover:text-blue-400 transition-colors"
              whileHover={{ x: 5 }}
            >
              vikramshettyr4@gmail.com
            </motion.a>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
            <MessageSquare className="w-6 h-6 text-blue-500" />
          </div>
          <div>
            <h3 className="text-gray-400 text-sm font-medium">Let's chat</h3>
            <p className="text-white text-lg">
              I'm available for freelance projects and full-time positions.
            </p>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-gray-400 mb-4 text-center">Connect with me</h3>
        <div className="flex items-center justify-center space-x-5">
          {[
            { Icon: Github, href: 'https://github.com/Vikram-0401', ariaLabel: 'GitHub Profile' },
            { Icon: Linkedin, href: 'https://www.linkedin.com/in/vikram-shetty-6827b3259/', ariaLabel: 'LinkedIn Profile' },
            { Icon: Twitter, href: 'https://x.com/VikramS87249739?mx=2', ariaLabel: 'Twitter Profile' },
            { Icon: Mail, href: 'mailto:vikramshettyr4@gmail.com', ariaLabel: 'Email Contact' }
          ].map(({ Icon, href, ariaLabel }) => (
            <motion.a
              key={href}
              href={href}
              aria-label={ariaLabel}
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-500/20 transition-all"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon className="w-5 h-5" />
            </motion.a>
          ))}
        </div>
      </div>
      
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => window.location.href = 'mailto:vikramshettyr4@gmail.com'}
        className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all text-center"
      >
        Send me an email
      </motion.button>
    </div>
  </div>
</motion.div>
      </div>
    </section>
  );
};

export default Contact;