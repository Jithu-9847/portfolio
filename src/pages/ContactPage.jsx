import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiInstagram, FiSend } from 'react-icons/fi';
import confetti from '../utils/confetti';
import emailjs from '@emailjs/browser';
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID=import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY=import.meta.env.VITE_EMAILJS_PUBLIC_KEY



const pageVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    const time = new Date().toLocaleString(); // include time for template
     
    
    emailjs.send(
       SERVICE_ID,
       TEMPLATE_ID,
      {
        name: formData.name,
        message: formData.message,
        time: new Date().toLocaleString(),
        email: formData.email,
      },
      PUBLIC_KEY
    ).then(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti();
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 5000);
    }).catch((err) => {
      setIsSubmitting(false);
      console.error('EmailJS Error:', err);
    });
  };
  

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="pt-20 pb-16"
    >
      <div className="section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h1>
          <p className="text-paragraph max-w-2xl mx-auto">
            Want to say hello? I'd love to hear from you!
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-[#fffffe]">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-[#7f5af0]/20 p-3 rounded-lg mr-4">
                  <FiMail className="text-[#7f5af0] text-xl" />
                </div>
                <div>
                  <h3 className="text-[#fffffe] font-medium mb-1">Email</h3>
                  <p className="text-paragraph">jithugirish1@ieee.org</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#7f5af0]/20 p-3 rounded-lg mr-4">
                  <FiPhone className="text-[#7f5af0] text-xl" />
                </div>
                <div>
                  <h3 className="text-[#fffffe] font-medium mb-1">Phone</h3>
                  <p className="text-paragraph">+91 73060 89306</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#7f5af0]/20 p-3 rounded-lg mr-4">
                  <FiMapPin className="text-[#7f5af0] text-xl" />
                </div>
                <div>
                  <h3 className="text-[#fffffe] font-medium mb-1">Location</h3>
                  <p className="text-paragraph">Pathanamthitta, Kerala, India</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h3 className="text-xl font-bold mb-4 text-[#fffffe]">Connect With Me</h3>
              <div className="flex space-x-4">
                <motion.a
                  href="https://github.com/Jithu-9847"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1a1a1a] w-12 h-12 rounded-full flex items-center justify-center text-[#7f5af0] border border-stroke hover:border-[#7f5af0] transition-colors duration-300"
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(127, 90, 240, 0.1)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiGithub size={20} />
                </motion.a>
                
                <motion.a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1a1a1a] w-12 h-12 rounded-full flex items-center justify-center text-[#7f5af0] border border-[#333333] hover:border-[#7f5af0] transition-colors duration-300"
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(127, 90, 240, 0.1)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiLinkedin size={20} />
                </motion.a>
                
                <motion.a
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1a1a1a] w-12 h-12 rounded-full flex items-center justify-center text-[#7f5af0] border border-[#333333] hover:border-[#7f5af0] transition-colors duration-300"
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(127, 90, 240, 0.1)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiInstagram size={20} />
                </motion.a>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-[#fffffe]">Send Me a Message</h2>
            
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="card bg-[#7f5af0]/10 border-[#7f5af0] text-center py-10"
              >
                <FiMail className="text-4xl text-[#7f5af0] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#fffffe] mb-2">Thank You!</h3>
                <p className="text-paragraph">Your message has been sent successfully.</p>
                <p className="text-paragraph mt-2">I'll get back to you soon!</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="card">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-[#fffffe] mb-2 font-mono">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#1a1a1a] border border-[#333333] rounded-lg px-4 py-3 text-[#fffffe] focus:outline-none focus:border-[#7f5af0] transition-colors"
                    placeholder="Your name"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-[#fffffe] mb-2 font-mono">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#1a1a1a] border border-[#333333] rounded-lg px-4 py-3 text-[#fffffe] focus:outline-none focus:border-[#7f5af0] transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-[#fffffe] mb-2 font-mono">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full bg-[#1a1a1a] border border-[#333333] rounded-lg px-4 py-3 text-[#fffffe] focus:outline-none focus:border-[#7f5af0] transition-colors"
                    placeholder="What would you like to discuss?"
                  />
                </div>
                
                <motion.button
                  type="submit"
                  className="primary-button w-full flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend className="mr-2" />
                      Send Message
                    </>
                  )}
                </motion.button>
                </form>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
