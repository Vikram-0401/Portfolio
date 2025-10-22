import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import Icon from './ui/Icon';
import StarBorder from './StarBorder';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();
  const backgroundOpacity = useTransform(scrollY, [0, 100], [0, 0.85]);
  const shadowOpacity = useTransform(scrollY, [0, 100], [0, 0.15]);

  const navItems = [
    { name: 'Home', path: '/', icon: 'Home' },
    { name: 'About', path: '/about', icon: 'User' },
    { name: 'Skills', path: '/skills', icon: 'Lightbulb' },
    { name: 'Projects', path: '/projects', icon: 'Layers' },
    { name: 'Contact', path: '/contact', icon: 'Mail' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === path;
    return location.pathname.startsWith(path);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  return (
    <motion.nav
      className="fixed w-full z-50 py-4 transition-all duration-300"
      style={{
        background: `rgba(0,0,0,${backgroundOpacity.get()})`,
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        boxShadow: `0 4px 30px rgba(0, 0, 0, ${shadowOpacity.get()})`,
      }}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="relative flex items-center justify-between">
          <div className="relative flex items-center justify-between w-full px-2 sm:px-4 py-2 sm:py-2.5">
            <motion.div className="flex items-center" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link to="/" className="text-lg sm:text-xl font-bold bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent flex items-center">
                Vikram <span className="hidden sm:inline font-semibold">&nbsp;R</span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-3">
              <div className="flex items-center space-x-1 xl:space-x-3">
                {navItems.map(({ name, path, icon }) => (
                  <motion.div key={name} whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                    <Link
                      to={path}
                      className={`relative flex items-center space-x-1 xl:space-x-2 px-2 xl:px-4 py-2 xl:py-2.5 text-xs xl:text-sm font-medium rounded-lg transition-all duration-300 ${
                        isActive(path)
                          ? 'text-white'
                          : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      <Icon name={icon as any} className="w-3 h-3 xl:w-4 xl:h-4" />
                      <span className="hidden xl:inline">{name}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              {/* Resume Button with StarBorder Effect */}
              <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                <StarBorder
                  as="a"
                  href="https://drive.google.com/file/d/1OhUq_LDYs4hYyOWbfQTfUPJR4EMZHAjj/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-button"
                  color="white"
                  speed="4s"
                  thickness={1}
                >
                  <div className="flex items-center space-x-1 xl:space-x-2">
                    <Icon name="Download" className="w-3 h-3 xl:w-4 xl:h-4" />
                    <span className="font-medium text-xs xl:text-sm">Resume</span>
                  </div>
                </StarBorder>
              </motion.div>
            </div>

            {/* Tablet Navigation */}
            <div className="hidden md:flex lg:hidden items-center space-x-2">
              <div className="flex items-center space-x-2">
                {navItems.slice(0, 3).map(({ name, path, icon }) => (
                  <motion.div key={name} whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                    <Link
                      to={path}
                      className={`relative flex items-center space-x-1 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                        isActive(path)
                          ? 'text-white'
                          : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      <Icon name={icon as any} className="w-4 h-4" />
                      <span>{name}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              {/* Resume Button for Tablet */}
              <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                <StarBorder
                  as="a"
                  href="https://drive.google.com/file/d/1OhUq_LDYs4hYyOWbfQTfUPJR4EMZHAjj/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-button"
                  color="white"
                  speed="4s"
                  thickness={1}
                >
                  <div className="flex items-center space-x-2">
                    <Icon name="Download" className="w-4 h-4" />
                    <span className="font-medium text-sm">Resume</span>
                  </div>
                </StarBorder>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 md:hidden">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={(e) => { e.stopPropagation(); setIsMenuOpen(!isMenuOpen); }}
                className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors duration-200"
                aria-label="Toggle mobile menu"
              >
                <Icon name={isMenuOpen ? 'X' : 'Menu'} className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mobile-menu md:hidden mobile-menu-container"
          >
            <div className="mx-3 sm:mx-4 mt-3 mb-4 p-3 sm:p-4 rounded-xl bg-black/80 backdrop-blur-lg shadow-lg border border-white/20 max-h-[80vh] overflow-y-auto">
              {navItems.map(({ name, path, icon }) => (
                <motion.div key={name} whileTap={{ scale: 0.98 }}>
                  <Link
                    to={path}
                    className={`flex items-center justify-between px-4 sm:px-5 py-3 mb-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      isActive(path)
                        ? 'text-white'
                        : 'text-slate-300 hover:text-white'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="flex items-center space-x-3">
                      <Icon name={icon as any} className="w-4 h-4 text-white" />
                      <span>{name}</span>
                    </div>
                    {isActive(path) && (
                      <Icon name="ArrowRight" className="w-3.5 h-3.5 text-white" />
                    )}
                  </Link>
                </motion.div>
              ))}
              
              {/* Resume Button for Mobile */}
              <motion.div whileTap={{ scale: 0.98 }}>
                <StarBorder
                  as="a"
                  href="https://drive.google.com/file/d/1OhUq_LDYs4hYyOWbfQTfUPJR4EMZHAjj/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-button"
                  color="white"
                  speed="4s"
                  thickness={1}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Icon name="Download" className="w-4 h-4" />
                      <span className="font-medium">Resume</span>
                    </div>
                    <Icon name="ExternalLink" className="w-3.5 h-3.5" />
                  </div>
                </StarBorder>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;