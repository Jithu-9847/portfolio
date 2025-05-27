import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectCard = ({ project }) => {
  const { title, description, tech, image, github, demo } = project;
  const [showPreview, setShowPreview] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col bg-[#1a1a1a] rounded-lg overflow-hidden shadow-lg relative"
    >
      {/* Image Preview Modal */}
      {showPreview && (
        <div
          onClick={() => setShowPreview(false)}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 cursor-zoom-out"
        >
          <img src={image} alt={title} className="max-w-full max-h-full rounded-lg shadow-lg" />
        </div>
      )}

      {/* Image */}
      <div className="relative overflow-hidden h-48"  >
        <img
          onClick={() => setShowPreview(true)}
          src={image || "https://www.svgrepo.com/show/508699/landscape-placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover cursor-pointer brightness-75"
        />
         
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-400 mb-4 flex-grow">{description}</p>

        {/* Technologies */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {tech.map((item, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 rounded-full bg-purple-950 text-purple-300 border border-purple-800"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-4 mt-auto">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-gray-400 hover:text-purple-400 transition-colors"
            >
              <FiGithub className="text-lg" />
              <span className="text-sm font-medium">GitHub</span>
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-gray-400 hover:text-purple-400 transition-colors"
            >
              <FiExternalLink className="text-lg" />
              <span className="text-sm font-medium">Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
