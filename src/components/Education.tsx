import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt, FaAward } from 'react-icons/fa';

const Education: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      degree: 'Master of Science in Computer Science',
      school: 'Stony Brook University',
      location: 'Stony Brook, NY',
      period: 'August 2024 - May 2026',
      gpa: '3.61/4.0',
      status: 'In Progress',
      description: 'Pursuing advanced studies in computer science with focus on distributed systems, machine learning, and software engineering. Specializing in microservices architecture, cloud computing, GPU acceleration, and modern software development practices.',
      courses: [
        'Distributed Systems',
        'Database Systems',
        'Machine Learning',
        'Data Science',
        'Data Structures & Algorithms',
        'Object-Oriented Programming',
        'Operating Systems',
        'Computer Networks'
      ],
      achievements: [
        'Graduate Research Assistant at Data Management and Biomedical Data Analytics Lab',
        'Software Engineer Intern at NYC Administration for Children\'s Services',
        'Published research on GPU-accelerated spatial analytics',
        'Achieved 600× performance gain in geospatial data processing'
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4"
            >
              Education & <span className="gradient-text">Achievements</span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={inView ? { width: '100px' } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"
            />
          </div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className="grid lg:grid-cols-3 gap-8"
              >
                {/* Main Education Card */}
                <div className="lg:col-span-2 material-card-elevated">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-4 bg-gradient-to-br from-primary-500 to-accent-500 text-white rounded-material shadow-material flex-shrink-0">
                      <FaGraduationCap className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-3">
                        {edu.degree}
                      </h3>
                      <div className="flex items-center gap-2 text-primary-600 font-bold text-lg mb-2">
                        <FaMapMarkerAlt className="w-4 h-4" />
                        {edu.school}
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-neutral-600">
                        <div className="flex items-center gap-2">
                          <FaCalendarAlt className="w-4 h-4" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-2 font-bold text-accent-600">
                          <FaAward className="w-4 h-4" />
                          <span>GPA: {edu.gpa}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-neutral-600 mb-8 leading-relaxed px-1">
                    {edu.description}
                  </p>

                  <div className="space-y-8 pt-4 border-t border-neutral-200">
                    <div className="px-1">
                      <h4 className="text-lg font-bold text-neutral-900 mb-4">
                        Relevant Coursework
                      </h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {edu.courses.map((course, idx) => (
                          <motion.span
                            key={course}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.3, delay: 0.6 + idx * 0.05 }}
                            className="chip text-sm"
                          >
                            {course}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    <div className="px-1 pt-4 border-t border-neutral-100">
                      <h4 className="text-lg font-bold text-neutral-900 mb-4">
                        Achievements
                      </h4>
                      <ul className="space-y-3">
                        {edu.achievements.map((achievement, idx) => (
                          <motion.li
                            key={achievement}
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.8 + idx * 0.1 }}
                            className="flex items-start gap-3 text-neutral-600 pl-2"
                          >
                            <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Status Card */}
                <div className="lg:col-span-1">
                  <div className="bg-gradient-to-br from-primary-500 via-accent-500 to-secondary-500 rounded-material-lg p-1 h-full">
                    <div className="bg-white rounded-material-lg p-8 h-full flex flex-col">
                      <h4 className="text-xl font-bold text-neutral-900 mb-8 pb-4 border-b border-neutral-200">
                        Current Status
                      </h4>
                      <div className="space-y-6 flex-1">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={inView ? { opacity: 1, y: 0 } : {}}
                          transition={{ duration: 0.5, delay: 1.0 }}
                          className="flex items-center gap-3 px-2 py-3 bg-green-50 rounded-material border border-green-200"
                        >
                          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-green-600 font-bold text-lg">{edu.status}</span>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={inView ? { opacity: 1, y: 0 } : {}}
                          transition={{ duration: 0.5, delay: 1.1 }}
                          className="text-neutral-700 px-2 py-3 bg-neutral-50 rounded-material border border-neutral-200"
                        >
                          <p className="font-semibold mb-2 text-neutral-900">Expected Graduation:</p>
                          <p className="text-neutral-600">May 2026</p>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={inView ? { opacity: 1, y: 0 } : {}}
                          transition={{ duration: 0.5, delay: 1.2 }}
                          className="text-neutral-700 px-2 py-3 bg-neutral-50 rounded-material border border-neutral-200"
                        >
                          <p className="font-semibold mb-2 text-neutral-900">Focus:</p>
                          <p className="text-neutral-600">Distributed Systems, Machine Learning & GPU Computing</p>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12"
          >
            <div className="material-card-elevated">
              <h3 className="text-2xl font-bold text-neutral-900 mb-8 text-center">
                Academic Focus Areas
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { icon: '🔬', title: 'Research', desc: 'GPU-accelerated spatial analytics and distributed systems architecture' },
                  { icon: '💻', title: 'Development', desc: 'Full-stack applications with Java, Spring Boot, React and cloud technologies' },
                  { icon: '☁️', title: 'Innovation', desc: 'Cloud-native solutions, microservices, and scalable system design' }
                ].map((area, index) => (
                  <motion.div
                    key={area.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="text-center p-6 bg-gradient-to-br from-neutral-50 to-white rounded-material-lg shadow-material hover:shadow-material-lg transition-all duration-300"
                  >
                    <div className="text-6xl mb-4">{area.icon}</div>
                    <h4 className="text-xl font-bold text-neutral-900 mb-3">{area.title}</h4>
                    <p className="text-neutral-600">
                      {area.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
