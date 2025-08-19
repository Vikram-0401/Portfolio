import { motion } from 'framer-motion';
import { useState } from 'react';
import Icon from './ui/Icon';

const projects = [
  {
    title: 'Modernizing Laboratory Assessment',
    description: 'Digital platform for lab assessments with real-time feedback. Features code execution and analytics for enhanced learning.',
    image: '/images/Modernizing_lab_SS.png',
    tech: ['React', 'Express', 'MongoDB', 'Piston Api', 'Monaco Editor', 'Node.js'],
    github: 'https://github.com/Vikram-0401/Modernizing-Laboratory-Assessment.git',
    demo: 'https://labtests.vercel.app/',
    color: '#0EA5E9'
  },
  {
    title: 'Crop Disease Detection',
    description: 'AI-powered system to detect crop diseases from leaf images, providing quick diagnosis to assist farmers in early intervention.',
    image: '/images/crop_disease_detection.png',
    tech: ['Python', 'TensorFlow', 'Keras', 'NumPy', 'Pandas', 'OpenCV'],
    github: 'https://github.com/Vikram-0401/Crop_disease_detection',
    demo: 'https://krishikavacha.streamlit.app/',
    color: '#16A34A'
  },
  {
    title: 'HiveMind',
    description: 'Modern blogging platform with clean interface. Serverless architecture for optimal performance.',
    image: '/images/HiveMind.png',
    tech: ['React', 'TypeScript', 'Hono', 'Cloudflare Workers', 'PostgreSQL'],
    github: 'https://github.com/Vikram-0401',
    demo: 'https://thinkhivemind.netlify.app/',
    color: '#059669'
  },
  {
    title: 'PayEase',
    description: 'Secure money transfer app with simple interface for quick and easy transactions.',
    image: '/images/EasePay.png',
    tech: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/Vikram-0401',
    demo: 'https://easepay.netlify.app/',
    color: '#F59E0B'
  },
  {
    title: 'AI Mock Interviewer',
    description: 'AI-powered interview prep platform with real-time feedback and adaptive questioning system.',
    image: '/images/Mock_interview_ss.png',
    tech: ['Next.js', 'TypeScript', 'Postgree', 'OpenAI', 'Shadcn UI'],
    github: 'https://github.com/Vikram-0401/Ai-Mock_Interviewer.git',
    demo: 'https://github.com/Vikram-0401/Ai-Mock_Interviewer.git',
    color: '#374151'
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
    color: string;
  };
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group h-full flex flex-col"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div 
        className="relative flex flex-col rounded-2xl overflow-hidden h-[420px] bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg transition-all duration-300"
        whileHover={{
          y: -8,
          boxShadow: `0 20px 40px ${project.color}20`,
          borderColor: project.color,
        }}
      >
        {/* Image Section */}
        <div className="relative aspect-[16/9] overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500"
            style={{
              transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            }}
          />
          
          {/* Overlay on hover */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Content Section */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Title */}
          <motion.h3 
            className="text-xl font-bold text-slate-900 dark:text-white mb-3 transition-colors duration-300"
            style={{ color: isHovered ? project.color : '' }}
          >
            {project.title}
          </motion.h3>
          
          {/* Description */}
          <p className="text-slate-700 dark:text-slate-400 text-sm leading-relaxed mb-4 flex-grow transition-colors duration-300">
            {project.description}
          </p>
          
          <div className="mt-auto space-y-4">
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, techIndex) => (
                <motion.span
                  key={tech}
                  className="px-3 py-1 rounded-full text-xs font-medium border border-slate-300 text-slate-700 bg-white dark:border-slate-700 dark:text-slate-200 dark:bg-slate-800 transition-all duration-300"
                  style={{
                    backgroundColor: isHovered ? `${project.color}10` : '',
                    borderColor: isHovered ? `${project.color}40` : '',
                    color: isHovered ? project.color : '',
                  }}
                  whileHover={{ 
                    scale: 1.05,
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + techIndex * 0.05 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
            
            {/* Action Buttons */}
            <div className="flex space-x-3">
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-3 rounded-xl border-2 transition-all duration-300 bg-white dark:bg-slate-800"
                style={{
                  borderColor: isHovered ? project.color : '',
                  color: isHovered ? project.color : '',
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                }}
                whileTap={{ scale: 0.95 }}
                aria-label={`View ${project.title} on GitHub`}
              >
                <Icon name="Github" className="w-5 h-5 text-zinc-900 dark:text-white" />
              </motion.a>
              {/* Only show Go Live/demo button for Modernizing Laboratory Assessment */}
              {project.title === 'Modernizing Laboratory Assessment' && (
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-3 rounded-xl border-2 transition-all duration-300"
                  style={{
                    borderColor: project.color,
                    backgroundColor: isHovered ? project.color : 'transparent',
                    color: isHovered ? 'white' : project.color,
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -2,
                  }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`View live demo of ${project.title}`}
                >
                  <Icon name="ExternalLink" className="w-5 h-5" />
                </motion.a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white transition-colors duration-300"
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            Featured Projects
          </motion.h2>
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-sky-500 to-emerald-500 mx-auto rounded-full mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <motion.p
            className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-lg transition-colors duration-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            A showcase of my latest work in web development, AI/ML, and innovative solutions
          </motion.p>
        </motion.div>
        {/* Project List - single column */}
        <div className="flex flex-col gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;