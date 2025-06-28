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
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.95)']
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
      style={{ backgroundColor }}
      className={`fixed w-full z-50 backdrop-blur-md py-4 transition-all duration-300 ${
        isScrolled ? 'shadow-lg border-b border-slate-200' : ''
      }`}
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
                      className={`relative flex items-center space-x-2 px-4 py-2.5 text-sm font-medium rounded-lg transition-all ${
                        isActive(path)
                          ? 'text-slate-900 bg-slate-100 border-b-2 border-sky-500' 
                          : 'text-slate-600 hover:text-slate-900 border-b-2 border-transparent hover:bg-slate-50'
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
                className="text-slate-600 p-2.5 rounded-lg bg-slate-100 border border-slate-200 hover:bg-slate-200 transition-colors"
                aria-label="Toggle mobile menu"
              >
                {isMenuOpen ? <Icon name="X" className="w-5 h-5" /> : <Icon name="Menu" className="w-5 h-5" />}
              </motion.button>
            </div>

            <motion.a
              href="https://drive.google.com/file/d/1D-w95SekxUQfDYlUwUP7ulLqBimgN8vi/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center px-5 py-2 rounded-lg bg-slate-900 text-white font-medium text-sm hover:bg-slate-800 transition-all border shadow-md"
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
            <div className="mx-4 mt-3 mb-4 p-4 rounded-xl bg-white shadow-lg border border-slate-200">
              {navItems.map(({ name, path, icon }) => (
                <motion.div key={name} whileTap={{ scale: 0.98 }}>
                  <Link
                    to={path}
                    className={`flex items-center justify-between px-5 py-3 mb-2 rounded-lg text-sm font-medium transition-all ${
                      isActive(path)
                        ? 'text-slate-900 bg-slate-100 border-l-2 border-sky-500'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50 border-l-2 border-transparent'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="flex items-center space-x-3">
                      <Icon name={icon as any} className="w-4 h-4 text-sky-600" />
                      <span>{name}</span>
                    </div>
                    {isActive(path) && (
                      <Icon name="ArrowRight" className="w-3.5 h-3.5 text-sky-600" />
                    )}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                href="https://drive.usercontent.google.com/u/0/uc?id=1gL3FjUjvzZMgdKBluiiJ9HPWkjxABSet&export=download"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 mt-4 px-5 py-3 rounded-lg bg-slate-900 text-white font-medium text-sm shadow-md"
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