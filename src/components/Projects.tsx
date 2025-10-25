import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaJava, FaReact, FaDocker, FaServer } from 'react-icons/fa';
import { SiSpringboot, SiPostgresql, SiRedis, SiGo, SiNodedotjs, SiTypescript, SiAppwrite } from 'react-icons/si';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'Fault-Tolerant Distributed Banking System',
      description: 'A distributed, fault-tolerant transaction system using Go and Stable-Leader Paxos protocol. Maintained 100% system availability during failure of up to 40% of cluster nodes. Reduced network communication rounds by 50% and achieved zero RPO (Recovery Point Objective) for all transactions during leader failover.',
      image: '/api/placeholder/600/400',
      technologies: ['Go', 'Paxos Consensus', 'RPCs', 'Distributed Systems', 'Fault Tolerance'],
      icons: [<SiGo key="go" />, <FaServer key="server" />, <FaDocker key="docker" />],
      github: 'https://github.com/saketh023',
      demo: '#',
      featured: true
    },
    {
      title: 'Connectify Social Media Application',
      description: 'Full-stack social media platform featuring infinite scrolling, drag-and-drop photo uploads, and secure user authentication. Implemented real-time data synchronization achieving 20% faster form submission times. Boosted user retention by 30% through enhanced security measures and optimized user experience.',
      image: '/api/placeholder/600/400',
      technologies: ['React.js', 'Node.js', 'SQL', 'REST APIs', 'Appwrite'],
      icons: [<FaReact key="react" />, <SiNodedotjs key="node" />, <SiAppwrite key="appwrite" />],
      github: 'https://github.com/saketh023',
      demo: '#',
      featured: true
    },
    {
      title: 'ClearPath Accessible Healthcare App',
      description: 'Accessible full-stack healthcare application designed for individuals with limited vision, featuring multi-modal input capabilities and personalized health reminders. Fine-tuned LLaMa 3.1 to create a specialized AI health agent. Utilized React Markdown and Axios for formatted chatbot responses.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'TypeScript', 'LLaMa 3.1', 'REST APIs', 'AI/ML'],
      icons: [<FaReact key="react" />, <SiTypescript key="ts" />, <FaServer key="api" />],
      github: 'https://github.com/saketh023',
      demo: '#',
      featured: false
    },
    {
      title: 'GPU-Accelerated Spatial Analytics Pipeline',
      description: 'Built a high-performance pipeline using cuSpatial, cuDF and IBM Db2 to analyze 720K+ North American road geometries. Achieved 600× performance gain via haversine distance filtering and bounding box optimization. Automated data ingestion through shapefile preprocessing and WKT transformation.',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'cuSpatial', 'cuDF', 'IBM Db2', 'GeoPandas'],
      icons: [<FaServer key="gpu" />, <SiPostgresql key="db" />, <FaDocker key="docker" />],
      github: 'https://github.com/saketh023',
      demo: '#',
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-primary-50/30 via-white to-accent-50/30">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4"
            >
              Featured <span className="gradient-text">Projects</span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={inView ? { width: '100px' } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className={`material-card-elevated overflow-hidden ${
                  project.featured ? 'lg:col-span-2' : ''
                }`}
              >
                <div className="relative">
                  <div className="h-48 bg-gradient-to-br from-primary-400 via-accent-400 to-secondary-400 flex items-center justify-center">
                    <div className="flex gap-6 text-5xl text-white opacity-80">
                      {project.icons.map((icon, idx) => (
                        <div key={idx}>{icon}</div>
                      ))}
                    </div>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-secondary-500 to-secondary-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-material">
                      ⭐ Featured
                    </div>
                  )}
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-neutral-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="chip"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-material"
                    >
                      <FaGithub />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 border-2 border-primary-500 text-primary-600 hover:bg-primary-500 hover:text-white px-6 py-3 rounded-full font-medium transition-all duration-300"
                    >
                      <FaExternalLinkAlt />
                      Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-12"
          >
            <motion.a
              href="https://github.com/sakethvadlamudi"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 material-button-primary px-8 py-4"
            >
              <FaGithub />
              View All Projects on GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
