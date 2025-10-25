import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: 'Email',
      value: 'saketh.vadlamudi@stonybrook.edu',
      link: 'mailto:saketh.vadlamudi@stonybrook.edu'
    },
    {
      icon: <FaPhone className="w-6 h-6" />,
      title: 'Phone',
      value: '+1 (631) 428-5598',
      link: 'tel:+16314285598'
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      title: 'Location',
      value: 'New York, NY (Open to Relocation)',
      link: '#'
    },
    {
      icon: <FaGithub className="w-6 h-6" />,
      title: 'GitHub',
      value: 'github.com/saketh023',
      link: 'https://github.com/saketh023'
    },
    {
      icon: <FaLinkedin className="w-6 h-6" />,
      title: 'LinkedIn',
      value: 'linkedin.com/in/saketh-vadlamudi',
      link: 'https://linkedin.com/in/saketh-vadlamudi'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary-50/30 via-white to-accent-50/30">
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
              Get In <span className="gradient-text">Touch</span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={inView ? { width: '100px' } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"
            />
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-neutral-600 mt-6"
            >
              I'm always interested in new opportunities and collaborations. Let's connect!
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                  Let's Connect
                </h3>
                <p className="text-neutral-600 mb-8 leading-relaxed">
                  I'm Saketh Vadlamudi, currently pursuing my Master's in Computer Science at Stony Brook University 
                  (GPA: 3.61/4.0) and actively seeking full-time opportunities in software engineering, full-stack 
                  development, and distributed systems. With 2+ years of professional experience at companies like FIS 
                  and NYC Administration for Children's Services, I bring expertise in Java, Spring Boot, React, and 
                  cloud technologies. Feel free to reach out for full-time positions, collaborations, or technical discussions.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    initial={{ opacity: 0, x: -30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="flex items-center gap-4 p-4 material-card hover:shadow-material-lg"
                  >
                    <div className="p-3 bg-gradient-to-br from-primary-500 to-accent-500 text-white rounded-material shadow-material">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-neutral-900 font-bold">{info.title}</h4>
                      <p className="text-neutral-600">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="flex gap-4">
                {[
                  { href: 'https://github.com/saketh023', Icon: FaGithub, color: 'primary' },
                  { href: 'https://linkedin.com/in/saketh-vadlamudi', Icon: FaLinkedin, color: 'accent' },
                  { href: 'mailto:saketh.vadlamudi@stonybrook.edu', Icon: FaEnvelope, color: 'secondary' }
                ].map((social) => (
                  <motion.a
                    key={social.href}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`floating-icon bg-gradient-to-br from-${social.color}-500 to-${social.color}-600 text-white p-4 rounded-material shadow-material`}
                  >
                    <social.Icon size={24} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="material-card-elevated p-8"
            >
              <h3 className="text-2xl font-bold text-neutral-900 mb-2 pb-6 border-b border-neutral-200">
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6 mt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-neutral-700 font-semibold mb-3 text-sm uppercase tracking-wide">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full bg-white border-2 border-neutral-200 rounded-material px-5 py-4 text-neutral-900 placeholder-neutral-400 focus:border-primary-500 focus:bg-primary-50/30 focus:outline-none transition-all duration-300 shadow-sm hover:border-neutral-300"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-neutral-700 font-semibold mb-3 text-sm uppercase tracking-wide">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="w-full bg-white border-2 border-neutral-200 rounded-material px-5 py-4 text-neutral-900 placeholder-neutral-400 focus:border-primary-500 focus:bg-primary-50/30 focus:outline-none transition-all duration-300 shadow-sm hover:border-neutral-300"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-neutral-700 font-semibold mb-3 text-sm uppercase tracking-wide">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className="w-full bg-white border-2 border-neutral-200 rounded-material px-5 py-4 text-neutral-900 placeholder-neutral-400 focus:border-primary-500 focus:bg-primary-50/30 focus:outline-none transition-all duration-300 shadow-sm hover:border-neutral-300"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-neutral-700 font-semibold mb-3 text-sm uppercase tracking-wide">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Write your message here..."
                    className="w-full bg-white border-2 border-neutral-200 rounded-material px-5 py-4 text-neutral-900 placeholder-neutral-400 focus:border-primary-500 focus:bg-primary-50/30 focus:outline-none transition-all duration-300 resize-none shadow-sm hover:border-neutral-300"
                    required
                  />
                </div>
                
                <div className="pt-4">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full material-button-primary text-white px-8 py-5 rounded-full font-bold text-lg flex items-center justify-center gap-3 shadow-material-lg"
                  >
                    <FaPaperPlane className="text-xl" />
                    Send Message
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
