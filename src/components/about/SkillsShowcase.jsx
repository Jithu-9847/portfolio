import { motion } from 'framer-motion';
import { 
  FiCode, FiDatabase, FiSmartphone, FiGithub, 
  FiLayout, FiGlobe, FiServer, FiGitBranch 
} from 'react-icons/fi';
import { LuBrain } from "react-icons/lu"
import { PiBracketsAngle } from 'react-icons/pi';

const skills = [
  {
    category: 'Frontend',
    icon: <FiLayout size={24} />,
    skills: ['React.js', 'Next.js', 'TailwindCSS', 'HTML5', 'CSS3', 'JavaScript']
  },
  {
    category: 'Backend',
    icon: <FiServer size={24} />,
    skills: ['Node.js', 'Python with Fast Api', 'Firebase']
  },
  {
    category: 'Mobile',
    icon: <FiSmartphone size={24} />,
    skills: ['Flutter', 'Dart']
  },
  {
    category: 'AI/ML',
    icon: <LuBrain size={24} />,
    skills: ['OpenCV']
  },
  {
    category: 'Programming Languages',
    icon: <PiBracketsAngle size={24} />,
    skills: ['C','C++','Java','Python']
  }
];


const SkillCard = ({ category, icon, skills, index }) => {
  return (
    <motion.div 
      className="card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex items-center mb-4">
        <div className="mr-3 text-[#7f5af0]">{icon}</div>
        <h3 className="text-xl font-bold text-[#ffffff]">{category}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, idx) => (
          <motion.span 
            key={idx}
            className="px-3 py-1 bg-[#7f5af0]/10 text-[#7f5af0] rounded-full text-sm font-mono"
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(127, 90, 240, 0.2)' }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

const SkillsShowcase = () => {
    return (
      <section className="py-10">
        <h2 className="text-2xl font-bold mb-8 text-center">
          <span className="gradient-text">Skills & Technologies</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <SkillCard 
              key={index}
              category={skill.category}
              icon={skill.icon}
              skills={skill.skills}
              index={index}
            />
          ))}
        </div>
      </section>
    );
  };
  
  export default SkillsShowcase;