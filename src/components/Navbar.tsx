import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Download, Home, Layers, Lightbulb, Mail, Menu, X, User } from 'lucide-react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(18, 18, 18, 0)', 'rgba(18, 18, 18, 0.8)']
  );

  const navItems = [
    { name: 'Home', icon: Home },
    { name: 'About', icon: User },
    { name: 'Skills', icon: Lightbulb },
    { name: 'Projects', icon: Layers },
    { name: 'Contact', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        if (
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      style={{ backgroundColor }}
      className="fixed w-full z-50 backdrop-blur-sm py-4"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between">
          {/* Decorative border container */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-transparent to-blue-500/20 p-[1px] pointer-events-none">
            <div className="h-full w-full rounded-2xl bg-gray-900/50 backdrop-blur-sm" />
          </div>

          <div className="relative flex items-center justify-between w-full px-6 py-2">
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                Vikram R
              </span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                {navItems.map(({ name, icon: Icon }) => (
                  <motion.a
                    key={name}
                    href={`#${name.toLowerCase()}`}
                    className={`relative flex items-center space-x-2 text-gray-300 hover:text-white px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                      activeSection === name.toLowerCase() ? 'text-white bg-blue-500/10' : ''
                    }`}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{name}</span>
                    {activeSection === name.toLowerCase() && (
                      <motion.div
                        className="absolute bottom-0 left-0 h-0.5 bg-blue-500 w-full"
                        layoutId="underline"
                      />
                    )}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>

            <motion.a
              href="https://drive.google.com/file/d/1gL3FjUjvzZMgdKBluiiJ9HPWkjxABSet/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center px-4 py-2 rounded-full bg-blue-500 text-white font-medium text-sm hover:bg-blue-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </motion.a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="mobile-menu md:hidden"
        >
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navItems.map(({ name, icon: Icon }) => (
              <motion.a
                key={name}
                href={`#${name.toLowerCase()}`}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium ${
                  activeSection === name.toLowerCase()
                    ? 'text-white bg-blue-500'
                    : 'text-gray-300 hover:text-white hover:bg-blue-500'
                }`}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(false)}
              >
                <Icon className="w-5 h-5" />
                <span>{name}</span>
              </motion.a>
            ))}
             <motion.a
              href="https://drive.usercontent.google.com/u/0/uc?id=1gL3FjUjvzZMgdKBluiiJ9HPWkjxABSet&export=download"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-3 py-2 rounded-md bg-blue-500 text-white font-medium"
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5 mr-2" />
              Resume
            </motion.a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;