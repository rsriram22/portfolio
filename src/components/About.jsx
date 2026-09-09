// src/About.js
import React from 'react';
import ScrollSectionbottom from './scrollanimation/scrollbottom';
import ScrollSectiontop from './scrollanimation/scrolltop';
import aboutIcon from '../assets/about.png';
import { Code, Database, Cpu } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Database className="text-cyan-400" size={20} />,
      label: "Backend & .NET Architecture",
      desc: "C#, ASP.NET Core, Web APIs, EF Core, Dapper",
    },
    {
      icon: <Code className="text-purple-400" size={20} />,
      label: "Frontend & Full Stack",
      desc: "React, Tailwind CSS, REST APIs, Dashboards",
    },
    {
      icon: <Cpu className="text-pink-400" size={20} />,
      label: "AI-Assisted Engineering",
      desc: "Claude Code, Prompt Engineering, LLM Integration",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-6 sm:px-12">
      <ScrollSectiontop>
        <div className="text-center mb-8">
          <span className="text-xs uppercase tracking-widest font-bold text-[#f0f83d] bg-[#f0f83d]/10 px-3 py-1 rounded-full border border-[#f0f83d]/20">
            About Me
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold mt-3 italiana-regular text-white flex items-center justify-center gap-3">
            <img src={aboutIcon} alt="About" className="w-10 h-10 object-contain inline-block" />
            Discover My Journey
          </h2>
        </div>
      </ScrollSectiontop>

      <ScrollSectionbottom>
        <div className="bg-slate-900/70 backdrop-blur-md border border-slate-800/90 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="space-y-4 text-gray-300 text-base sm:text-lg leading-relaxed text-center max-w-4xl mx-auto font-light">
            <p>
              I am a <span className="text-[#f0f83d] font-medium">.NET Developer</span> with <span className="text-white font-medium">1.5+ years of experience</span> building web applications, REST APIs, database-driven systems, and business workflow solutions. My core experience includes <span className="text-white font-medium">C#, ASP.NET Core, React, SQL Server, Entity Framework Core, Dapper, LINQ</span>, and modern software architecture patterns.
            </p>
            <p>
              During the last 6 months, I have also worked extensively with <span className="text-white font-medium">AI-assisted development</span> using tools such as <span className="text-[#f0f83d] font-medium">Claude Code</span>, focusing on faster implementation, debugging, refactoring, prompt engineering, and exploring AI-powered product solutions.
            </p>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 pt-8 border-t border-slate-800/80">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-4 flex items-center gap-3.5 hover:border-[#f0f83d]/30 transition-colors"
              >
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">{item.label}</h4>
                  <p className="text-xs text-gray-400 mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollSectionbottom>
    </div>
  );
};

export default About;
