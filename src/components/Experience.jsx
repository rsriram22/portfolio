import React from "react";
import { motion } from "framer-motion";
import ScrollSectionsideright from "./scrollanimation/Scrollright";
import { Briefcase, Layers, Bot, Laptop, Calendar, ExternalLink } from "lucide-react";

const getBadgeStyle = (badge) => {
  switch (badge) {
    case "React":
      return "bg-cyan-500/10 text-cyan-300 border-cyan-500/30 shadow-[0_0_10px_rgba(6,182,212,0.15)]";
    case "Node.js":
      return "bg-emerald-500/10 text-emerald-300 border-emerald-500/30 shadow-[0_0_10px_rgba(16,185,129,0.15)]";
    case "PostgreSQL":
    case "Postgres":
      return "bg-sky-500/10 text-sky-300 border-sky-500/30 shadow-[0_0_10px_rgba(14,165,233,0.15)]";
    case ".NET":
    case "ASP.NET Core":
    case "C#":
    case "Entity Framework Core":
    case "Dapper":
      return "bg-purple-500/10 text-purple-300 border-purple-500/30 shadow-[0_0_10px_rgba(168,85,247,0.15)]";
    case "MS SQL Server":
    case "SQL Server":
    case "LINQ":
      return "bg-blue-500/10 text-blue-300 border-blue-500/30 shadow-[0_0_10px_rgba(59,130,246,0.15)]";
    case "JavaScript":
      return "bg-yellow-500/10 text-yellow-300 border-yellow-500/30 shadow-[0_0_10px_rgba(234,179,8,0.15)]";
    case "REST APIs":
      return "bg-indigo-500/10 text-indigo-300 border-indigo-500/30 shadow-[0_0_10px_rgba(99,102,241,0.15)]";
    default:
      return "bg-blue-500/10 text-blue-300 border-blue-500/30 shadow-[0_0_10px_rgba(59,130,246,0.15)]";
  }
};

const companies = [
  {
    name: "GreenBotz",
    companyLink: "https://greenbotz.co/",
    productName: "Splus",
    productLink: "https://portal.preprod.splus.one/login",
    role: ".NET Developer / Full Stack Developer",
    techStack: "React · .NET · ASP.NET Core · MS SQL Server",
    duration: "1.5+ Years",
    isCurrent: true,
    icon: <Bot size={24} className="text-emerald-400" />,
    iconBoxStyle: "bg-emerald-500/15 border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.25)]",
    cardBorder: "border-emerald-500/50 hover:border-emerald-400",
    cardShadow: "shadow-[0_0_25px_rgba(16,185,129,0.12),0_0_20px_rgba(56,130,246,0.08)] hover:shadow-[0_0_30px_rgba(16,185,129,0.28)]",
    bulletColor: "bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.7)]",
    description:
      "Worked on enterprise web application development at GreenBotz for their flagship SaaS platform Splus using React, .NET, ASP.NET Core, and MS SQL Server.",
    technologies: [
      ".NET",
      "React",
      "ASP.NET Core",
      "C#",
      "MS SQL Server",
      "Entity Framework Core",
      "Dapper",
      "LINQ",
      "REST APIs",
    ],
    responsibilities: [
      "Developing and maintaining enterprise RESTful APIs using ASP.NET Core and C# for the Splus platform.",
      "Building modern, responsive frontend modules, dashboards, and reporting interfaces using React.",
      "Designing and optimizing MS SQL Server database structures, stored procedures, and high-performance queries.",
      "Working with Entity Framework Core, Dapper, and LINQ for database operations and data-access logic.",
      "Implementing core business modules including CRM, attendance tracking, reporting dashboards, and operational workflows.",
      "Applying Clean Architecture, CQRS, Repository Pattern, Dependency Injection, and SOLID design principles.",
      "Integrating third-party APIs and streamlining frontend-to-backend data communication.",
      "Conducting debugging, application performance tuning, and continuous feature enhancements.",
    ],
  },
  {
    name: "Meganar Technologies",
    companyLink: null,
    productName: "LearnHub",
    productLink: "https://learnhub.vsmartengine.com/",
    role: "Full Stack Developer Intern",
    techStack: "React · Node.js · PostgreSQL",
    duration: "6 Months",
    badgeText: "Internship",
    badgeStyle: "bg-amber-500/15 text-amber-300 border border-amber-500/40 shadow-[0_0_12px_rgba(245,158,11,0.25)]",
    isCurrent: false,
    icon: <Laptop size={24} className="text-pink-400" />,
    iconBoxStyle: "bg-pink-500/15 border-pink-500/40 shadow-[0_0_15px_rgba(236,72,153,0.2)]",
    cardBorder: "border-[#263B6B] hover:border-[#3882F6]",
    cardShadow: "shadow-[0_0_20px_rgba(56,130,246,0.08)] hover:shadow-[0_0_25px_rgba(56,130,246,0.25)]",
    bulletColor: "bg-pink-400 shadow-[0_0_8px_rgba(236,72,153,0.6)]",
    description:
      "Worked on web application development for the LearnHub platform using React, Node.js, and PostgreSQL, focusing on responsive UI components and backend database integration.",
    technologies: [
      "React",
      "Node.js",
      "PostgreSQL",
      "JavaScript",
      "REST APIs",
    ],
    responsibilities: [
      "Developed responsive UI components and interactive user interfaces using React.",
      "Designed and implemented RESTful backend APIs and endpoints using Node.js.",
      "Managed PostgreSQL database schemas, relational tables, and query optimization.",
      "Integrated frontend components with backend services for smooth client-server data flow.",
      "Optimized web performance, responsive layouts, and cross-browser compatibility.",
      "Debugged application issues and collaborated on feature enhancements for the LearnHub platform.",
    ],
  },
];

