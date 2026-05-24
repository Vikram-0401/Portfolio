import { motion } from 'framer-motion';
import Icon, { type IconName } from './ui/Icon';

type SkillsProps = {
  isStandalone?: boolean;
};

const skillCategories: Array<{
  title: string;
  icon: IconName;
  accent: string;
  description: string;
  skills: string[];
}> = [
  {
    title: 'Full-stack Development',
    icon: 'Code2',
    accent: '#7dd3fc',
    description: 'Interfaces, APIs, databases, auth, deployment, and production-focused user flows.',
    skills: ['React', 'Next.js', 'TypeScript', 'Express', 'Hono', 'MongoDB', 'PostgreSQL', 'Prisma', 'Firebase', 'Tailwind CSS'],
  },
  {
    title: 'AI and Data',
    icon: 'BrainCircuit',
    accent: '#34d399',
    description: 'Applied machine learning, Python data workflows, and practical model-powered products.',
    skills: ['Python', 'TensorFlow', 'Keras', 'NumPy', 'Pandas', 'OpenCV', 'AI Workflows', 'Data Processing'],
  },
  {
    title: 'Systems and Tools',
    icon: 'Wrench',
    accent: '#f59e0b',
    description: 'Developer tooling, version control, containers, testing APIs, and cloud-ready delivery.',
    skills: ['Git', 'GitHub', 'Docker', 'Postman', 'VS Code', 'Cloudflare Workers', 'WebSockets', 'Figma'],
  },
  {
    title: 'Programming Foundations',
    icon: 'Cpu',
    accent: '#fda4af',
    description: 'Strong fundamentals in algorithms, data structures, and language-level problem solving.',
    skills: ['C++', 'C', 'JavaScript', 'HTML', 'CSS', 'DSA', 'Problem Solving', 'Competitive Programming'],
  },
];

const Skills = ({ isStandalone = false }: SkillsProps) => {
  return (
    <section id="skills" className={`section-shell scroll-mt-24 ${isStandalone ? 'pt-32' : ''}`}>
      <div className="section-inner">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <span className="section-kicker">
            <Icon name="Sparkles" className="h-4 w-4 text-cyan-200" />
            Technical expertise
          </span>
          <h2 className="section-title">A stack built for real products.</h2>
          <p className="section-copy mx-auto">
            From polished frontends to APIs, ML experiments, and deployment workflows, these are the tools I use to turn ideas into working software.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {skillCategories.map((category, index) => (
            <motion.article
              key={category.title}
              className="interactive-card p-5 sm:p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.55 }}
              viewport={{ once: true, margin: '-80px' }}
              whileHover={{ y: -5 }}
            >
              <div className="relative">
                <div className="flex items-start gap-4">
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border bg-black/[0.45]"
                    style={{ color: category.accent, borderColor: `${category.accent}55` }}
                  >
                    <Icon name={category.icon} className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white">{category.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{category.description}</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex min-h-9 items-center rounded-full border border-white/10 bg-white/[0.045] px-3 text-sm font-semibold text-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
