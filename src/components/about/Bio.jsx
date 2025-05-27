import { motion } from "framer-motion";
import { FiUser, FiCode, FiBook,FiShield } from "react-icons/fi";
import profile from "../../assets/images/image.jpeg";
 
const Bio = () => {
  return (
    <section className="py-10">
      <div className="flex flex-col md:flex-row gap-10 items-center">
        {/* Profile Picture */}
        <motion.div
          className="w-56 h-56 relative"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#7f5af0] p-1">
            <img
              src={profile}
              alt="Jithu"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          {/* Animated Glow */}
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(127, 90, 240, 0)",
                "0 0 0 10px rgba(127, 90, 240, 0.2)",
                "0 0 0 0 rgba(127, 90, 240, 0)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        {/* Bio Text */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-paragraph mb-6 text-lg">
            I'm Jithu Girish, a passionate Full-Stack Web Developer and Flutter
            App Developer currently pursuing Computer Science Engineering at KTU
            University. I love building modern websites, exploring AI
            technologies, and creating user-focused digital experiences.
          </p>
          <div className="space-y-4">
            <div className="flex items-start">
              <span className="mt-1 mr-3 text-[#7f5af0]">
                <FiCode size={20} />
              </span>
              <div>
                <h3 className="text-headline font-medium">
                  Passionate Developer
                </h3>
                <p className="text-paragraph">
                  I'm constantly exploring new technologies and frameworks to
                  build innovative solutions.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="mt-1 mr-3 text-[#7f5af0]">
                <FiUser size={20} />
              </span>
              <div>
                <h3 className="text-headline font-medium">UI/UX Enthusiast</h3>
                <p className="text-paragraph">
                  I believe great code deserves great design. I focus on
                  creating intuitive, accessible interfaces.
                </p>
              </div>
            </div>
             
            <div className="flex items-start">
              <span className="mt-1 mr-3 text-[#7f5af0]">
                <FiShield size={20} />
              </span>
              <div>
                <h3 className="text-headline font-medium">
                  Passionate About Cybersecurity
                </h3>
                <p className="text-paragraph">
                  I'm genuinely passionate about cybersecurity and love
                  exploring how to protect systems, data, and people in the
                  digital world.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="mt-1 mr-3 text-[#7f5af0]">
                <FiBook size={20} />
              </span>
              <div>
                <h3 className="text-headline font-medium">
                  Continuous Learner
                </h3>
                <p className="text-paragraph">
                  Technology evolves rapidly, and I'm committed to staying at
                  the forefront of innovation.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Bio;
