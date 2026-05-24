import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { useNavigate } from 'react-router-dom';
import { SiLeetcode } from 'react-icons/si';
import LaserFlow from './LaserFlow';
import Icon from './ui/Icon';

const socialLinks = [
  { icon: 'Github' as const, href: 'https://github.com/Vikram-0401', label: 'GitHub' },
  { icon: 'Linkedin' as const, href: 'https://www.linkedin.com/in/vikram-r-6827b3259/', label: 'LinkedIn' },
  { icon: 'Twitter' as const, href: 'https://x.com/VikramS87249739?mx=2', label: 'Twitter' },
  {
    href: 'https://leetcode.com/u/Vikram0401/',
    label: 'LeetCode',
    customIcon: <SiLeetcode className="h-5 w-5" />,
  },
];

const Hero = () => {
  const navigate = useNavigate();

  const goTo = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden px-4 pb-20 pt-28 sm:pt-32">
      <div className="absolute inset-0 opacity-45">
        <LaserFlow
          color="#7dd3fc"
          horizontalBeamOffset={0.02}
          verticalBeamOffset={0.1}
          flowSpeed={0.26}
          fogIntensity={0.34}
          wispIntensity={2.7}
          mouseTiltStrength={0.018}
        />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_40%,transparent_0%,rgba(0,0,0,0.46)_48%,rgba(0,0,0,0.92)_100%)]" />

      <div className="section-inner relative z-10 grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <motion.div
            className="section-kicker"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <Icon name="Sparkles" className="h-4 w-4 text-cyan-200" />
            Open to impactful engineering work
          </motion.div>

          <h1 className="mt-6 text-[3.15rem] font-black leading-[0.95] tracking-normal text-white sm:text-7xl lg:text-8xl">
            Vikram R
            <span className="gradient-text mt-3 block text-[2.15rem] leading-tight sm:text-5xl lg:text-6xl">
              <TypeAnimation
                sequence={['Full-stack Developer', 1800, 'AI/ML Builder', 1800, 'Problem Solver', 1800]}
                wrapper="span"
                speed={42}
                repeat={Infinity}
              />
            </span>
          </h1>

          <motion.p
            className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.55 }}
          >
            Computer Science undergraduate focused on AI, machine learning, and modern web systems. I like building products that feel fast, useful, and clean all the way down to the code.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38, duration: 0.55 }}
          >
            <button type="button" onClick={() => goTo('/contact')} className="btn btn-primary">
              <Icon name="Send" className="h-4 w-4" />
              Get in touch
            </button>
            <button type="button" onClick={() => goTo('/projects')} className="btn btn-secondary">
              <Icon name="Layers" className="h-4 w-4" />
              View projects
            </button>
          </motion.div>

          <motion.div
            className="mt-8 flex flex-wrap gap-2"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.55 }}
          >
            {socialLinks.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.055] text-slate-300 hover:border-cyan-200/40 hover:text-white"
                aria-label={social.label}
                title={social.label}
              >
                {'customIcon' in social ? social.customIcon : <Icon name={social.icon} className="h-5 w-5" />}
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="hidden min-h-[560px] lg:block lg:min-h-[650px]"
          initial={{ opacity: 0, x: 42 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.18, duration: 0.8, ease: 'easeOut' }}
          aria-hidden="true"
        />
      </div>
    </section>
  );
};

export default Hero;