const Experience = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 sm:px-10">
      <ScrollSectionsideright>
        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-widest font-bold text-[#f0f83d] bg-[#f0f83d]/10 px-3 py-1 rounded-full border border-[#f0f83d]/20">
            Work Journey
          </span>
          <motion.h2
            className="text-3xl sm:text-5xl font-bold mt-3 italiana-regular text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Professional Experience
          </motion.h2>
          <p className="text-gray-400 text-sm sm:text-base mt-2 max-w-2xl mx-auto">
            Chronological career history delivering production .NET systems, dynamic React interfaces, and scalable full-stack web applications.
          </p>
        </div>

        {/* Company-wise Cards Stack */}
        <div className="flex flex-col gap-8 w-full">
          {companies.map((company, index) => (
            <motion.div
              key={company.name + index}
              className={`group relative rounded-[18px] p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 ${company.cardBorder} ${company.cardShadow} border`}
              style={{
                background: "rgba(15, 26, 56, 0.85)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {/* Card Header: Icon, Company Name, Role, Current/Internship Badge & Duration */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div className="flex items-start sm:items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border ${company.iconBoxStyle}`}
                  >
                    {company.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 flex-wrap">
                      {company.companyLink ? (
                        <a
                          href={company.companyLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xl sm:text-2xl font-bold text-white tracking-tight hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5 group/link"
                        >
                          {company.name}
                          <ExternalLink size={16} className="text-gray-400 group-hover/link:text-emerald-400 transition-colors" />
                        </a>
                      ) : (
                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                          {company.name}
                        </h3>
                      )}

                      {company.productName && (
                        <a
                          href={company.productLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-semibold bg-blue-500/15 text-blue-300 border border-blue-400/40 hover:bg-blue-500/25 hover:border-blue-300 transition-all shadow-[0_0_12px_rgba(59,130,246,0.25)]"
                          title={`Visit ${company.productName} portal`}
                        >
                          <span className="text-gray-300 text-[11px] font-normal">Product:</span>
                          <span className="text-white font-bold">{company.productName}</span>
                          <ExternalLink size={11} className="text-blue-300" />
                        </a>
                      )}

                      {company.isCurrent && (
                        <span className="inline-flex items-center gap-1.5 bg-emerald-500/15 text-emerald-400 border border-emerald-400/50 px-3 py-0.5 rounded-full text-[11px] font-bold tracking-wider uppercase shadow-[0_0_12px_rgba(16,185,129,0.35)]">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                          </span>
                          CURRENT
                        </span>
                      )}
                      {company.badgeText && !company.isCurrent && (
                        <span
                          className={`inline-flex items-center px-3 py-0.5 rounded-full text-[11px] font-semibold tracking-wider uppercase ${company.badgeStyle}`}
                        >
                          {company.badgeText}
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-semibold text-gray-200 mt-0.5">
                      {company.role}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-gray-400 mt-1">
                      <span className="text-blue-300 font-medium">
                        {company.techStack}
                      </span>
                      {company.duration && (
                        <>
                          <span className="text-gray-500">&bull;</span>
                          <span className="text-gray-300 font-medium flex items-center gap-1">
                            <Calendar size={12} className="text-gray-400" />
                            {company.duration}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Short Description */}
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-5">
                {company.description}
              </p>

              {/* Technology Stack Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {company.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className={`inline-flex items-center rounded-[20px] px-3 py-1.5 text-xs font-medium border transition-all hover:scale-105 cursor-default ${getBadgeStyle(
                      tech
                    )}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Responsibilities Header & Bullet Points */}
              <div className="pt-4 border-t border-slate-800/80">
                <span className="text-[11px] uppercase tracking-wider font-bold text-gray-400 block mb-3">
                  Key Responsibilities:
                </span>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2.5">
                  {company.responsibilities.map((resp, rIdx) => (
                    <li
                      key={rIdx}
                      className="flex items-start gap-2.5 text-xs sm:text-[13px] text-gray-300 leading-relaxed"
                    >
                      <span
                        className={`inline-block w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${company.bulletColor}`}
                      />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </ScrollSectionsideright>
    </div>
  );
};

export default Experience;
