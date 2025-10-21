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
    color: '#ffffff'
  },
  {
    title: 'Crop Disease Detection',
    description: 'AI-powered system to detect crop diseases from leaf images, providing quick diagnosis to assist farmers in early intervention.',
    image: '/images/crop_disease_detection.png',
    tech: ['Python', 'TensorFlow', 'Keras', 'NumPy', 'Pandas', 'OpenCV'],
    github: 'https://github.com/Vikram-0401/Crop_disease_detection',
    demo: 'https://krishikavacha.streamlit.app/',
    color: '#e5e5e5'
  },
  {
    title: 'HiveMind',
    description: 'Modern blogging platform with clean interface. Serverless architecture for optimal performance.',
    image: '/images/HiveMind.png',
    tech: ['React', 'TypeScript', 'Hono', 'Cloudflare Workers', 'PostgreSQL'],
    github: 'https://github.com/Vikram-0401',
    demo: 'https://thinkhivemind.netlify.app/',
    color: '#d4d4d4'
  },
  {
    title: 'PayEase',
    description: 'Secure money transfer app with simple interface for quick and easy transactions.',
    image: '/images/EasePay.png',
    tech: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/Vikram-0401',
    demo: 'https://easepay.netlify.app/',
    color: '#a3a3a3'
  },
  {
    title: 'AI Mock Interviewer',
    description: 'AI-powered interview prep platform with real-time feedback and adaptive questioning system.',
    image: '/images/Mock_interview_ss.png',
    tech: ['Next.js', 'TypeScript', 'Postgree', 'OpenAI', 'Shadcn UI'],
    github: 'https://github.com/Vikram-0401/Ai-Mock_Interviewer.git',
    demo: 'https://github.com/Vikram-0401/Ai-Mock_Interviewer.git',
    color: '#737373',
    accentColor: '#525252'
  }
];

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            Featured Projects
          </motion.h2>
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-gray-400 to-white mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-slate-400 mt-6 max-w-3xl mx-auto"
          >
            Explore my portfolio of innovative projects that showcase my skills in full-stack development, AI/ML, and problem-solving.
          </motion.p>
        </motion.div>

        {/* Projects - vertical list */}
        <div className="flex flex-col items-center gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative w-full max-w-4xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              {/* Project Card */}
              <motion.div
                className="bg-black/50 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 group-hover:shadow-2xl"
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  borderColor: project.accentColor || project.color,
                  boxShadow: `0 20px 40px ${project.accentColor || project.color}20`,
                }}
                style={{
                  borderColor: hoveredProject === index ? (project.accentColor || project.color) : undefined,
                }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Project Title Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 
                      className="text-xl font-bold mb-2 transition-colors duration-300"
                      style={{ 
                        color: hoveredProject === index ? (project.accentColor || project.color) : '#ffffff' 
                      }}
                    >
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <p className="text-slate-400 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 rounded-full text-xs font-medium border border-white/20 text-slate-300 bg-black/30 transition-all duration-300"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: index * 0.1 + techIndex * 0.05 
                        }}
                        whileHover={{
                          scale: 1.05,
                          borderColor: project.color,
                          color: project.color,
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-white/20 text-slate-300 bg-black/30 transition-all duration-300 hover:border-white/40 hover:text-white"
                      whileHover={{ 
                        scale: 1.05,
                        borderColor: project.color,
                        color: project.color,
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon name="Github" className="w-4 h-4" />
                      <span className="text-sm font-medium">Code</span>
                    </motion.a>

                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-gray-700 to-gray-500 text-white font-medium transition-all duration-300 hover:from-gray-600 hover:to-gray-400"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Icon name="ExternalLink" className="w-4 h-4" />
                        <span className="text-sm">Demo</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-black/30 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Interested in collaborating?
            </h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              I'm always excited to work on new projects and explore innovative solutions. 
              Let's discuss how we can bring your ideas to life.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-gray-700 to-gray-500 text-white font-medium transition-all duration-300 hover:from-gray-600 hover:to-gray-400"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon name="Mail" className="w-5 h-5" />
              Get in Touch
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;