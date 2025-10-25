import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaJava, 
  FaPython,
  FaReact, 
  FaNodeJs, 
  FaDocker, 
  FaAws, 
  FaGitAlt,
  FaDatabase,
  FaCloud,
  FaServer
} from 'react-icons/fa';
import { 
  SiSpringboot, 
  SiKubernetes, 
  SiMongodb, 
  SiPostgresql, 
  SiRedis, 
  SiTypescript, 
  SiJavascript,
  SiGo,
  SiOracle,
  SiMicrosoftsqlserver,
  SiAngular,
  SiApachekafka,
  SiJenkins,
  SiMysql,
  SiGooglecloud,
  SiMicrosoftazure
} from 'react-icons/si';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <FaServer className="w-8 h-8" />,
      skills: [
        { name: 'Java', icon: <FaJava className="w-10 h-10" />, color: 'from-orange-500 to-red-600' },
        { name: 'Python', icon: <FaPython className="w-10 h-10" />, color: 'from-blue-500 to-yellow-500' },
        { name: 'Go', icon: <SiGo className="w-10 h-10" />, color: 'from-cyan-400 to-blue-600' },
        { name: 'JavaScript', icon: <SiJavascript className="w-10 h-10" />, color: 'from-yellow-400 to-yellow-600' },
        { name: 'TypeScript', icon: <SiTypescript className="w-10 h-10" />, color: 'from-blue-600 to-blue-800' },
        { name: 'SQL', icon: <FaDatabase className="w-10 h-10" />, color: 'from-indigo-500 to-purple-600' },
      ]
    },
    {
      title: 'Web Technologies & Frameworks',
      icon: <FaReact className="w-8 h-8" />,
      skills: [
        { name: 'Spring Boot', icon: <SiSpringboot className="w-10 h-10" />, color: 'from-green-500 to-green-700' },
        { name: 'React.js', icon: <FaReact className="w-10 h-10" />, color: 'from-cyan-400 to-blue-600' },
        { name: 'Angular', icon: <SiAngular className="w-10 h-10" />, color: 'from-red-600 to-red-800' },
        { name: 'Node.js', icon: <FaNodeJs className="w-10 h-10" />, color: 'from-green-600 to-green-800' },
        { name: 'Apache Kafka', icon: <SiApachekafka className="w-10 h-10" />, color: 'from-gray-800 to-black' },
        { name: 'REST APIs', icon: <FaServer className="w-10 h-10" />, color: 'from-purple-500 to-pink-600' },
      ]
    },
    {
      title: 'Databases & Storage',
      icon: <FaDatabase className="w-8 h-8" />,
      skills: [
        { name: 'Oracle DB', icon: <SiOracle className="w-10 h-10" />, color: 'from-red-600 to-red-800' },
        { name: 'PostgreSQL', icon: <SiPostgresql className="w-10 h-10" />, color: 'from-blue-600 to-blue-800' },
        { name: 'MS SQL Server', icon: <SiMicrosoftsqlserver className="w-10 h-10" />, color: 'from-red-500 to-orange-600' },
        { name: 'MongoDB', icon: <SiMongodb className="w-10 h-10" />, color: 'from-green-500 to-green-700' },
        { name: 'MySQL', icon: <SiMysql className="w-10 h-10" />, color: 'from-blue-500 to-blue-700' },
        { name: 'Redis', icon: <SiRedis className="w-10 h-10" />, color: 'from-red-500 to-red-700' },
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: <FaCloud className="w-8 h-8" />,
      skills: [
        { name: 'AWS', icon: <FaAws className="w-10 h-10" />, color: 'from-orange-400 to-orange-600' },
        { name: 'Google Cloud', icon: <SiGooglecloud className="w-10 h-10" />, color: 'from-blue-500 to-red-500' },
        { name: 'Azure', icon: <SiMicrosoftazure className="w-10 h-10" />, color: 'from-blue-600 to-blue-800' },
        { name: 'Docker', icon: <FaDocker className="w-10 h-10" />, color: 'from-blue-500 to-blue-700' },
        { name: 'Kubernetes', icon: <SiKubernetes className="w-10 h-10" />, color: 'from-blue-600 to-indigo-700' },
        { name: 'Jenkins', icon: <SiJenkins className="w-10 h-10" />, color: 'from-red-600 to-gray-700' },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
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
              Technical <span className="gradient-text">Skills</span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={inView ? { width: '100px' } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + categoryIndex * 0.1 }}
                className="material-card-elevated p-6 hover:shadow-material-xl"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-primary-500 to-accent-500 text-white rounded-material shadow-material">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900">
                    {category.title}
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      whileHover={{ scale: 1.1, y: -5 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 0.4 + categoryIndex * 0.1 + skillIndex * 0.05 
                      }}
                      className="flex flex-col items-center justify-center p-4 bg-white rounded-material shadow-material hover:shadow-material-lg transition-all duration-300 group cursor-pointer"
                    >
                      <div className={`bg-gradient-to-br ${skill.color} p-3 rounded-material mb-3 text-white group-hover:scale-110 transition-transform duration-300`}>
                        {skill.icon}
                      </div>
                      <span className="text-neutral-700 font-bold text-sm text-center">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
