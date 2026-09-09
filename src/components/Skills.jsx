import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Sparkles,
  ChevronRight,
  Database,
  Network,
  Cpu,
  Wrench,
  Brain,
  Server,
  Box,
  Lightbulb,
  Monitor,
  BarChart3,
} from "lucide-react";
import { SiReact } from "react-icons/si";

// Custom C# Badge Icon matching the purple hexagon badge in the design
const CsharpIcon = () => (
  <div className="relative flex items-center justify-center">
    <svg
      className="w-10 h-10 text-purple-400"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2L3 7.5v9L12 22l9-5.5v-9L12 2z" />
    </svg>
    <span className="absolute font-black text-purple-200 text-[11px] tracking-tight">
      C#
    </span>
  </div>
);

// Custom AI Chip Icon matching the magenta processor in the design
const AiChipIcon = () => (
  <div className="relative flex items-center justify-center">
    <Cpu size={36} className="text-pink-400" />
    <span className="absolute font-black text-pink-100 text-[9px] tracking-tighter">
      AI
    </span>
  </div>
);

// Technical Skills (6 Cards)
const technicalSkills = [
  {
    title: "Backend Development",
    description: "C#, .NET 8, ASP.NET Core Web API, Entity Framework Core, Dapper",
    icon: <CsharpIcon />,
    boxBg: "rgba(147, 51, 234, 0.12)",
    boxBorder: "rgba(147, 51, 234, 0.45)",
    boxShadow: "rgba(147, 51, 234, 0.2)",
    glowColor: "group-hover:border-purple-500/40",
  },
  {
    title: "Frontend Development",
    description: "React, JavaScript, HTML5, CSS3, Tailwind CSS",
    icon: <SiReact size={34} className="text-cyan-400" />,
    boxBg: "rgba(6, 182, 212, 0.12)",
    boxBorder: "rgba(6, 182, 212, 0.45)",
    boxShadow: "rgba(6, 182, 212, 0.2)",
    glowColor: "group-hover:border-cyan-500/40",
  },
  {
    title: "Database & APIs",
    description: "MS SQL Server, LINQ, REST APIs, Swagger, JWT",
    icon: <Database size={32} className="text-blue-400" />,
    boxBg: "rgba(56, 130, 246, 0.12)",
    boxBorder: "rgba(56, 130, 246, 0.45)",
    boxShadow: "rgba(56, 130, 246, 0.2)",
    glowColor: "group-hover:border-blue-500/40",
  },
  {
    title: "Architecture & Engineering",
    description: "Clean Architecture, CQRS, Repository Pattern, Dependency Injection, SOLID",
    icon: <Network size={32} className="text-indigo-400" />,
    boxBg: "rgba(99, 102, 241, 0.12)",
    boxBorder: "rgba(99, 102, 241, 0.45)",
    boxShadow: "rgba(99, 102, 241, 0.2)",
    glowColor: "group-hover:border-indigo-500/40",
  },
  {
    title: "AI Engineering",
    description: "Claude Code, Prompt Engineering, AI-assisted development, LLM integration, RAG basics",
    icon: <AiChipIcon />,
    boxBg: "rgba(236, 72, 153, 0.12)",
    boxBorder: "rgba(236, 72, 153, 0.45)",
    boxShadow: "rgba(236, 72, 153, 0.2)",
    glowColor: "group-hover:border-pink-500/40",
  },
  {
    title: "Tools & DevOps",
    description: "Git, GitHub, Postman, Visual Studio, VS Code, Azure basics",
    icon: <Wrench size={30} className="text-teal-400 -rotate-45" />,
    boxBg: "rgba(20, 184, 166, 0.12)",
    boxBorder: "rgba(20, 184, 166, 0.45)",
    boxShadow: "rgba(20, 184, 166, 0.2)",
    glowColor: "group-hover:border-teal-500/40",
  },
];

