import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon, { type IconName } from './ui/Icon';

type NavItem = {
  name: string;
  path: string;
  icon: IconName;
};

const navItems: NavItem[] = [
  { name: 'Home', path: '/', icon: 'Home' },
  { name: 'About', path: '/about', icon: 'User' },
  { name: 'Skills', path: '/skills', icon: 'BrainCircuit' },
  { name: 'Projects', path: '/projects', icon: 'Layers' },
  { name: 'Contact', path: '/contact', icon: 'Mail' },
];

const resumeUrl = 'https://drive.google.com/file/d/1OhUq_LDYs4hYyOWbfQTfUPJR4EMZHAjj/view?usp=sharing';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <motion.nav
      className="fixed inset-x-0 top-0 z-50 px-3 py-3"
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-24 bg-black shadow-[0_18px_60px_rgba(0,0,0,0.75)]" />
      <div
        className={`relative z-10 mx-auto flex h-16 w-full max-w-7xl items-center justify-between rounded-full border px-3 pl-5 backdrop-blur-2xl transition-all duration-300 sm:px-4 ${
          hasScrolled
            ? 'border-white/[0.16] bg-black/[0.96] shadow-[0_18px_60px_rgba(0,0,0,0.45)]'
            : 'border-white/[0.14] bg-black/[0.92]'
        }`}
      >
        <Link to="/" className="group flex min-w-0 items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/[0.15] bg-white/[0.08]">
            <img src="/images/vikram-avatar.svg" alt="Vikram R avatar" className="h-8 w-8 rounded-full object-cover" />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-black leading-tight text-white sm:text-base">Vikram R</span>
            <span className="hidden text-xs font-medium leading-tight text-slate-400 sm:block">AI/ML and full-stack developer</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.035] p-1 lg:flex">
          {navItems.map(({ name, path, icon }) => (
            <Link
              key={path}
              to={path}
              className={`relative flex h-10 items-center gap-2 rounded-full px-4 text-sm font-semibold transition-colors ${
                isActive(path) ? 'text-black' : 'text-slate-300 hover:text-white'
              }`}
            >
              {isActive(path) && (
                <motion.span
                  layoutId="active-nav-pill"
                  className="absolute inset-0 rounded-full bg-white"
                  transition={{ type: 'spring', stiffness: 430, damping: 34 }}
                />
              )}
              <Icon name={icon} className="relative z-10 h-4 w-4" />
              <span className="relative z-10">{name}</span>
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">
            <Icon name="Download" className="h-4 w-4" />
            Resume
          </a>
          <Link to="/contact" className="btn btn-primary btn-sm">
            <Icon name="Send" className="h-4 w-4" />
            Hire me
          </Link>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.055] text-white md:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <Icon name={isMenuOpen ? 'X' : 'Menu'} className="h-5 w-5" />
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="mx-auto mt-3 w-full max-w-7xl overflow-hidden rounded-lg border border-white/[0.12] bg-black/[0.92] p-3 shadow-[0_24px_80px_rgba(0,0,0,0.65)] backdrop-blur-2xl md:hidden"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <div className="grid gap-1">
              {navItems.map(({ name, path, icon }) => (
                <Link
                  key={path}
                  to={path}
                  className={`flex min-h-12 items-center justify-between rounded-lg px-4 py-3 text-sm font-semibold ${
                    isActive(path) ? 'bg-white text-black' : 'text-slate-300 hover:bg-white/[0.08] hover:text-white'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <Icon name={icon} className="h-4 w-4" />
                    {name}
                  </span>
                  <Icon name="ArrowRight" className="h-4 w-4" />
                </Link>
              ))}
            </div>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">
                <Icon name="Download" className="h-4 w-4" />
                Resume
              </a>
              <Link to="/contact" className="btn btn-primary btn-sm">
                <Icon name="Send" className="h-4 w-4" />
                Hire me
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
