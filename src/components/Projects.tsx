import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'Modernizing Laboratory Assessment',
    description: 'A comprehensive digital platform transforming traditional laboratory assessments with real-time feedback and analytics. Features intuitive interface with code execution capabilities for enhanced learning experience.',
    image: '/images/Modernizing_lab_SS.png',
    tech: ['React', 'Express', 'MongoDB', 'Piston Api', 'Monaco Editor', 'Node.js'],
    github: 'https://github.com/Vikram-0401/Modernizing-Laboratory-Assessment.git',
    demo: 'https://labtests.vercel.app/',
  },
  {
    title: 'AI Mock Interviewer',
    description: 'An AI-powered platform transforming interview preparation with real-time feedback and analytics. Features adaptive questioning system with performance tracking for enhanced interview readiness.',
    image: '/images/Mock_interview_ss.png',
    tech: ['Next.js', 'TypeScript', 'Postgree', 'OpenAI', 'Shadcn UI'],
    github: 'https://github.com/Vikram-0401/Ai-Mock_Interviewer.git',
    demo: 'your-live-demo-link',
  },
  {
    title: 'Code Review Assistant',
    description: 'An AI-powered code analysis platform providing automated review feedback and analytics. Features intelligent issue detection with optimization suggestions for enhanced code quality.',
    image: '/images/Code_review_ss.png',
    tech: ['React', 'Express', 'OpenAI', 'TailwindCSS', 'Shadcn UI'],
    github: 'https://github.com/Vikram-0401/Code-RAI.git',
    demo: 'your-live-demo-link',
  },
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
      <div className="relative flex flex-col bg-gray-800 rounded-lg overflow-hidden h-full border border-transparent transition-all duration-300 group-hover:border-blue-500 group-hover:shadow-lg group-hover:shadow-blue-500/20">
        <div className="relative aspect-video overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
        </div>

        <div className="relative p-6 flex-1 flex flex-col">
          {/* Fixed height for title to maintain consistency */}
          <div className="h-16 mb-2">
            <h3 className="text-xl font-bold text-white">
              {project.title}
            </h3>
          </div>
          
          {/* Fixed height for description to maintain consistency */}
          <div className="h-32 mb-4">
            <p className="text-gray-300">{project.description}</p>
          </div>
          
          <div className="mt-auto space-y-4">
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm border border-blue-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex space-x-4">
              <motion.a
                href={project.github}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-lg bg-gray-700/50 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                aria-label={`View ${project.title} on GitHub`}
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href={project.demo}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-lg bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition-colors"
                aria-label={`View live demo of ${project.title}`}
              >
                <ExternalLink className="w-5 h-5" />
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
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-white mb-12"
        >
          Featured Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

  

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-12 text-center"
      >
        <motion.a
          href="https://github.com/Vikram-0401?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View All Projects
          <motion.span
            className="ml-2"
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <ArrowRight className="w-5 h-5" />
          </motion.span>
        </motion.a>
      </motion.div>

      </div>
    </section>
  );
};

export default Projects;