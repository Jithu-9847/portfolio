import { motion } from 'framer-motion';
import { FiDownload, FiBook, FiBriefcase } from 'react-icons/fi';
import Timeline from '../components/resume/Timeline';
import SkillChart from '../components/resume/SkillChart';

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

const educationData = [
  {
    title: "B.Tech Computer Science Engineering",
    organization: "College Of Engineering Chengannur",
    period: "2021 - 2026",
    description: "Currently pursuing my Computer Science Engineering degree with focus on software development, AI, and UX design.",
    highlights: [
      "Participated in multiple hackathons and coding competitions"
    ]
  },
  {
    title: "Higher Secondary Education",
    organization: "St. Thomas Higher Secondary School, Kozhencherry",
    period: "2020 - 2022",
    description: "Completed Higher Secondary Education (12th grade).",
    highlights: [
      "Completed with 96% marks."
    ]
  }
  
];

const experienceData = [
    {
      title: "Tech In-Charge Software",
      organization: "Proddec",
      period: "2024 - 2025",
      description: "Leading technical initiatives and coordinating web development projects for the department.",
      highlights: [
        "Organized technical workshops for students",
        "Managed the development of the department's website",
      ]
    },
    {
      title: "Web Development Intern",
      organization: "Prodigy",
      period: "2023",
      description: "Worked as a web development intern, assisting in the design and implementation of web applications.",
      highlights: [
        "Collaborated with the team to develop responsive web applications",
        "Improved front-end performance and UI/UX design"
      ]
    }
  ];
  

const ResumePage = () => {
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
            <span className="gradient-text">Resume</span>
          </h1>
          <p className="text-[#c3c3c3] max-w-2xl mx-auto mb-6">
            A comprehensive overview of my education, experience, and skills.
          </p>
          
          {/* <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="primary-button inline-flex items-center"
          >
            <FiDownload className="mr-2" />
            Download Resume
          </a> */}
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column for timeline */}
          <div className="lg:col-span-2">
            <Timeline 
              title="Education"
              icon={<FiBook size={24} />}
              items={educationData}
            />
            
            <Timeline 
              title="Experience"
              icon={<FiBriefcase size={24} />}
              items={experienceData}
            />
          </div>
          
          {/* Right column for skills and additional info */}
          <div className="lg:col-span-1">
            <SkillChart />
            
            {/* Additional certifications */}
            <div className="card mb-8">
              <h2 className="text-xl font-bold mb-4 text-[#ffffff]">Certifications</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-[#00eeff] rounded-full mt-2 mr-2"></span>
                  <div>
                    <h3 className="text-[#ffffff] font-medium">Web Development Internship</h3>
                    <p className="text-sm text-[#c3c3c3]">Prodigy - 2024</p>
                  </div>
                </li>
                
              </ul>
            </div>
            
            {/* Languages */}
            <div className="card">
              <h2 className="text-xl font-bold mb-4 text-[#ffffff]">Languages</h2>
              <ul className="space-y-3">
                <li className="flex items-center justify-between">
                  <span className="text-[#c3c3c3]">English</span>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className={`w-2 h-2 rounded-full ${i <= 5 ? 'bg-[#7f5af0]' : 'bg-[#333333]'}`}></div>
                    ))}
                  </div>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-[#c3c3c3]">Malayalam</span>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className={`w-2 h-2 rounded-full ${i <= 5 ? 'bg-[#7f5af0]' : 'bg-[#333333]'}`}></div>
                    ))}
                  </div>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-[#c3c3c3]">Hindi</span>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className={`w-2 h-2 rounded-full ${i <= 4 ? 'bg-[#7f5af0]' : 'bg-[#333333]'}`}></div>
                    ))}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ResumePage;