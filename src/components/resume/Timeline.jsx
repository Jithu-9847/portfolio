import { motion } from 'framer-motion';

const Timeline = ({ items, title, icon }) => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
        <span className="text-[#7f5af0]">{icon}</span>
        <span className="gradient-text">{title}</span>
      </h2>
      
      <div className="relative border-l-2 border-[#7f5af0]/30 pl-8 ml-4">
        {items.map((item, index) => (
          <motion.div 
            key={index}
            className="mb-10 relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            {/* Timeline dot */}
            <div className="absolute -left-[41px] -top-1 w-5 h-5 rounded-full bg-[#7f5af0]" />
            
            <div className="card">
              <h3 className="text-xl font-bold text-headline mb-1">{item.title}</h3>
              <div className="flex flex-col sm:flex-row sm:items-center mb-3">
                <span className="text-accent font-medium">{item.organization}</span>
                <span className="hidden sm:block text-stroke mx-2">•</span>
                <span className="text-paragraph text-sm">{item.period}</span>
              </div>
              <p className="text-paragraph mb-4">{item.description}</p>
              
              {item.highlights && (
                <ul className="list-disc list-inside text-paragraph space-y-1 ml-2">
                  {item.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;