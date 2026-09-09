import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import portLogo from "../assets/port-removebg-preview.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#10103d]/90 backdrop-blur-md border-b border-slate-800/80 shadow-xl shadow-black/20 text-white"
          : "bg-[#10103d]/60 backdrop-blur-sm border-b border-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-8 py-3">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center space-x-3 group">
          <div className="relative">
            <img
              className="h-10 w-10 sm:h-12 sm:w-12 group-hover:scale-105 transition-transform"
              src={portLogo}
              alt="Sriram Portfolio"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-wide text-[#f0f83d] group-hover:text-white transition-colors italiana-regular">
              Sriram
            </span>
            <span className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">
              Full Stack Developer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex space-x-1 items-center bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-[#f0f83d] hover:bg-white/5 transition-all px-3.5 py-1.5 rounded-full text-xs font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* GitHub Button */}
        <div className="hidden md:flex items-center">
          <a
            href="https://github.com/rsriram22"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#f0f83d] hover:bg-[#dbe32d] text-[#0f0f3d] font-bold px-4 py-2 rounded-full text-xs transition-all shadow-md hover:shadow-[#f0f83d]/20 hover:scale-105"
          >
            <FaGithub size={16} />
            <span>GitHub</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="lg:hidden p-2 rounded-xl text-gray-300 hover:text-white hover:bg-slate-800/80 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#10103d]/95 backdrop-blur-xl border-b border-slate-800 px-6 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-3 py-2.5 rounded-xl text-sm font-medium text-gray-300 hover:text-[#f0f83d] hover:bg-slate-800/60 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://github.com/rsriram22"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center justify-center gap-2 w-full py-2.5 bg-[#f0f83d] text-[#0f0f3d] font-bold rounded-xl text-sm shadow-md"
            onClick={() => setIsMenuOpen(false)}
          >
            <FaGithub size={16} />
            GitHub Profile
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
