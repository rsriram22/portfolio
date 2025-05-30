import React from "react";
import InterestPage from "./Interest";
import { motion } from "framer-motion";
import ScrollSectionleft from "./scrollanimation/scrollleft";

const skills = [
  { name: "HTML", icon: "./src/assets/svg/html-5-svgrepo-com.svg", level: 95 },
  { name: "CSS", icon: "./src/assets/svg/css-3-svgrepo-com.svg", level: 95 },
  { name: "Tailwind CSS", icon: "./src/assets/svg/tailwindcss-icon-svgrepo-com.svg", level: 75 },
  { name: "React", icon: "./src/assets/svg/react-svgrepo-com.svg", level: 70 },
  { name: "JavaScript", icon: "./src/assets/svg/javascript-svgrepo-com.svg", level: 70 },
];

const Skillspage = () => {
  return (
    <div className="w-full text-white flex flex-col lg:flex-row items-center justify-between gap-10 px-6 sm:px-12 md:px-16 lg:px-20 xl:px-32">
      {/* Left Section - Skills */}
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
        <ScrollSectionleft>
          <motion.h1
            className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-10 text-center lg:text-left italiana-regular"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Skills
          </motion.h1>
          <div className="flex flex-col gap-6 sm:gap-8 w-full">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="flex flex-col sm:flex-row items-left sm:items-start sm:justify-between w-full max-w-cl"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className="flex items-center gap-6 sm:gap-12">
                  <img src={skill.icon} alt={`${skill.name} logo`} className="w-12 h-12 sm:w-14 sm:h-14" />
                  <h3 className="text-lg sm:text-xl font-semibold text-center sm:text-left">{skill.name}</h3>
                </div>
                <div className="flex items-center ml-6 sm:gap-3 mt-3 sm:mt-0">
                  <div className="flex gap-1">
                    {[...Array(10)].map((_, idx) => (
                      <div
                        key={idx}
                        className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${idx < skill.level / 10 ? "bg-blue-500" : "bg-gray-300"}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm sm:text-base font-medium">{skill.level}%</span>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollSectionleft>
      </div>
      {/* Right Section - Interest */}
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <InterestPage />
      </div>
    </div>
  );
};

export default Skillspage;