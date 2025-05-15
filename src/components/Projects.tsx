import { motion } from 'framer-motion';
import Icon from './ui/Icon';

const projects = [
  {
    title: 'Modernizing Laboratory Assessment',
    description: 'Digital platform for lab assessments with real-time feedback. Features code execution and analytics for enhanced learning.',
    image: '/images/Modernizing_lab_SS.png',
    tech: ['React', 'Express', 'MongoDB', 'Piston Api', 'Monaco Editor', 'Node.js'],
    github: 'https://github.com/Vikram-0401/Modernizing-Laboratory-Assessment.git',
    demo: 'https://labtests.vercel.app/',
  },
  {
    title: 'HiveMind',
    description: 'Modern blogging platform with clean interface. Serverless architecture for optimal performance.',
    image: '/images/HiveMind.png',
    tech: ['React', 'TypeScript', 'Hono', 'Cloudflare Workers', 'Prisma', 'PostgreSQL'],
    github: 'https://github.com/Vikram-0401',
    demo: 'https://thinkhivemind.netlify.app/',
  },
  {
    title: 'PayEase',
    description: 'Secure money transfer app with simple interface for quick and easy transactions.',
    image: '/images/EasePay.png',
    tech: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/Vikram-0401',
    demo: 'https://easepay.netlify.app/',
  },
  {
    title: 'AI Mock Interviewer',
    description: 'AI-powered interview prep platform with real-time feedback and adaptive questioning system.',
    image: '/images/Mock_interview_ss.png',
    tech: ['Next.js', 'TypeScript', 'Postgree', 'OpenAI', 'Shadcn UI'],
    github: 'https://github.com/Vikram-0401/Ai-Mock_Interviewer.git',
    demo: 'https://github.com/Vikram-0401/Ai-Mock_Interviewer.git',
  }
];

interface ProjectCardProps {  
  project: {
    title: string;
    description: string;
    image: string;
    tech: string[];
    github: string;
    demo: string;
  };
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group h-full flex flex-col"
    >
      {/* Card content */}
          <div className="relative flex flex-col bg-gray-800 rounded-lg overflow-hidden h-[350px] border border-transparent transition-all duration-300 group-hover:border-blue-500 group-hover:shadow-lg group-hover:shadow-blue-500/20">
             <div className="relative aspect-[16/9] overflow-hidden max-h-[180px]">
              <img
               src={project.image}
               alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
        </div>

        <div className="relative p-4 flex-1 flex flex-col">
          {/* Title */}
          <div className="mb-2">
            <h3 className="text-lg font-bold text-white truncate">
              {project.title}
            </h3>
          </div>
          
          {/* Description */}
          <div className="mb-3">
            <p className="text-sm text-gray-300 line-clamp-3">{project.description}</p>
          </div>
          
          <div className="mt-auto space-y-3">
          <div className="flex flex-wrap gap-1">
    {project.tech.map((tech) => (
      <span
        key={tech}
        className="px-1.5 py-0.5 bg-blue-500/10 text-blue-400 rounded-full text-[10px] border border-blue-500/20"
      >
        {tech}
      </span>
    ))}
  </div>
            
            <div className="flex space-x-3">
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-1.5 rounded-lg bg-gray-700/50 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                aria-label={`View ${project.title} on GitHub`}
              >
                <Icon name="Github" className="w-4 h-4" />
              </motion.a>
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-1.5 rounded-lg bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition-colors"
                aria-label={`View live demo of ${project.title}`}
              >
                <Icon name="ExternalLink" className="w-4 h-4" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-28 mt-[-100px] pt-[100px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-white mb-12 pt-6"
        >
          Featured Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <ProjectCard project={projects[0]} index={0} />
          <ProjectCard project={projects[1]} index={1} />
          <ProjectCard project={projects[2]} index={2} />
          <ProjectCard project={projects[3]} index={3} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-10 text-center"
        >
          <motion.a
            href="https://github.com/Vikram-0401?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2.5 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition-colors text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
            <motion.span
              className="ml-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Icon name="ArrowRight" className="w-4 h-4" />
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;