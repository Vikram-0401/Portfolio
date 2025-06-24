import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import Icon from './ui/Icon';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(18, 18, 18, 0)', 'rgba(10, 10, 20, 0.95)']
  );

  const navItems = [
    { name: 'Home', path: '/', icon: 'Home' },
    { name: 'About', path: '/about', icon: 'User' },
    { name: 'Skills', path: '/skills', icon: 'Lightbulb' },
    { name: 'Projects', path: '/projects', icon: 'Layers' },
    { name: 'Contact', path: '/contact', icon: 'Mail' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isMenuOpen && !target.closest('.mobile-menu-container')) {
        setIsMenuOpen(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);
  
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <motion.nav
      style={{ backgroundColor }}
      className={`fixed w-full z-50 backdrop-blur-md py-4 transition-all duration-300 ${
        isScrolled ? 'shadow-lg shadow-blue-900/20' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between">
          {/* Decorative border container */}
          <div className={`absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-600/20 via-purple-500/10 to-blue-600/20 p-[1px] pointer-events-none transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}>
            <div className="h-full w-full rounded-xl sm:rounded-2xl bg-gray-900/70 backdrop-blur-sm" />
          </div>

          <div className="relative flex items-center justify-between w-full px-4 sm:px-6 py-2.5">
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/" className="text-xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent flex items-center">
                Vikram <span className="hidden sm:inline font-semibold">&nbsp;R</span>
              </Link>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-2 lg:space-x-3">
                {navItems.map(({ name, path, icon }) => (
                  <motion.div key={name} whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                    <Link
                      to={path}
                      className={`relative flex items-center space-x-2 text-gray-300 hover:text-white px-4 py-2.5 text-sm font-medium rounded-lg transition-all ${
                        isActive(path)
                          ? 'text-white bg-gradient-to-r from-blue-600/20 to-blue-500/10 border-b-2 border-blue-500 shadow-sm shadow-blue-500/10' 
                          : 'border-b-2 border-transparent hover:bg-gray-800/30'
                      }`}
                    >
                      <Icon name={icon as any} className="w-4 h-4" />
                      <span>{name}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 md:hidden mobile-menu-container">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMenuOpen(!isMenuOpen);
                }}
                className="text-gray-300 p-2.5 rounded-lg bg-gray-800/70 border border-gray-700/50 hover:bg-gray-700/50 hover:border-gray-600/50 transition-colors"
                aria-label="Toggle mobile menu"
              >
                {isMenuOpen ? <Icon name="X" className="w-5 h-5" /> : <Icon name="Menu" className="w-5 h-5" />}
              </motion.button>
            </div>

            <motion.a
              href="https://drive.google.com/file/d/1D-w95SekxUQfDYlUwUP7ulLqBimgN8vi/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center px-5 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium text-sm hover:from-blue-700 hover:to-blue-600 transition-all border border-blue-400/30 shadow-md shadow-blue-600/20"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <Icon name="Download" className="w-4 h-4 mr-2" />
              Resume
            </motion.a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mobile-menu md:hidden mobile-menu-container overflow-hidden"
          >
            <div className="mx-4 mt-3 mb-4 p-4 rounded-xl bg-gray-800/90 backdrop-blur-md border border-gray-700/50 shadow-lg shadow-blue-900/20">
              {navItems.map(({ name, path, icon }) => (
                <motion.div key={name} whileTap={{ scale: 0.98 }}>
                  <Link
                    to={path}
                    className={`flex items-center justify-between px-5 py-3 mb-2 rounded-lg text-sm font-medium transition-all ${
                      isActive(path)
                        ? 'text-white bg-gradient-to-r from-blue-600/20 to-blue-500/10 border-l-2 border-blue-500 shadow-sm shadow-blue-500/10'
                        : 'text-gray-300 hover:text-white hover:bg-gray-700/50 border-l-2 border-transparent'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="flex items-center space-x-3">
                      <Icon name={icon as any} className="w-4 h-4 text-blue-400" />
                      <span>{name}</span>
                    </div>
                    {isActive(path) && (
                      <Icon name="ArrowRight" className="w-3.5 h-3.5 text-blue-400" />
                    )}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                href="https://drive.usercontent.google.com/u/0/uc?id=1gL3FjUjvzZMgdKBluiiJ9HPWkjxABSet&export=download"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 mt-4 px-5 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium text-sm shadow-md shadow-blue-900/20 border border-blue-400/30"
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsMenuOpen(false)}
              >
                <Icon name="Download" className="w-4 h-4" />
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;