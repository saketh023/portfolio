import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white/80 backdrop-blur-sm border-t border-neutral-200 shadow-material">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <div className="text-3xl font-bold gradient-text mb-3">
              Saketh Vadlamudi
            </div>
            <p className="text-neutral-600 font-medium">
              🎓 MS Computer Science @ Stony Brook University | GPA: 3.61/4.0
            </p>
            <p className="text-neutral-500 text-sm mt-2">
              Software Engineer | Full-Stack Developer | Cloud & Distributed Systems
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-4"
          >
            <motion.a
              href="https://github.com/saketh023"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-br from-neutral-800 to-neutral-900 text-white p-4 rounded-material shadow-material hover:shadow-material-lg transition-shadow duration-300"
            >
              <FaGithub size={24} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/saketh-vadlamudi"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-br from-accent-500 to-accent-600 text-white p-4 rounded-material shadow-material hover:shadow-material-lg transition-shadow duration-300"
            >
              <FaLinkedin size={24} />
            </motion.a>
            <motion.a
              href="mailto:saketh.vadlamudi@stonybrook.edu"
              whileHover={{ scale: 1.15, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-br from-secondary-500 to-secondary-600 text-white p-4 rounded-material shadow-material hover:shadow-material-lg transition-shadow duration-300"
            >
              <FaEnvelope size={24} />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center md:text-right"
          >
            <p className="text-neutral-700 flex items-center gap-2 justify-center md:justify-end font-medium">
              Made with <FaHeart className="text-red-500 animate-pulse" /> and lots of ☕
            </p>
            <p className="text-neutral-500 text-sm mt-2">
              © {currentYear} Saketh Vadlamudi. All rights reserved.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-neutral-200 mt-8 pt-6"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-600 text-sm font-medium">
              Built with <span className="gradient-text font-bold">React</span>, <span className="gradient-text font-bold">TypeScript</span>, and <span className="gradient-text font-bold">Tailwind CSS</span>
            </p>
            <div className="flex gap-2">
              <span className="chip text-xs">Material Design 3</span>
              <span className="chip text-xs">Responsive</span>
              <span className="chip text-xs">Accessible</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
