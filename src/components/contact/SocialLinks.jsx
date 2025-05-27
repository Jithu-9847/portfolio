import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

const socialLinks = [
  {
    name: 'GitHub',
    icon: <FiGithub size={24} />,
    url: 'https://github.com/yourusername',
    color: 'hover:text-white'
  },
  {
    name: 'LinkedIn',
    icon: <FiLinkedin size={24} />,
    url: 'https://linkedin.com/in/yourusername',
    color: 'hover:text-blue-400'
  },
  {
    name: 'Twitter',
    icon: <FiTwitter size={24} />,
    url: 'https://twitter.com/yourusername',
    color: 'hover:text-blue-500'
  },
  {
    name: 'Email',
    icon: <FiMail size={24} />,
    url: 'mailto:your.email@example.com',
    color: 'hover:text-red-400'
  }
];

const SocialLinks = () => {
  return (
    <motion.div 
      className="card w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <h2 className="text-2xl font-bold mb-6 text-headline">Connect With Me</h2>
      
      <div className="space-y-5">
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center p-4 rounded-lg bg-card shadow-md transition-all duration-300 ${link.color} hover:shadow-lg transform hover:-translate-y-1`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 * index }}
          >
            <div className="mr-4 text-primary">{link.icon}</div>
            <span className="font-medium text-base">{link.name}</span>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default SocialLinks;