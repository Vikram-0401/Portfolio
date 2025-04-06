import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform built with React and Node.js',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0',
    tech: ['Next.js', 'TypeScript', 'Supabase'],
    github: '#',
    demo: '#',
  },
  {
    title: 'AI Chat Interface',
    description: 'Modern chat interface with AI-powered responses',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31',
    tech: ['React', 'Python', 'OpenAI'],
    github: '#',
    demo: '#',
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
      className="group relative"
    >
      {/* Animated border gradient */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-blue-300 to-blue-500 rounded-xl opacity-0 group-hover:opacity-100 transition duration-500 group-hover:duration-200 animate-gradient-xy"></div>
      
      {/* Card content */}
      <div className="relative flex flex-col bg-gray-800 rounded-lg overflow-hidden">
        <div className="relative aspect-video overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-white mb-2">
            {project.title}
          </h3>
          <p className="text-gray-300 mb-4 flex-1">{project.description}</p>
          
          <div className="space-y-4">
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
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href={project.demo}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-lg bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition-colors"
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
            href="/projects"
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