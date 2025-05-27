import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="mt-24 px-6 md:px-16 py-12 bg-darker/80 backdrop-blur-md rounded-t-2xl shadow-inner">
      <motion.div 
        className="flex flex-col md:flex-row items-center justify-between gap-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Left - Copyright */}
        <div className="text-paragraph text-center md:text-left text-sm">
          © {new Date().getFullYear()} <span className="text-primary font-semibold">Jithu Girish</span>. All Rights Reserved.
        </div>

        {/* Right - Social Links */}
        <div className="flex items-center space-x-6">
          <motion.a 
            href="https://github.com/Jithu-9847" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-headline hover:text-primary transition-colors duration-300"
            whileHover={{ scale: 1.2 }}
          >
            <FiGithub size={22} />
          </motion.a>

          <motion.a 
            href="https://linkedin.com/in/jithugirish1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-headline hover:text-primary transition-colors duration-300"
            whileHover={{ scale: 1.2 }}
          >
            <FiLinkedin size={22} />
          </motion.a>

          <motion.a 
            href="https://instagram.com/jithu_girish_" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-headline hover:text-primary transition-colors duration-300"
            whileHover={{ scale: 1.2 }}
          >
            <FiInstagram size={22} />
          </motion.a>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
