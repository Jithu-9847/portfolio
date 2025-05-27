import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend } from 'react-icons/fi';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };
  
  return (
    <motion.div 
      className="card w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-bold mb-6 text-headline">Get In Touch</h2>
      
      {submitStatus === 'success' ? (
        <motion.div 
          className="p-4 rounded-lg bg-secondary/20 text-secondary mb-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="font-medium">Message sent successfully! I'll get back to you soon.</p>
        </motion.div>
      ) : null}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-headline mb-2 font-mono">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 bg-darker border border-stroke rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-paragraph"
            placeholder="Your name"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-headline mb-2 font-mono">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 bg-darker border border-stroke rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-paragraph"
            placeholder="your.email@example.com"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-headline mb-2 font-mono">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full p-3 bg-darker border border-stroke rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-paragraph resize-none"
            placeholder="Your message..."
          />
        </div>
        
        <motion.button
          type="submit"
          className="primary-button w-full flex items-center justify-center"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {isSubmitting ? (
            <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
          ) : (
            <FiSend className="mr-2" />
          )}
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ContactForm;