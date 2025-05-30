import React from "react";
import { motion } from "framer-motion";
import ScrollSectionsideright from "./scrollanimation/Scrollright";

const experiences = [
  {
    company: "Meganar Technologies",
    duration: "6 Months Internship",
    role: "UI/UX Designer & Frontend Developer",
    projectName: "LearnHub",
    projectLink: "https://learnhub.vsmartengine.com/",
    description:
      "Designed and developed UI/UX components, improved user experience, and implemented responsive designs for the LearnHub platform.",
  },
  {
    company: "Gateway Software Solutions",
    duration: "3 Months Internship",
    role: "MERN Stack Developer",
    projectName: "Book Haven",
    projectLink: "https://bookhaven-example.com",
    description:
      "Developed a full-stack book store web app using MongoDB, Express, React, and Node.js, focusing on seamless user interaction and secure backend integration.",
  },
];

const Experience = () => {
  return (
    <div className="bg-[#0f0f3d] text-white flex flex-col items-center justify-start px-4">
      <ScrollSectionsideright>
        <motion.h1
          className="text-4xl font-bold mb-8 italiana-regular text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Experience
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-3xl flex flex-col items-start text-left shadow-lg hover:bg-gray-700 transition-all"
              style={{ minWidth: "360px" }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-3 text-[#f0f83d]">
                {exp.company}
              </h2>

              <div className="space-y-1 text-lg">
                <p>
                  <span className="font-semibold text-white">Duration:</span>{" "}
                  {exp.duration}
                </p>
                <p>
                  <span className="font-semibold text-white">Role:</span>{" "}
                  {exp.role}
                </p>
                <p>
                  <span className="font-semibold text-white">Project Name:</span>{" "}
                  <a
                    href={exp.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-blue-400 hover:text-blue-600 font-medium"
                  >
                    {exp.projectName}
                  </a>
                </p>
              </div>

              <p className="italic text-gray-300 text-sm mt-4 leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </ScrollSectionsideright>
    </div>
  );
};

export default Experience;
