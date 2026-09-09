import React from "react";
import ScrollSectionbottom from "./scrollanimation/scrollbottom";
import ScrollSectionsideright from "./scrollanimation/Scrollright";
import { ArrowRight, Download } from "lucide-react";
import profileImg from "../assets/Profile.png";
import whatsappSvg from "../assets/whatsapp.svg";
import gmailSvg from "../assets/gmaillogo.svg";
import resumePdf from "../assets/R. Sriram.pdf";

const Hero = () => {
  const whatsappLink = "https://wa.me/+919786415970";
  // Direct Google Mail web compose URL:
  const gmailDirectLink = "https://mail.google.com/mail/?view=cm&fs=1&to=rsriram4518@gmail.com";

  return (
    <div className="relative overflow-hidden py-14 md:py-24 px-6 sm:px-12 md:px-16 lg:px-24 max-w-7xl mx-auto">
      {/* Soft ambient gradient backdrop */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-[#f0f83d]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 relative z-10">
        {/* Text Content */}
        <div className="md:w-7/12 flex flex-col items-center md:items-start text-center md:text-left">
          <ScrollSectionbottom>
            {/* Live Availability Badge */}
            <div className="inline-flex items-center gap-2.5 bg-white/5 border border-emerald-500/30 text-emerald-400 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 backdrop-blur-sm shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Available for Opportunities</span>
            </div>

            {/* Name Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold italiana-regular text-white tracking-tight leading-tight">
              Hi, I&apos;m{" "}
              <span className="text-[#f0f83d] drop-shadow-[0_0_20px_rgba(240,248,61,0.25)]">
                Sriram
              </span>
            </h1>

            {/* Subheading / Role */}
            <h2 className="text-xl sm:text-2xl mt-3 font-semibold text-gray-200">
              .NET Developer | AI Engineer
            </h2>

            {/* Professional Description */}
            <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl font-light">
              Building scalable web applications and AI-powered solutions using .NET, React, SQL Server, and modern AI development tools.
            </p>

            {/* Professional Experience Highlights */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 mt-6">
              <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-300 border border-blue-500/30">
                1.5+ Years Experience
              </span>
              <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-semibold bg-[#f0f83d]/10 text-[#f0f83d] border border-[#f0f83d]/30">
                .NET Developer
              </span>
              <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/30">
                6 Months AI Engineering
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3.5 mt-8">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 bg-[#f0f83d] hover:bg-[#dbe32d] text-[#0b0b26] py-3 px-6 rounded-full text-sm sm:text-base font-bold shadow-lg hover:shadow-[#f0f83d]/25 transition-all hover:scale-105"
              >
                <span>View My Work</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={resumePdf}
                download="R. Sriram.pdf"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white py-3 px-6 rounded-full text-sm sm:text-base font-semibold transition-all hover:scale-105 border border-white/15 hover:border-white/30 backdrop-blur-sm"
              >
                <Download size={16} />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-slate-800/80 hover:bg-slate-700/80 text-gray-200 hover:text-white py-3 px-6 rounded-full text-sm sm:text-base font-medium transition-all hover:scale-105 border border-slate-700/80"
              >
                <span>Contact Me</span>
              </a>
            </div>

            {/* Direct Connect Pills */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mt-8 pt-6 border-t border-white/10">
              <span className="text-xs uppercase tracking-wider text-gray-400 font-bold mr-1">
                Direct Connect:
              </span>

              {/* WhatsApp */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/5 hover:bg-emerald-500/10 text-gray-200 hover:text-green-400 px-3.5 py-1.5 rounded-full text-xs font-medium border border-white/5 hover:border-emerald-500/30 transition-all hover:scale-105"
              >
                <img src={whatsappSvg} alt="WhatsApp" className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>

              {/* Direct Google Mail */}
              <a
                href={gmailDirectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/5 hover:bg-yellow-500/10 text-gray-200 hover:text-[#f0f83d] px-3.5 py-1.5 rounded-full text-xs font-medium border border-white/5 hover:border-[#f0f83d]/30 transition-all hover:scale-105"
              >
                <img src={gmailSvg} alt="Google Mail" className="w-4 h-4" />
                <span>Google Mail</span>
              </a>
            </div>
          </ScrollSectionbottom>
        </div>

        {/* Right: Avatar */}
        <div className="md:w-5/12 flex justify-center">
          <ScrollSectionsideright>
            <img
              src={profileImg}
              alt="Sri Ram R Avatar"
              className="rounded-full shadow-2xl w-52 sm:w-64 md:w-72 lg:w-80 h-52 sm:h-64 md:h-72 lg:h-80 object-cover"
            />
          </ScrollSectionsideright>
        </div>
      </div>
    </div>
  );
};

export default Hero;
