import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Server,
  Rocket,
  Cpu,
  Layout,
  BookOpen,
} from "lucide-react";
import ScrollSectionsideright from "./scrollanimation/Scrollright";

const interests = [
  {
    icon: <Sparkles size={24} />,
    title: "AI-Powered Development",
    desc: "Exploring intelligent dev workflows, LLM integration, and AI-accelerated engineering.",
    color: "from-pink-500/20 to-purple-500/20 text-pink-400 border-pink-500/30",
  },
  {
    icon: <Server size={24} />,
    title: "Backend Architecture",
    desc: "Designing scalable, resilient distributed APIs, data pipelines, and Clean Architecture systems.",
    color: "from-blue-500/20 to-indigo-500/20 text-blue-400 border-blue-500/30",
  },
  {
    icon: <Rocket size={24} />,
    title: "Product Engineering",
    desc: "Bridging technical architecture with user needs to build meaningful business software solutions.",
    color: "from-amber-500/20 to-yellow-500/20 text-amber-400 border-amber-500/30",
  },
  {
    icon: <Cpu size={24} />,
    title: "Problem Solving",
    desc: "Breaking down complex domain logic and optimizing database queries and algorithmic efficiency.",
    color: "from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/30",
  },
  {
    icon: <Layout size={24} />,
    title: "UI & User Experience",
    desc: "Crafting responsive, accessible, and frictionless interfaces that elevate product usability.",
    color: "from-cyan-500/20 to-sky-500/20 text-cyan-400 border-cyan-500/30",
  },
  {
    icon: <BookOpen size={24} />,
    title: "Continuous Learning",
    desc: "Staying ahead with modern .NET advancements, AI tools, cloud ecosystems, and engineering best practices.",
    color: "from-violet-500/20 to-fuchsia-500/20 text-violet-400 border-violet-500/30",
  },
];

const InterestPage = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 text-white">
      <ScrollSectionsideright>
        <div className="mb-12 text-center">
          <span className="text-xs uppercase tracking-widest font-bold text-[#f0f83d] bg-[#f0f83d]/10 px-3 py-1 rounded-full border border-[#f0f83d]/20">
            Engineering Focus
          </span>
          <motion.h2
            className="text-3xl sm:text-5xl font-bold mt-3 italiana-regular text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Professional Interests
          </motion.h2>
          <p className="text-gray-400 text-sm sm:text-base mt-2 max-w-xl mx-auto">
            Key areas of continuous innovation, architectural passion, and developer exploration.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.title}
              className="group bg-slate-900/70 backdrop-blur-md border border-slate-800/90 hover:border-[#f0f83d]/40 p-6 rounded-3xl flex flex-col items-start text-left transition-all duration-300 hover:shadow-xl hover:shadow-[#f0f83d]/5 hover:-translate-y-1"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <div
                className={`p-3 rounded-2xl bg-gradient-to-br border ${interest.color} mb-4 group-hover:scale-110 transition-transform`}
              >
                {interest.icon}
              </div>
              <h3 className="text-lg font-bold mb-2 text-white group-hover:text-[#f0f83d] transition-colors">
                {interest.title}
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                {interest.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </ScrollSectionsideright>
    </div>
  );
};

export default InterestPage;
