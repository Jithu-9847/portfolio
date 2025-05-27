import { motion } from 'framer-motion';
import { FiBriefcase, FiCode } from 'react-icons/fi';

const experiences = [
    {
      title: 'Tech In-Charge Software',
      company: 'Proddec',
      period: '2024 - 2025',
      description: 'Lead technical initiatives, coordinate web development projects, and organize technical workshops for students.',
      icon: <FiBriefcase />
    },
    {
      title: 'Web Development Intern',
      company: 'Prodigy',
      period: '2024',
      description: 'Worked as a web development intern, And developed web applications.',
      icon: <FiBriefcase />
    },
  ];
  

const ExperienceCard = ({ experience, index }) => {
  return (
    <motion.div 
      className="card relative flex"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Icon */}
      <div className="mr-4 p-3 bg-[#7f5af0]/10 text-[#7f5af0] rounded-full h-min">
        {experience.icon}
      </div>
      
      {/* Content */}
      <div>
        <h3 className="text-xl font-bold text-[#ffffff]">{experience.title}</h3>
        <div className="flex flex-col sm:flex-row sm:items-center mb-2">
          <span className="text-[#00eeff] font-medium">{experience.company}</span>
          <span className="hidden sm:block text-stroke mx-2">•</span>
          <span className="text-[#c3c3c3] text-sm">{experience.period}</span>
        </div>
        <p className="text-[#c3c3c3]">{experience.description}</p>
      </div>
      
      {/* Connector line for timeline effect */}
      {index < experiences.length - 1 && (
        <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-[#7f5af0]/20" />
      )}
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section className="py-10">
      <h2 className="text-2xl font-bold mb-8 text-center">
        <span className="gradient-text">Experience</span>
      </h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <ExperienceCard 
            key={index}
            experience={exp}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;