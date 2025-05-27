import { motion } from "framer-motion";
import Bio from "../components/about/Bio";
import SkillsShowcase from "../components/about/SkillsShowcase";
import Experience from "../components/about/Experience";

const pageVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const AboutPage = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="pt-20 pb-16"
    >
      <div className="section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h1>
           
        </motion.div>

        <Bio />
        <div className="border-t border-[#333333] my-10 opacity-30" />
        <SkillsShowcase />
        <div className="border-t border-[#333333] my-10 opacity-30" />
        <Experience />

        {/* Education Section */}
        <div className="border-t border-[#333333] my-10 opacity-30" />
        <section className="py-10">
          <h2 className="text-2xl font-bold mb-8 text-center">
            <span className="gradient-text">Education</span>
          </h2>

          {/* B.Tech */}
          <motion.div
            className="card mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-start">
              <div className="mr-4 p-3 bg-[#7f5af0]/10 text-[#7f5af0] rounded-full h-min">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#ffffff]">
                  B.Tech Computer Science Engineering
                </h3>
                <div className="flex flex-col sm:flex-row sm:items-center mb-2">
                  <span className="text-[#00eeff] font-medium">
                    KTU University
                  </span>
                  <span className="hidden sm:block text-[#333333] mx-2">•</span>
                  <span className="text-[#c3c3c3] text-sm">2022 - 2026</span>
                </div>
                <p className="text-[#c3c3c3]">
                  Currently in my 3rd year of Computer Science Engineering,
                  focusing on software development, AI, and user experience
                  design.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Higher Secondary Education */}
          <motion.div
            className="card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-start">
              <div className="mr-4 p-3 bg-[#7f5af0]/10 text-[#7f5af0] rounded-full h-min">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#ffffff]">
                  Higher Secondary Education
                </h3>
                <div className="flex flex-col sm:flex-row sm:items-center mb-2">
                  <span className="text-[#00eeff] font-medium">
                    St. Thomas Higher Secondary School, Kozhencherry
                  </span>
                  <span className="hidden sm:block text-[#333333] mx-2">•</span>
                  <span className="text-[#c3c3c3] text-sm">2020 - 2022</span>
                </div>
                <p className="text-[#c3c3c3]">
                  Completed Higher Secondary Education (12th grade) with 96%
                  marks.
                </p>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </motion.div>
  );
};

export default AboutPage;
