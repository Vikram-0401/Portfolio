import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import Icon from './ui/Icon';

const projects = [
  {
    title: 'Modernizing Laboratory Assessment',
    description: 'Digital platform for lab assessments with real-time feedback. Features code execution and analytics for enhanced learning.',
    image: '/images/Modernizing_lab_SS.png',
    tech: ['React', 'Express', 'MongoDB', 'Piston Api', 'Monaco Editor', 'Node.js'],
    github: 'https://github.com/Vikram-0401/Modernizing-Laboratory-Assessment.git',
    demo: 'https://labtests.vercel.app/',
    color: '#3B82F6'
  },
  {
    title: 'HiveMind',
    description: 'Modern blogging platform with clean interface. Serverless architecture for optimal performance.',
    image: '/images/HiveMind.png',
    tech: ['React', 'TypeScript', 'Hono', 'Cloudflare Workers', 'Prisma', 'PostgreSQL'],
    github: 'https://github.com/Vikram-0401',
    demo: 'https://thinkhivemind.netlify.app/',
    color: '#8B5CF6'
  },
  {
    title: 'PayEase',
    description: 'Secure money transfer app with simple interface for quick and easy transactions.',
    image: '/images/EasePay.png',
    tech: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/Vikram-0401',
    demo: 'https://easepay.netlify.app/',
    color: '#10B981'
  },
  {
    title: 'AI Mock Interviewer',
    description: 'AI-powered interview prep platform with real-time feedback and adaptive questioning system.',
    image: '/images/Mock_interview_ss.png',
    tech: ['Next.js', 'TypeScript', 'Postgree', 'OpenAI', 'Shadcn UI'],
    github: 'https://github.com/Vikram-0401/Ai-Mock_Interviewer.git',
    demo: 'https://github.com/Vikram-0401/Ai-Mock_Interviewer.git',
    color: '#F97316'
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setMousePosition({ x, y });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
      className="group h-full flex flex-col"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div 
        className="relative flex flex-col rounded-2xl overflow-hidden h-[400px] border-2 border-transparent backdrop-blur-sm"
        style={{
          background: `linear-gradient(135deg, rgba(15, 23, 42, 0.9), rgba(30, 41, 59, 0.8))`,
          transform: isHovered 
            ? `perspective(1000px) rotateX(${mousePosition.y * 0.05}deg) rotateY(${mousePosition.x * 0.05}deg) translateZ(20px)`
            : 'perspective(1000px) rotateX(5deg)',
          boxShadow: isHovered 
            ? `0 25px 50px ${project.color}40, inset 0 1px 0 rgba(255, 255, 255, 0.1)`
            : '0 10px 30px rgba(0, 0, 0, 0.3)',
        }}
        whileHover={{
          borderColor: project.color,
          transition: { duration: 0.3 }
        }}
      >
        {/* Enhanced Image Section with 3D Effects */}
        <div className="relative aspect-[16/9] overflow-hidden max-h-[200px]">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            style={{
              transform: isHovered ? 'scale(1.1)' : 'scale(1)',
            }}
            transition={{ duration: 0.5 }}
          />
          
          {/* Holographic Overlay */}
          <motion.div 
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${project.color}20, transparent, ${project.color}10)`,
              opacity: isHovered ? 0.6 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Floating Particles */}
          {isHovered && Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-2 h-2 rounded-full"
              style={{
                backgroundColor: project.color,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                boxShadow: `0 0 10px ${project.color}`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>

        {/* Enhanced Content Section */}
        <div className="relative p-6 flex-1 flex flex-col">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            {Array.from({ length: 15 }).map((_, i) => (
              <motion.div
                key={`bg-pattern-${i}`}
                className="absolute w-1 h-1 rounded-full"
                style={{
                  backgroundColor: project.color,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                }}
              />
            ))}
          </div>

          {/* Title with 3D Effect */}
          <motion.div className="mb-3 relative z-10">
            <motion.h3 
              className="text-xl font-bold text-white"
              style={{
                textShadow: isHovered ? `0 0 20px ${project.color}80` : 'none',
              }}
              whileHover={{ scale: 1.05 }}
            >
              {project.title}
            </motion.h3>
          </motion.div>
          
          {/* Description */}
          <motion.div className="mb-4 relative z-10">
            <motion.p 
              className="text-sm text-gray-300 leading-relaxed"
              whileHover={{ color: '#f1f5f9' }}
            >
              {project.description}
            </motion.p>
          </motion.div>
          
          <div className="mt-auto space-y-4 relative z-10">
            {/* Enhanced Tech Stack */}
            <motion.div 
              className="flex flex-wrap gap-2"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 }
                }
              }}
              initial="hidden"
              whileInView="visible"
            >
              {project.tech.map((tech, techIndex) => (
                <motion.span
                  key={tech}
                  className="px-3 py-1 rounded-full text-xs font-medium border"
                  style={{
                    backgroundColor: `${project.color}15`,
                    borderColor: `${project.color}40`,
                    color: project.color,
                  }}
                  variants={{
                    hidden: { opacity: 0, scale: 0 },
                    visible: { opacity: 1, scale: 1 }
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    backgroundColor: `${project.color}25`,
                    borderColor: `${project.color}60`,
                    boxShadow: `0 0 15px ${project.color}40`,
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
            
            {/* Enhanced Action Buttons */}
            <div className="flex space-x-4">
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-3 rounded-xl border-2 transition-all"
                style={{
                  borderColor: `${project.color}40`,
                  backgroundColor: `${project.color}10`,
                }}
                whileHover={{ 
                  scale: 1.1,
                  borderColor: `${project.color}80`,
                  backgroundColor: `${project.color}20`,
                  boxShadow: `0 10px 25px ${project.color}40`,
                  rotateY: 15,
                }}
                whileTap={{ scale: 0.95 }}
                aria-label={`View ${project.title} on GitHub`}
              >
                <Icon name="Github" className="w-5 h-5" style={{ color: project.color }} />
              </motion.a>
              
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-3 rounded-xl border-2 transition-all"
                style={{
                  borderColor: `${project.color}60`,
                  backgroundColor: `${project.color}20`,
                }}
                whileHover={{ 
                  scale: 1.1,
                  borderColor: project.color,
                  backgroundColor: `${project.color}30`,
                  boxShadow: `0 10px 25px ${project.color}50`,
                  rotateY: -15,
                }}
                whileTap={{ scale: 0.95 }}
                aria-label={`View live demo of ${project.title}`}
              >
                <Icon name="ExternalLink" className="w-5 h-5" style={{ color: project.color }} />
              </motion.a>
            </div>
          </div>

          {/* Glow Effect on Hover */}
          <motion.div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x + 50}% ${mousePosition.y + 50}%, ${project.color}20, transparent)`,
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32 mt-[-100px] pt-[100px] relative overflow-hidden">
      {/* Enhanced 3D Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Geometric Shapes */}
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={`bg-shape-${i}`}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              background: `linear-gradient(135deg, ${['#3B82F6', '#8B5CF6', '#10B981', '#F97316'][Math.floor(Math.random() * 4)]}20, transparent)`,
              borderRadius: Math.random() > 0.5 ? '50%' : '8px',
              filter: 'blur(10px)',
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 30 - 15, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent"
            style={{
              filter: 'drop-shadow(0 0 30px rgba(59, 130, 246, 0.3))',
            }}
            whileHover={{
              scale: 1.05,
              filter: 'drop-shadow(0 0 40px rgba(59, 130, 246, 0.5))',
            }}
          >
            Featured Projects
          </motion.h2>
          
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 mx-auto rounded-full mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          
          <motion.p
            className="text-gray-400 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            A showcase of my latest work in web development, AI/ML, and innovative solutions
          </motion.p>
        </motion.div>
        
        {/* Enhanced Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Enhanced CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="https://github.com/Vikram-0401?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 text-white rounded-full font-bold text-lg relative overflow-hidden group"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center">
              View All Projects
              <motion.span
                className="ml-3"
                animate={{ x: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Icon name="ArrowRight" className="w-5 h-5" />
              </motion.span>
            </span>
            
            {/* Animated Background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600 via-emerald-600 to-blue-600"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.5 }}
            />
            
            {/* Floating Particles */}
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={`cta-particle-${i}`}
                className="absolute w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;