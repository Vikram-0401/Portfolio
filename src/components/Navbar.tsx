import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import Icon from './ui/Icon';
import ThemeToggle from './ui/ThemeToggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();
  const backgroundOpacity = useTransform(
    scrollY,
    [0, 100],
    [0, 0.95]
  );
  
  const shadowOpacity = useTransform(
    scrollY,
    [0, 100],
    [0, 0.1]
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
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isMenuOpen && !target.closest('.mobile-menu-container')) {
        setIsMenuOpen(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);
  
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
      className="fixed w-full z-50 py-4 transition-all duration-300"
      style={{
        background: `rgba(var(--background-start-rgb), ${backgroundOpacity.get()})`,
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        boxShadow: `0 4px 30px rgba(0, 0, 0, ${shadowOpacity.get()})`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between">
          <div className="relative flex items-center justify-between w-full px-4 sm:px-6 py-2.5">
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link to="/" className="text-xl font-bold bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent flex items-center">
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
                      className={`relative flex items-center space-x-2 px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 ${
                        isActive(path)
                          ? 'text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800 border-b-2 border-sky-500' 
                          : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border-b-2 border-transparent hover:bg-slate-50 dark:hover:bg-slate-800'
                      }`}
                    >
                      <Icon name={icon as any} className="w-4 h-4" />
                      <span>{name}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Theme Toggle & Mobile Menu */}
            <div className="flex items-center gap-3">
              <ThemeToggle />
              
              <div className="flex items-center gap-2 md:hidden mobile-menu-container">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsMenuOpen(!isMenuOpen);
                  }}
                  className="text-slate-600 dark:text-slate-400 p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-300"
                  aria-label="Toggle mobile menu"
                >
                  {isMenuOpen ? <Icon name="X" className="w-5 h-5" /> : <Icon name="Menu" className="w-5 h-5" />}
                </motion.button>
              </div>

              <motion.a
                href="https://drive.google.com/file/d/1VrMO42repA_DyURy6mF8tdw0aGOPsq-h/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center px-5 py-2 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium text-sm hover:bg-slate-800 dark:hover:bg-slate-100 transition-all duration-300 border shadow-md"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <Icon name="Download" className="w-4 h-4 mr-2" />
                Resume
              </motion.a>
            </div>
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
            <div className="mx-4 mt-3 mb-4 p-4 rounded-xl bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700 transition-colors duration-300">
              {navItems.map(({ name, path, icon }) => (
                <motion.div key={name} whileTap={{ scale: 0.98 }}>
                  <Link
                    to={path}
                    className={`flex items-center justify-between px-5 py-3 mb-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      isActive(path)
                        ? 'text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-700 border-l-2 border-sky-500'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-700 border-l-2 border-transparent'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="flex items-center space-x-3">
                      <Icon name={icon as any} className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                      <span>{name}</span>
                    </div>
                    {isActive(path) && (
                      <Icon name="ArrowRight" className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                    )}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                href="https://drive.google.com/file/d/1VrMO42repA_DyURy6mF8tdw0aGOPsq-h/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 mt-4 px-5 py-3 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium text-sm shadow-md transition-colors duration-300"
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