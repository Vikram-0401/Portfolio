import { motion } from 'framer-motion';
import { useState } from 'react';
import Icon from './ui/Icon';
import { SiLeetcode } from 'react-icons/si';

const Contact = () => {
  const [hoveredSocial, setHoveredSocial] = useState<number | null>(null);

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
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
            className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white transition-colors duration-300"
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
            className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-lg leading-relaxed transition-colors duration-300"
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
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 lg:p-12 shadow-lg border border-slate-200 dark:border-slate-700 h-full transition-colors duration-300">
              <div className="space-y-8">
                {/* Contact Methods */}
                <div className="space-y-6">
                  <motion.div 
                    className="flex items-start space-x-6 group"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div 
                      className="w-14 h-14 bg-sky-100 dark:bg-sky-900/50 rounded-xl flex items-center justify-center border border-sky-200 dark:border-sky-700 flex-shrink-0 transition-colors duration-300"
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: '#0EA5E9',
                        borderColor: '#0EA5E9',
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon name="Mail" className="w-6 h-6 text-sky-600 dark:text-sky-400 group-hover:text-white transition-colors duration-200" />
                    </motion.div>
                    <div className="min-w-0">
                      <h3 className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-2 transition-colors duration-300">
                        Email
                      </h3>
                      <motion.a
                        href="mailto:vikramshettyr4@gmail.com"
                        className="text-slate-900 dark:text-white text-xl hover:text-sky-600 dark:hover:text-sky-400 flex items-center gap-2 transition-colors duration-300"
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
                      className="w-14 h-14 bg-emerald-100 dark:bg-emerald-900/50 rounded-xl flex items-center justify-center border border-emerald-200 dark:border-emerald-700 flex-shrink-0 transition-colors duration-300"
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: '#059669',
                        borderColor: '#059669',
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon name="MessageSquare" className="w-6 h-6 text-emerald-600 dark:text-emerald-400 group-hover:text-white transition-colors duration-200" />
                    </motion.div>
                    <div className="min-w-0">
                      <h3 className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-2 transition-colors duration-300">
                        Let's chat
                      </h3>
                      <p className="text-slate-900 dark:text-white text-xl transition-colors duration-300">
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
                      className="w-14 h-14 bg-amber-100 dark:bg-amber-900/50 rounded-xl flex items-center justify-center border border-amber-200 dark:border-amber-700 flex-shrink-0 transition-colors duration-300"
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: '#F59E0B',
                        borderColor: '#F59E0B',
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon name="MapPin" className="w-6 h-6 text-amber-600 dark:text-amber-400 group-hover:text-white transition-colors duration-200" />
                    </motion.div>
                    <div className="min-w-0">
                      <h3 className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-2 transition-colors duration-300">
                        Location
                      </h3>
                      <p className="text-slate-900 dark:text-white text-xl transition-colors duration-300">
                        Bengaluru, Karnataka, India
                      </p>
                    </div>
                  </motion.div>
                </div>
                  
                {/* Contact Button */}
                <motion.button
                  onClick={() => window.location.href = 'mailto:vikramshettyr4@gmail.com'}
                  className="w-full py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl transition-all text-center font-semibold shadow-lg text-lg relative overflow-hidden group duration-300"
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
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 lg:p-10 shadow-lg border border-slate-200 dark:border-slate-700 h-full flex flex-col transition-colors duration-300">
              <motion.h3 
                className="text-2xl font-bold text-slate-900 dark:text-white mb-8 transition-colors duration-300"
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
                    color: '#6B7280',
                    darkColor: '#F8FAFC', // Light color for dark mode
                    bgLight: '#F8FAFC',
                    bgDark: '#374151',
                  },
                  { 
                    icon: 'Linkedin', 
                    name: 'LinkedIn',
                    href: 'https://www.linkedin.com/in/vikram-shetty-6827b3259/', 
                    color: '#0EA5E9',
                    darkColor: '#0EA5E9',
                    bgLight: '#EFF6FF',
                    bgDark: '#1E3A8A',
                  },
                  { 
                    icon: 'Twitter', 
                    name: 'Twitter',
                    href: 'https://x.com/VikramS87249739?mx=2', 
                    color: '#0EA5E9',
                    darkColor: '#0EA5E9',
                    bgLight: '#EFF6FF',
                    bgDark: '#1E3A8A',
                  },
                  { 
                    icon: 'custom', 
                    customIcon: <SiLeetcode className="w-6 h-6" />,
                    name: 'LeetCode',
                    href: 'https://leetcode.com/u/Vikram0401/', 
                    color: '#F59E0B',
                    darkColor: '#F59E0B',
                    bgLight: '#FFFBEB',
                    bgDark: '#92400E',
                  }
                ].map(({ icon, customIcon, name, href, color, darkColor, bgLight, bgDark }, index) => (
                  <motion.a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-6 rounded-xl flex flex-col items-center justify-center gap-4 border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 relative overflow-hidden group transition-all duration-300 hover:shadow-lg"
                    style={{
                      borderColor: hoveredSocial === index 
                        ? (name === 'GitHub' ? '#F8FAFC' : color)
                        : undefined,
                      backgroundColor: hoveredSocial === index 
                        ? (name === 'GitHub' 
                          ? 'rgba(248, 250, 252, 0.1)' 
                          : `${color}10`) 
                        : undefined,
                    }}
                    whileHover={{ 
                      y: -4,
                      scale: 1.02,
                      boxShadow: name === 'GitHub' 
                        ? '0 10px 25px rgba(248, 250, 252, 0.1)' 
                        : `0 10px 25px ${color}20`,
                    }}
                    whileTap={{ scale: 0.98 }}
                    onHoverStart={() => setHoveredSocial(index)}
                    onHoverEnd={() => setHoveredSocial(null)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <motion.div 
                      className="p-3 rounded-xl border-2 transition-all duration-300"
                      style={{ 
                        borderColor: name === 'GitHub' 
                          ? (hoveredSocial === index ? '#F8FAFC' : '#6B7280')
                          : color,
                        backgroundColor: name === 'GitHub'
                          ? (hoveredSocial === index ? '#374151' : '#F8FAFC')
                          : (hoveredSocial === index ? color : 'white'),
                        color: name === 'GitHub'
                          ? (hoveredSocial === index ? '#F8FAFC' : '#374151')
                          : (hoveredSocial === index ? 'white' : color),
                      }}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5,
                      }}
                    >
                      {icon === 'custom' ? (
                        <div style={{ 
                          color: name === 'GitHub'
                            ? (hoveredSocial === index ? '#F8FAFC' : '#374151')
                            : (hoveredSocial === index ? 'white' : color)
                        }}>
                          {customIcon}
                        </div>
                      ) : (
                        <Icon 
                          name={icon} 
                          className="w-6 h-6" 
                          style={{ 
                            color: name === 'GitHub'
                              ? (hoveredSocial === index ? '#F8FAFC' : '#374151')
                              : (hoveredSocial === index ? 'white' : color)
                          }}
                        />
                      )}
                    </motion.div>
                    
                    <span 
                      className="font-semibold text-lg transition-colors duration-300 text-slate-700 dark:text-slate-200"
                      style={{ 
                        color: hoveredSocial === index 
                          ? (name === 'GitHub' ? '#F8FAFC' : color)
                          : undefined 
                      }}
                    >
                      {name}
                    </span>

                    {/* Enhanced hover effect for GitHub */}
                    {name === 'GitHub' && hoveredSocial === index && (
                      <motion.div
                        className="absolute inset-0 rounded-xl pointer-events-none"
                        style={{
                          background: 'linear-gradient(135deg, rgba(248, 250, 252, 0.1), rgba(107, 114, 128, 0.1))',
                          border: '1px solid rgba(248, 250, 252, 0.2)',
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.a>
                ))}
              </div>
              
              <motion.p 
                className="text-slate-500 dark:text-slate-400 text-center mt-8 transition-colors duration-300"
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