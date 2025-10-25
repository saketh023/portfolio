import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white via-primary-50/20 to-accent-50/20">
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
              About <span className="gradient-text">Me</span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={inView ? { width: '100px' } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <p className="text-lg text-neutral-700 leading-relaxed">
                Hey! I'm Saketh, a software engineer passionate about building scalable backend systems and solving
                 real-world problems through code. I'm currently pursuing my Master's in Computer Science at Stony Brook University,
                 graduating in May 2026. I spent 2.5 years at FIS building enterprise banking applications, where I developed high-throughput
                 APIs using Java and Spring Boot, optimized database performance, and built event streaming pipelines with Apache Kafka that served 
                 multiple business units.
              </p>
              
              <p className="text-lg text-neutral-700 leading-relaxed">
                Beyond backend engineering, I love exploring various technologies. I've built distributed systems using Go and Paxos consensus protocol, 
                created accessible healthcare apps with AI-powered chat agents using fine-tuned LLaMA models, and worked on GPU-accelerated data pipelines 
                that achieved 600× performance improvements. Whether it's optimizing microservices, designing fault-tolerant systems, or making applications 
                more accessible, I'm driven by the challenge of building technology that makes a meaningful impact.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <motion.div 
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="material-card p-6 text-center"
                >
                  <h4 className="text-primary-600 font-bold text-3xl mb-2">2+ Years</h4>
                  <p className="text-neutral-600 font-medium">Professional Experience</p>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="material-card p-6 text-center"
                >
                  <h4 className="text-accent-600 font-bold text-3xl mb-2">20+</h4>
                  <p className="text-neutral-600 font-medium">Technologies Mastered</p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative"
            >
              <div className="material-card-elevated p-8 bg-gradient-to-br from-primary-500 via-accent-500 to-secondary-500">
                <div className="bg-white p-8 rounded-material">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-6">Current Focus</h3>
                  <ul className="space-y-4">
                    {[
                      { icon: '🎯', text: 'Distributed Systems & Microservices' },
                      { icon: '☁️', text: 'Cloud Technologies (AWS, Azure, GCP)' },
                      { icon: '🚀', text: 'GPU-Accelerated Data Processing' },
                      { icon: '�', text: 'Full-Stack Development (Java, React, Spring Boot)' }
                    ].map((item, index) => (
                      <motion.li
                        key={item.text}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                        className="flex items-center gap-3 text-neutral-700"
                      >
                        <span className="text-2xl">{item.icon}</span>
                        <span className="font-medium">{item.text}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
