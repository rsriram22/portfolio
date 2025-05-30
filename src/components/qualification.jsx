import React from "react";
import { motion } from "framer-motion";
import ScrollSectionsideright from "./scrollanimation/Scrollright";

const qualifications = [
  {
    degree: "MCA (Master of Computer Applications)",
    passOut: "2025",
    percentage: "74%",
    cgpa: "7.8",
    college: "Ayya Nadar Janaki Ammal College, Sivakasi",
    collegeLink: "https://admission.anjac.edu.in/",
    logo: "./src/assets/anjac.png",
  },
  {
    degree: "B.Sc (Computer Science)",
    passOut: "2023",
    percentage: "72%",
    cgpa: "7.5",
    college: "Ayya Nadar Janaki Ammal College, Sivakasi",
    collegeLink: "https://admission.anjac.edu.in/",
    logo: "./src/assets/anjac.png",
  },
];

const Qualification = () => {
  return (
    <div className="bg-[#0f0f3d] text-white flex flex-col items-center justify-start p-6 pt-20 pb-10">
      <ScrollSectionsideright>
        <div className="flex items-center justify-center gap-4 mb-6">
          <motion.img
            src="./src/assets/Untitled.jpg"
            alt="ANJAC Logo"
            className="w-12 h-12 rounded-full shadow-md"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.h1
            className="text-4xl font-bold italiana-regular text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My Qualifications
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
          {qualifications.map((qual, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-10 rounded-2xl flex flex-col items-center text-center shadow-lg hover:bg-gray-700 transition-all hover:scale-105"
              style={{ minHeight: "340px", minWidth: "360px" }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
            >
              <motion.img
                src={qual.logo}
                alt="College Logo"
                className="w-16 h-16 mb-3 rounded-full shadow-md hover:scale-110 transition-transform"
              />
              <h2 className="text-2xl font-semibold mb-3 text-[#f0f83d]">{qual.degree}</h2>
              <p className="mb-1 text-lg">
                Pass out: <span className="font-medium">{qual.passOut}</span>
              </p>
              <p className="mb-1 text-lg">
                Percentage: <span className="font-medium">{qual.percentage}</span> / CGPA:{" "}
                <span className="font-medium">{qual.cgpa}</span>
              </p>
              <a
                href={qual.collegeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="italic text-blue-400 hover:text-blue-600 text-base underline mt-2"
              >
                {qual.college}
              </a>
            </motion.div>
          ))}
        </div>
      </ScrollSectionsideright>
    </div>
  );
};

export default Qualification;