// Interests (6 Cards)
const interests = [
  {
    title: "AI-Powered Development",
    description: "Exploring how LLMs and coding agents can accelerate product development.",
    icon: <Brain size={32} className="text-indigo-400" />,
    boxBg: "rgba(99, 102, 241, 0.12)",
    boxBorder: "rgba(99, 102, 241, 0.45)",
    boxShadow: "rgba(99, 102, 241, 0.2)",
    glowColor: "group-hover:border-indigo-500/40",
  },
  {
    title: "Backend Architecture",
    description: "Designing maintainable APIs, business logic, and scalable services.",
    icon: <Server size={32} className="text-cyan-400" />,
    boxBg: "rgba(6, 182, 212, 0.12)",
    boxBorder: "rgba(6, 182, 212, 0.45)",
    boxShadow: "rgba(6, 182, 212, 0.2)",
    glowColor: "group-hover:border-cyan-500/40",
  },
  {
    title: "Product Engineering",
    description: "Turning business workflows into complete, usable software modules.",
    icon: <Box size={32} className="text-purple-400" />,
    boxBg: "rgba(168, 85, 247, 0.12)",
    boxBorder: "rgba(168, 85, 247, 0.45)",
    boxShadow: "rgba(168, 85, 247, 0.2)",
    glowColor: "group-hover:border-purple-500/40",
  },
  {
    title: "Problem Solving",
    description: "Debugging complex issues and improving application performance.",
    icon: <Lightbulb size={32} className="text-amber-400" />,
    boxBg: "rgba(245, 158, 11, 0.12)",
    boxBorder: "rgba(245, 158, 11, 0.45)",
    boxShadow: "rgba(245, 158, 11, 0.2)",
    glowColor: "group-hover:border-amber-500/40",
  },
  {
    title: "UI & User Experience",
    description: "Creating clean, responsive interfaces that make workflows easier.",
    icon: <Monitor size={32} className="text-pink-400" />,
    boxBg: "rgba(244, 63, 94, 0.12)",
    boxBorder: "rgba(244, 63, 94, 0.45)",
    boxShadow: "rgba(244, 63, 94, 0.2)",
    glowColor: "group-hover:border-pink-500/40",
  },
  {
    title: "Continuous Learning",
    description: "Exploring modern .NET, AI engineering, cloud, and developer tooling.",
    icon: <BarChart3 size={32} className="text-emerald-400" />,
    boxBg: "rgba(16, 185, 129, 0.12)",
    boxBorder: "rgba(16, 185, 129, 0.45)",
    boxShadow: "rgba(16, 185, 129, 0.2)",
    glowColor: "group-hover:border-emerald-500/40",
  },
];

