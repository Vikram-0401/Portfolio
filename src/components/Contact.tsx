import { motion } from 'framer-motion';
import { useState } from 'react';
import Icon from './ui/Icon';
import { SiLeetcode } from 'react-icons/si';

const Contact = () => {
  const [hoveredSocial, setHoveredSocial] = useState<number | null>(null);

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-slate-900"
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            Get In Touch
          </motion.h2>
          
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-sky-500 to-emerald-500 mx-auto rounded-full mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          
          <motion.p 
            className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Have a project in mind or want to discuss potential collaborations? 
            I'm always open to new opportunities and challenges.
          </motion.p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row items-stretch gap-12">
          {/* Contact Information Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-3/5"
          >
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-slate-200 h-full">
              <div className="space-y-8">
                {/* Contact Methods */}
                <div className="space-y-6">
                  <motion.div 
                    className="flex items-start space-x-6 group"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div 
                      className="w-14 h-14 bg-sky-100 rounded-xl flex items-center justify-center border border-sky-200 flex-shrink-0"
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: '#0EA5E9',
                        borderColor: '#0EA5E9',
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon name="Mail" className="w-6 h-6 text-sky-600 group-hover:text-white transition-colors duration-200" />
                    </motion.div>
                    <div className="min-w-0">
                      <h3 className="text-slate-500 text-sm font-medium mb-2">
                        Email
                      </h3>
                      <motion.a
                        href="mailto:vikramshettyr4@gmail.com"
                        className="text-slate-900 text-xl hover:text-sky-600 flex items-center gap-2 transition-colors duration-300"
                        whileHover={{ scale: 1.02 }}
                      >
                        vikramshettyr4@gmail.com
                        <motion.div
                          initial={{ opacity: 0, x: -5 }}
                          whileHover={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Icon name="ArrowRight" className="w-4 h-4 flex-shrink-0" />
                        </motion.div>
                      </motion.a>
                    </div>
                  </motion.div>
        
                  <motion.div 
                    className="flex items-start space-x-6 group"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div 
                      className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center border border-emerald-200 flex-shrink-0"
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: '#059669',
                        borderColor: '#059669',
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon name="MessageSquare" className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors duration-200" />
                    </motion.div>
                    <div className="min-w-0">
                      <h3 className="text-slate-500 text-sm font-medium mb-2">
                        Let's chat
                      </h3>
                      <p className="text-slate-900 text-xl">
                        I'm available for freelance projects and full-time positions.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-start space-x-6 group"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div 
                      className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center border border-amber-200 flex-shrink-0"
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: '#F59E0B',
                        borderColor: '#F59E0B',
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon name="MapPin" className="w-6 h-6 text-amber-600 group-hover:text-white transition-colors duration-200" />
                    </motion.div>
                    <div className="min-w-0">
                      <h3 className="text-slate-500 text-sm font-medium mb-2">
                        Location
                      </h3>
                      <p className="text-slate-900 text-xl">
                        Bengaluru, Karnataka, India
                      </p>
                    </div>
                  </motion.div>
                </div>
                  
                {/* Contact Button */}
                <motion.button
                  onClick={() => window.location.href = 'mailto:vikramshettyr4@gmail.com'}
                  className="w-full py-4 bg-slate-900 text-white rounded-xl transition-all text-center font-semibold shadow-lg text-lg relative overflow-hidden group"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 10px 25px rgba(15, 23, 42, 0.2)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">Send me an email</span>
                  
                  <motion.div
                    className="absolute inset-0 bg-sky-600"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </div>
            </div>
          </motion.div>
          
          {/* Social Connections Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-2/5"
          >
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg border border-slate-200 h-full flex flex-col">
              <motion.h3 
                className="text-2xl font-bold text-slate-900 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Connect with me
              </motion.h3>
              
              <div className="grid grid-cols-2 gap-4 flex-grow">
                {[
                  { 
                    icon: 'Github', 
                    name: 'GitHub',
                    href: 'https://github.com/Vikram-0401', 
                    color: '#374151',
                  },
                  { 
                    icon: 'Linkedin', 
                    name: 'LinkedIn',
                    href: 'https://www.linkedin.com/in/vikram-shetty-6827b3259/', 
                    color: '#0EA5E9',
                  },
                  { 
                    icon: 'Twitter', 
                    name: 'Twitter',
                    href: 'https://x.com/VikramS87249739?mx=2', 
                    color: '#0EA5E9',
                  },
                  { 
                    icon: 'custom', 
                    customIcon: <SiLeetcode className="w-6 h-6" />,
                    name: 'LeetCode',
                    href: 'https://leetcode.com/u/Vikram0401/', 
                    color: '#F59E0B',
                  }
                ].map(({ icon, customIcon, name, href, color }, index) => (
                  <motion.a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-6 rounded-xl flex flex-col items-center justify-center gap-4 border border-slate-200 bg-slate-50 relative overflow-hidden group transition-all duration-300"
                    style={{
                      borderColor: hoveredSocial === index ? color : '#E2E8F0',
                      backgroundColor: hoveredSocial === index ? `${color}10` : '#F8FAFC',
                    }}
                    whileHover={{ 
                      y: -4,
                      scale: 1.02,
                      boxShadow: `0 10px 25px ${color}20`,
                    }}
                    whileTap={{ scale: 0.98 }}
                    onHoverStart={() => setHoveredSocial(index)}
                    onHoverEnd={() => setHoveredSocial(null)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <motion.div 
                      className="p-3 rounded-xl bg-white border-2 transition-all duration-300"
                      style={{ 
                        borderColor: color,
                        color: color,
                      }}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5,
                      }}
                    >
                      {icon === 'custom' ? customIcon : <Icon name={icon} className="w-6 h-6" />}
                    </motion.div>
                    
                    <span 
                      className="font-semibold text-lg transition-colors duration-300"
                      style={{ color: hoveredSocial === index ? color : '#374151' }}
                    >
                      {name}
                    </span>
                  </motion.a>
                ))}
              </div>
              
              <motion.p 
                className="text-slate-500 text-center mt-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                Feel free to reach out on any platform!
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;