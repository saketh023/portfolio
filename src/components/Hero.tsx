import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-50 to-primary-50 border-2 border-green-300 text-green-700 rounded-full text-sm font-semibold shadow-material">
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
              Actively seeking Full-Time roles starting May 2026
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold text-neutral-900 mb-6"
          >
            Hi, I'm{' '}
            <span className="gradient-text">Saketh Vadlamudi</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-neutral-700 mb-4 font-medium min-h-[2.5rem]"
          >
            <TypeAnimation
              sequence={[
                'Full-Stack Developer',
                3000,
                'Software Engineer',
                3000,
                'Microservices Expert',
                3000,
                'Cloud Computing Enthusiast',
                3000,
              ]}
              wrapper="span"
              speed={40}
              deletionSpeed={60}
              className="gradient-text font-bold"
              repeat={Infinity}
              cursor={true}
              style={{ display: 'inline-block' }}
            />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg text-neutral-600 mb-2 max-w-3xl mx-auto"
          >
            Computer Science Graduate Student at{' '}
            <span className="text-primary-600 font-bold">Stony Brook University</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg text-neutral-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Passionate Software Engineer with expertise in building scalable full-stack applications using Java, 
            Spring Boot, and modern web technologies. Experienced in distributed systems, microservices architecture, 
            and cloud computing. Currently pursuing Master's in Computer Science with a GPA of 3.61/4.0.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="material-button-primary text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2"
            >
              View My Work
            </motion.a>
            
            <motion.a
              href="/Saketh_Vadlamudi_Resume.pdf"
              download="Saketh_Vadlamudi_Resume.pdf"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="material-button-outline px-8 py-4 rounded-full font-semibold flex items-center gap-2"
            >
              <FaDownload className="w-4 h-4" />
              Download Resume
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex justify-center space-x-6 mt-12"
          >
            <motion.a
              href="https://github.com/saketh023"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              className="floating-icon text-neutral-700 hover:text-primary-600 transition-colors duration-300 bg-white p-4 rounded-full shadow-material"
            >
              <FaGithub size={28} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/saketh-vadlamudi"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              className="floating-icon text-neutral-700 hover:text-accent-600 transition-colors duration-300 bg-white p-4 rounded-full shadow-material"
            >
              <FaLinkedin size={28} />
            </motion.a>
             <motion.a
               href="mailto:saketh.vadlamudi@stonybrook.edu"
               whileHover={{ scale: 1.2, y: -5 }}
               className="floating-icon text-neutral-700 hover:text-secondary-600 transition-colors duration-300 bg-white p-4 rounded-full shadow-material"
             >
               <FaEnvelope size={28} />
             </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
