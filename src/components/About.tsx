import { motion } from 'framer-motion';
import Icon from './ui/Icon';

type AboutProps = {
  isStandalone?: boolean;
};

const highlights = [
  {
    icon: 'GraduationCap' as const,
    label: 'Education',
    value: 'Computer Science undergraduate at Siddaganga Institute of Technology',
  },
  {
    icon: 'BrainCircuit' as const,
    label: 'Focus',
    value: 'AI, machine learning, data structures, and full-stack product development',
  },
  {
    icon: 'Code2' as const,
    label: 'Build Style',
    value: 'Practical systems with clean interfaces and strong problem-solving foundations',
  },
];

const hobbies = [
  {
    title: 'Cricket',
    image: '/icons/Cricket.jpg',
    description: 'Competitive energy and team rhythm.',
  },
  {
    title: 'Hiking',
    image: '/icons/Hiking.jpg',
    description: 'Fresh trails and long-focus thinking.',
  },
  {
    title: 'Drawing',
    image: '/icons/Drawing.jpg',
    description: 'Creative sketching and visual exploration.',
  },
  {
    title: 'Badminton',
    image: '/icons/Batminton.png',
    description: 'Fast rallies and sharp reflexes.',
  },
];

const About = ({ isStandalone = false }: AboutProps) => {
  return (
    <section id="about" className={`section-shell scroll-mt-24 ${isStandalone ? 'pt-32' : ''}`}>
      <div className="section-inner">
        <div className="grid items-start gap-12 lg:grid-cols-[0.92fr_1.08fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true, margin: '-80px' }}
            className="lg:sticky lg:top-28"
          >
            <span className="section-kicker">
              <Icon name="User" className="h-4 w-4 text-emerald-200" />
              About me
            </span>
            <h2 className="section-title">Builder with an AI-first edge.</h2>
            <p className="section-copy">
              I am Vikram, a developer who enjoys converting learning into shipped projects. My work sits between full-stack development, AI/ML experimentation, and data-structure driven problem solving.
            </p>

            <div className="mt-8 flex max-h-[34rem] items-center justify-center overflow-hidden rounded-lg border border-white/[0.12] bg-black/[0.45] p-3">
              <img src="/images/My_pic.jpg" alt="Vikram R profile" className="max-h-[32rem] w-full object-contain" />
            </div>
          </motion.div>

          <div className="space-y-5">
            {highlights.map((item, index) => (
              <motion.article
                key={item.label}
                className="interactive-card p-5 sm:p-6"
                initial={{ opacity: 0, x: 34 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.08, duration: 0.55 }}
                viewport={{ once: true, margin: '-80px' }}
                whileHover={{ y: -4 }}
              >
                <div className="relative flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-white/[0.12] bg-white/[0.055] text-cyan-100">
                    <Icon name={item.icon} className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase text-slate-500">{item.label}</p>
                    <p className="mt-1 text-lg font-semibold leading-7 text-white">{item.value}</p>
                  </div>
                </div>
              </motion.article>
            ))}

            <motion.div
              className="grid gap-5 pt-2 sm:grid-cols-2"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.65 }}
              viewport={{ once: true, margin: '-80px' }}
            >
              {hobbies.map((hobby) => (
                <article key={hobby.title} className="group overflow-hidden rounded-lg border border-white/[0.12] bg-white/[0.04]">
                  <div className="flex h-32 items-center justify-center bg-black/45 p-3 sm:h-36">
                    <img
                      src={hobby.image}
                      alt={hobby.title}
                      className="h-full w-full object-contain grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-black text-white">{hobby.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{hobby.description}</p>
                  </div>
                </article>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
