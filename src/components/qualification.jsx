import React from "react";
import { motion } from "framer-motion";
import ScrollSectionsideright from "./scrollanimation/Scrollright";
import { GraduationCap, ExternalLink } from "lucide-react";
import anjacLogo from "../assets/anjac.png";
import collegeIcon from "../assets/Untitled.jpg";

const qualifications = [
  {
    degree: "MCA (Master of Computer Applications)",
    passOut: "2025",
    percentage: "74%",
    cgpa: "7.8",
    college: "Ayya Nadar Janaki Ammal College, Sivakasi",
    collegeLink: "https://admission.anjac.edu.in/",
    logo: anjacLogo,
  },
  {
    degree: "B.Sc (Computer Science)",
    passOut: "2023",
    percentage: "72%",
    cgpa: "7.5",
    college: "Ayya Nadar Janaki Ammal College, Sivakasi",
    collegeLink: "https://admission.anjac.edu.in/",
    logo: anjacLogo,
  },
];

const Qualification = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 sm:px-10">
      <ScrollSectionsideright>
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-widest font-bold text-[#f0f83d] bg-[#f0f83d]/10 px-3 py-1 rounded-full border border-[#f0f83d]/20">
            Academic Background
          </span>
          <div className="flex items-center justify-center gap-3 mt-3">
            <img
              src={collegeIcon}
              alt="ANJAC Logo"
              className="w-10 h-10 rounded-full shadow-md object-cover"
            />
            <h2 className="text-3xl sm:text-5xl font-bold italiana-regular text-white">
              My Qualifications
            </h2>
          </div>
          <p className="text-gray-400 text-sm mt-2">
            Educational milestones that laid the foundation for my software engineering journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {qualifications.map((qual, index) => (
            <motion.div
              key={index}
              className="group bg-slate-900/70 backdrop-blur-md border border-slate-800/90 hover:border-[#f0f83d]/40 p-8 rounded-3xl flex flex-col items-center text-center shadow-2xl transition-all duration-300 hover:shadow-[#f0f83d]/5 hover:-translate-y-1"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
            >
              <div className="relative mb-4">
                <img
                  src={qual.logo}
                  alt="College Logo"
                  className="w-20 h-20 rounded-2xl shadow-lg border border-slate-700/60 p-1 bg-slate-800 object-contain group-hover:scale-105 transition-transform"
                />
              </div>

              <h3 className="text-2xl font-bold mb-3 text-[#f0f83d] italiana-regular">
                {qual.degree}
              </h3>

              <div className="bg-slate-800/60 border border-slate-700/50 rounded-xl px-5 py-3 w-full max-w-sm mb-4 space-y-1">
                <p className="text-gray-300 text-sm">
                  Graduation Year: <span className="text-white font-semibold">{qual.passOut}</span>
                </p>
                <p className="text-gray-300 text-sm">
                  Percentage: <span className="text-white font-semibold">{qual.percentage}</span> &bull; CGPA:{" "}
                  <span className="text-[#f0f83d] font-semibold">{qual.cgpa}</span>
                </p>
              </div>

              <a
                href={qual.collegeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 transition-colors font-medium mt-auto"
              >
                <span>{qual.college}</span>
                <ExternalLink size={12} />
              </a>
            </motion.div>
          ))}
        </div>
      </ScrollSectionsideright>
    </div>
  );
};

export default Qualification;
