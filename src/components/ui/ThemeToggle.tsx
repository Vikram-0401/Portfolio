import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../hooks/useTheme';
import Icon from './Icon';

const ThemeToggle = () => {
  const { theme, resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('system');
    } else {
      setTheme('light');
    }
  };

  const getIcon = () => {
    if (theme === 'system') {
      return 'Monitor';
    }
    return resolvedTheme === 'dark' ? 'Moon' : 'Sun';
  };

  const getLabel = () => {
    if (theme === 'system') {
      return 'System';
    }
    return resolvedTheme === 'dark' ? 'Dark' : 'Light';
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light'} mode`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={getIcon()}
          initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="flex items-center"
        >
          <Icon name={getIcon() as any} className="w-4 h-4" />
        </motion.div>
      </AnimatePresence>
      
      <span className="text-sm font-medium hidden sm:inline">
        {getLabel()}
      </span>
      
      {/* Theme indicator dots */}
      <div className="flex gap-1">
        {['light', 'dark', 'system'].map((t, index) => (
          <motion.div
            key={t}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              theme === t 
                ? 'bg-sky-500 dark:bg-sky-400' 
                : 'bg-slate-300 dark:bg-slate-600'
            }`}
            animate={{
              scale: theme === t ? 1.2 : 1,
              opacity: theme === t ? 1 : 0.5,
            }}
          />
        ))}
      </div>
    </motion.button>
  );
};

export default ThemeToggle;