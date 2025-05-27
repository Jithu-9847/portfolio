import { motion } from "framer-motion";
import ProjectCard from "../components/common/ProjectCard";
import { projects, projects_team } from "../utils/projectsData";

const ProjectPage = () => {
  return (
    <div className="min-h-screen  ">
      {/* Hero Section */}
      <div className="relative overflow-hidden px-6 md:px-16 pt-20 pb-16">
        {/* Main Heading */}
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block"
          >
           <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Projects</span>
          </h1>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Explore my journey through code, creativity, and innovation. Each
            project tells a story of learning, building, and pushing boundaries.
          </motion.p>

          {/* Stats Cards */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg border border-white/20">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                {projects.length+projects_team.length-1}+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                Total Projects
              </div>
            </div>
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg border border-white/20">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                100%
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                Passion Driven
              </div>
            </div>
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg border border-white/20">
              <div className="text-2xl font-bold text-pink-600 dark:text-pink-400">
                ∞
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                Ideas Flowing
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Projects Sections */}
      <div className="px-6 md:px-16 pb-20">
        {/* Personal Projects Section */}
        <ProjectSection
          title="Personal Projects"
          subtitle="Solo adventures in code and creativity"
          projects={projects}
          delay={0}
          gradient="from-purple-500 to-pink-500"
        />

        {/* Group Projects Section */}
        {/* Group Projects Section */}
        <ProjectSection
          title="Group Projects"
          subtitle="Collaborative efforts and team achievements"
          projects={projects_team} // <-- Use projects_team here
          delay={0.3}
          gradient="from-blue-500 to-cyan-500"
        />
      </div>
    </div>
  );
};

// Reusable ProjectSection Component
const ProjectSection = ({
  title,
  subtitle,
  projects,
  delay,
  gradient,
  icon,
}) => {
  return (
    <motion.section
      className="mb-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
    >
      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: delay + 0.2 }}
          className="inline-flex items-center gap-3 mb-4"
        >
          <span className="text-4xl">{icon}</span>
          <h2
            className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
          >
            {title}
          </h2>
        </motion.div>

        <motion.p
          className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: delay + 0.4 }}
        >
          {subtitle}
        </motion.p>
      </div>

      {/* Projects Grid */}
      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={`${title}-${index}`}
            variants={{
              hidden: {
                opacity: 0,
                scale: 0.8,
                rotateY: -15,
              },
              visible: {
                opacity: 1,
                scale: 1,
                rotateY: 0,
              },
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
            className="group"
          >
            <div className="h-full transform-gpu transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2">
              <ProjectCard project={project} />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Empty State (if no projects) */}
      {projects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center py-20"
        >
          <div className="text-6xl mb-4">🔨</div>
          <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Coming Soon
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
            Exciting projects are currently in development!
          </p>
        </motion.div>
      )}
    </motion.section>
  );
};

export default ProjectPage;
