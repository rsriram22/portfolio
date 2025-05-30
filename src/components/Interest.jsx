import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaCamera, FaPencilRuler, FaChartBar } from "react-icons/fa";

import ScrollSectionsideright from "./scrollanimation/Scrollright";

const interests = [
  {
    icon: <FaCode size={30} />,
    title: "Coding",
    desc: "Building web apps & exploring new technologies.",
  },
  {
    icon: <FaCamera size={30} />,
    title: "Photography",
    desc: "Capturing moments through the lens.",
  },
  {
    icon: <FaPencilRuler size={30} />,
    title: "Designing",
    desc: "Creating modern and user-friendly UI designs.",
  },
  {
    icon: <FaChartBar size={30} />,
    title: "Data Analysis",
    desc: "Analyzing patterns and insights from data.",
  },
];

const InterestPage = () => {
  return (
    <div className="text-white flex flex-col items-center justify-center">
      <ScrollSectionsideright>
        <motion.h1
          className="text-4xl font-bold mb-10 italiana-regular text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Interests
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-4xl">
          {interests.map((interest, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-2xl flex flex-col items-center text-center shadow-lg hover:bg-gray-700 transition-all"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
            >
              <div className="text-blue-400 mb-4">{interest.icon}</div>
              <h2 className="text-xl font-semibold mb-2">{interest.title}</h2>
              <p className="text-gray-300 text-sm">{interest.desc}</p>
            </motion.div>
          ))}
        </div>
      </ScrollSectionsideright>
    </div>
  );
};

export default InterestPage;
