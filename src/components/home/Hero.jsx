import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiDownload, FiEye, FiMail ,} from 'react-icons/fi';
import { MdComputer } from "react-icons/md";

const typingVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.2 }
  }
};

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "Web Developer | Cybersecurity Enthusiast | Flutter Developer | AI Explorer";
  
  useEffect(() => {
    let timeout;
    let currentIndex = 0;
    
    const typeNextCharacter = () => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
        timeout = setTimeout(typeNextCharacter, 100);
      }
    };
    
    typeNextCharacter();
    
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.p 
            className="text-[#00eeff] font-mono mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Hello there👋, I'm 
          </motion.p>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <span className="gradient-text">Jithu Girish</span>
          </motion.h1>
          
          <motion.div 
            className="h-6 md:h-8 font-mono text-primary text-sm md:text-base mb-6 overflow-hidden"
            variants={typingVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span className="inline-block">
              {displayedText}
              <motion.span 
                className="inline-block w-2 h-4 bg-[#00eeff] ml-1"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 1 }}
              />
            </motion.span>
          </motion.div>
          
          <motion.p 
            className="text-[#c3c3c3] text-lg md:text-xl max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            "Crafting innovative solutions through code and design"
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <Link to="/resume" className="primary-button flex items-center">
              <FiEye className="mr-2" />
              View Resume
            </Link>
            <Link to="/projects" className="secondary-button flex items-center">
              <FiEye className="mr-2" />
              See Projects
            </Link>
            <Link to="/contact" className="secondary-button flex items-center">
              <FiMail className="mr-2" />
              Contact Me
            </Link>
          </motion.div>
        </motion.div>
        
        {/* <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <motion.div 
            className="w-6 h-10 border-2 border-[#00eeff] rounded-full flex justify-center p-1"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <motion.div className="w-1 h-2 bg-[#00eeff] rounded-full" />
          </motion.div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Hero;