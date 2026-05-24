import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from './ui/Icon';

type ProjectsProps = {
  isStandalone?: boolean;
};

const projects = [
  {
    title: 'Modernizing Laboratory Assessment',
    description: 'Digital lab assessment platform with code execution, structured evaluation, and real-time feedback for practical learning.',
    image: '/images/Modernizing_lab_SS.png',
    tech: ['React', 'Express', 'MongoDB', 'Piston API', 'Monaco Editor', 'Node.js'],
    github: 'https://github.com/Vikram-0401/Modernizing-Laboratory-Assessment.git',
    demo: 'https://labtests.vercel.app/',
    accent: '#7dd3fc',
  },
  {
    title: 'Crop Disease Detection',
    description: 'AI-powered crop diagnosis workflow that analyzes leaf images and helps surface early disease insights for farmers.',
    image: '/images/crop_disease_detection.png',
    tech: ['Python', 'TensorFlow', 'Keras', 'NumPy', 'Pandas', 'OpenCV'],
    github: 'https://github.com/Vikram-0401/Crop_disease_detection',
    demo: 'https://krishikavacha.streamlit.app/',
    accent: '#34d399',
  },
  {
    title: 'HiveMind',
    description: 'Modern blogging platform with a clean reading experience and serverless architecture tuned for smooth publishing.',
    image: '/images/HiveMind.png',
    tech: ['React', 'TypeScript', 'Hono', 'Cloudflare Workers', 'PostgreSQL'],
    github: 'https://github.com/Vikram-0401/HiveMind',
    accent: '#f59e0b',
  },
  {
    title: 'PayEase',
    description: 'Money transfer app with simple flows, authentication, and a clear transaction experience for everyday payments.',
    image: '/images/EasePay.png',
    tech: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/Vikram-0401/EasePay',
    accent: '#fda4af',
  },
  {
    title: 'AI Mock Interviewer',
    description: 'Interview prep platform with adaptive questions, AI-powered feedback, and a focused practice experience.',
    image: '/images/Mock_interview_ss.png',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'OpenAI', 'Shadcn UI'],
    github: 'https://github.com/Vikram-0401/AI_Mock_Interviewer',
    accent: '#c4b5fd',
  },
  {
    title: 'Code Review Assistant',
    description: 'Developer-focused review helper for catching code quality issues and improving feedback loops.',
    image: '/images/Code_review_ss.png',
    tech: ['React', 'AI', 'TypeScript', 'Developer Tools'],
    github: 'https://github.com/Vikram-0401/Code-RAI',
    accent: '#67e8f9',
  },
];

const Projects = ({ isStandalone = false }: ProjectsProps) => {
  return (
    <section id="projects" className={`section-shell scroll-mt-24 ${isStandalone ? 'pt-32' : ''}`}>
      <div className="section-inner">
        <motion.div
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <div>
            <span className="section-kicker">
              <Icon name="Layers" className="h-4 w-4 text-amber-200" />
              Featured work
            </span>
            <h2 className="section-title max-w-4xl">Projects with working depth.</h2>
            <p className="section-copy">
              A selection of full-stack and AI/ML builds with real interfaces, deployment targets, and practical product thinking.
            </p>
          </div>
          <Link to="/contact" className="btn btn-secondary w-full md:w-auto">
            <Icon name="MessageSquare" className="h-4 w-4" />
            Discuss a build
          </Link>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className={`interactive-card ${index === 0 ? 'lg:col-span-2' : ''}`}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06, duration: 0.55 }}
              viewport={{ once: true, margin: '-80px' }}
              whileHover={{ y: -6 }}
            >
              <div className={`relative grid gap-0 ${index === 0 ? 'lg:grid-cols-[1.1fr_0.9fr]' : ''}`}>
                <div className={`${index === 0 ? 'h-72 lg:h-full' : 'h-64'} relative overflow-hidden`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/[0.86] via-black/[0.24] to-transparent" />
                  <div className="absolute left-4 top-4 rounded-full border border-white/[0.16] bg-black/60 px-3 py-1 text-xs font-bold text-white backdrop-blur-xl">
                    0{index + 1}
                  </div>
                </div>

                <div className="relative flex min-h-[20rem] flex-col p-5 sm:p-6">
                  <div className="mb-4 flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: project.accent }} />
                    <span className="text-xs font-bold uppercase text-slate-500">Case study</span>
                  </div>
                  <h3 className="text-2xl font-black leading-tight text-white">{project.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{project.description}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 text-xs font-bold text-slate-300">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-col gap-3 pt-6 sm:flex-row">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">
                      <Icon name="Github" className="h-4 w-4" />
                      Code
                    </a>
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                        <Icon name="ArrowUpRight" className="h-4 w-4" />
                        Live demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="mt-12 flex flex-col items-start justify-between gap-5 border-y border-white/10 py-8 md:flex-row md:items-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <div>
            <h3 className="text-2xl font-black text-white">Have a project idea?</h3>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-400">
              I am happy to collaborate on clean web apps, AI prototypes, and developer tools with a clear product goal.
            </p>
          </div>
          <Link to="/contact" className="btn btn-primary">
            <Icon name="Send" className="h-4 w-4" />
            Start a conversation
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