const Skillspage = () => {
  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10 text-white overflow-hidden">
      {/* Decorative Watermark - Left */}
      <div className="hidden 2xl:flex flex-col text-[10px] font-mono tracking-[0.35em] text-slate-600/70 uppercase space-y-1.5 select-none pointer-events-none absolute left-2 top-20">
        <span>C O D E</span>
        <span>B U I L D</span>
        <span>L E A R N</span>
        <span>G R O W</span>
      </div>

      {/* Decorative Watermark - Right */}
      <div className="hidden 2xl:flex flex-col items-end text-slate-500/70 text-xs italic select-none pointer-events-none absolute right-4 top-16 font-serif leading-relaxed">
        <span>Build</span>
        <span className="pr-2">Solve</span>
        <span className="pr-4">Improve</span>
        <span className="pr-6 underline decoration-slate-600 underline-offset-4">Repeat</span>
      </div>

      {/* Main Header */}
      <div className="text-center mb-12 relative z-10">
        <div className="inline-flex items-center gap-2 bg-[#0c1530]/80 border border-blue-500/40 text-blue-300 text-xs font-semibold px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.25)] mb-4 uppercase tracking-wider backdrop-blur-sm">
          <span>Skills &amp; Interests</span>
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white via-blue-100 to-indigo-300 bg-clip-text text-transparent mb-3">
          Skills &amp; Interests
        </h2>

        <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto mb-6 font-normal">
          Building scalable .NET applications and exploring practical AI-powered solutions.
        </p>

        {/* 3 Metric Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <div className="inline-flex items-center gap-2 bg-[#0e1738] border border-blue-500/30 text-blue-200 px-4 py-2 rounded-full text-xs sm:text-sm font-medium shadow-sm hover:border-blue-500/50 transition-colors">
            <Briefcase size={15} className="text-blue-400 shrink-0" />
            <span>1.5+ Years Experience</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-[#0e1738] border border-indigo-500/30 text-indigo-200 px-4 py-2 rounded-full text-xs sm:text-sm font-medium shadow-sm hover:border-indigo-500/50 transition-colors">
            <span className="w-4 h-4 rounded-full bg-blue-600 text-[9px] font-bold text-white flex items-center justify-center shrink-0">
              .NET
            </span>
            <span>.NET Developer</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-[#0e1738] border border-cyan-500/30 text-cyan-200 px-4 py-2 rounded-full text-xs sm:text-sm font-medium shadow-sm hover:border-cyan-500/50 transition-colors">
            <Sparkles size={15} className="text-cyan-400 shrink-0" />
            <span>AI Engineering &mdash; 6 Months</span>
          </div>
        </div>
      </div>

      {/* Sub-section 1: Technical Skills */}
      <div className="relative z-10 mb-14">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-6 bg-gradient-to-b from-blue-400 to-indigo-500 rounded-full inline-block shrink-0" />
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Technical Skills
            </h3>
            <span className="text-gray-400 text-xs sm:text-sm ml-1 hidden md:inline">
              Technologies and tools I work with to build real-world solutions.
            </span>
          </div>
          <div className="text-xs font-mono text-blue-400/80 tracking-wider">
            &#47;&#47; TURN IDEAS INTO IMPACT
          </div>
        </div>

        {/* 6 Technical Skills Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {technicalSkills.map((item, index) => (
            <motion.div
              key={item.title}
              className={`group relative bg-[#090f26]/80 hover:bg-[#0d1536]/90 border border-blue-500/20 ${item.glowColor} rounded-2xl p-4 sm:p-5 transition-all duration-300 shadow-xl shadow-black/30 hover:shadow-[0_0_25px_rgba(56,130,246,0.12)] flex items-center gap-4 hover:-translate-y-1 cursor-default`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
            >
              {/* 78px x 78px Icon Box */}
              <div
                className="w-[68px] h-[68px] sm:w-[78px] sm:h-[78px] rounded-[16px] shrink-0 flex items-center justify-center transition-transform group-hover:scale-105"
                style={{
                  background: item.boxBg,
                  border: `1px solid ${item.boxBorder}`,
                  boxShadow: `0 0 20px ${item.boxShadow}`,
                }}
              >
                {item.icon}
              </div>

              {/* Text Information */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-blue-200 transition-colors truncate">
                    {item.title}
                  </h4>
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:border-blue-400/50 group-hover:bg-blue-500/20 transition-all shrink-0">
                    <ChevronRight size={13} />
                  </div>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Sub-section 2: Interests (with anchor target) */}
      <div id="interests" className="relative z-10 pt-2">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-6 bg-gradient-to-b from-blue-400 to-indigo-500 rounded-full inline-block shrink-0" />
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Interests
            </h3>
            <span className="text-gray-400 text-xs sm:text-sm ml-1 hidden md:inline">
              What keeps me curious and motivated as a developer.
            </span>
          </div>
          <div className="text-xs font-mono text-blue-400/80 tracking-wider">
            &#47;&#47; ALWAYS CURIOUS
          </div>
        </div>

        {/* 6 Interests Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {interests.map((item, index) => (
            <motion.div
              key={item.title}
              className={`group relative bg-[#090f26]/80 hover:bg-[#0d1536]/90 border border-blue-500/20 ${item.glowColor} rounded-2xl p-4 sm:p-5 transition-all duration-300 shadow-xl shadow-black/30 hover:shadow-[0_0_25px_rgba(56,130,246,0.12)] flex items-center gap-4 hover:-translate-y-1 cursor-default`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.2 + index * 0.05 }}
            >
              {/* 78px x 78px Icon Box */}
              <div
                className="w-[68px] h-[68px] sm:w-[78px] sm:h-[78px] rounded-[16px] shrink-0 flex items-center justify-center transition-transform group-hover:scale-105"
                style={{
                  background: item.boxBg,
                  border: `1px solid ${item.boxBorder}`,
                  boxShadow: `0 0 20px ${item.boxShadow}`,
                }}
              >
                {item.icon}
              </div>

              {/* Text Information */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-blue-200 transition-colors truncate">
                    {item.title}
                  </h4>
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:border-blue-400/50 group-hover:bg-blue-500/20 transition-all shrink-0">
                    <ChevronRight size={13} />
                  </div>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Footer Border & Monospace Tagline */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] sm:text-[11px] font-mono tracking-widest text-slate-500 uppercase mt-14 pt-6 border-t border-slate-800/80 text-center sm:text-left">
        <div>&mdash; PASSIONATE ABOUT TECHNOLOGY</div>
        <div>BETTER SOLUTIONS EVERY DAY &mdash;</div>
      </div>
    </div>
  );
};

export default Skillspage;