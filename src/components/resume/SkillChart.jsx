import { motion } from 'framer-motion';

const skills = [
  { name: "React.js", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "Tailwind CSS", level: 80 },
  { name: "Node.js", level: 50 },
  { name: "Flutter", level: 70 },
  { name: "OpenCV", level: 40 },
];

const SkillChart = () => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-8">
        <span className="gradient-text">Technical Skills</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between mb-2">
              <span className="font-mono text-headline">{skill.name}</span>
              <span className="font-mono text-accent">{skill.level}%</span>
            </div>
            <div className="h-2 bg-darker rounded-full overflow-hidden">
              <motion.div 
                className="h-full custom-gradient"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.1 }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillChart;