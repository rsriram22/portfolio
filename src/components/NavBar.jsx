import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 shadow-lg transition-colors duration-300 ${
        scrolled ? "bg-slate-900 text-white" : "bg-[#0f0f3d] text-[#f0f83d]"
      }`}
    >
      <div className="flex justify-between items-center p-2">
        <div className="flex items-center space-x-2">
          <img
            className="h-14 w-14"
            src="./src/assets/port-removebg-preview.png"
            alt="Logo"
          />
          <h1 className="text-xl font-bold italiana-regular">Portfolio</h1>
        </div>

        <div className="hidden md:flex space-x-6 items-center">
          <a href="#home" className="transition duration-300 hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium">
            Home
          </a>
          <a href="#about" className="transition duration-300 hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium">
            About
          </a>
          <a href="#projects" className="transition duration-300 hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium">
            Projects
          </a>
          <a href="#qualification" className="transition duration-300 hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium">
            Qualification
          </a>
          <a href="#experience" className="transition duration-300 hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium">
            Experience
          </a>
          <a href="#footer" className="transition duration-300 hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium">
            Contact
          </a>
        </div>

        <div className="hidden md:flex space-x-6 items-center">
          <a
            href="https://github.com/rsriram22"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#0f0f3d] px-4 py-2 rounded-md hover:bg-gray-300 transition duration-300"
          >
            GitHub
          </a>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMenuOpen && (
        <div
          className={`md:hidden p-4 space-y-2 ${
            scrolled ? "bg-slate-900 text-white" : "bg-[#0f0f3d] text-[#f0f83d]"
          }`}
        >
          <a href="#home" className="block px-3 py-2 hover:text-gray-400" onClick={() => setIsMenuOpen(false)}>
            Home
          </a>
          <a href="#about" className="block px-3 py-2 hover:text-gray-400" onClick={() => setIsMenuOpen(false)}>
            About
          </a>
          <a href="#projects" className="block px-3 py-2 hover:text-gray-400" onClick={() => setIsMenuOpen(false)}>
            Projects
          </a>
          <a href="#qualification" className="block px-3 py-2 hover:text-gray-400" onClick={() => setIsMenuOpen(false)}>
            Qualification
          </a>
          <a href="#experience" className="block px-3 py-2 hover:text-gray-400" onClick={() => setIsMenuOpen(false)}>
            Experience
          </a>
          <a href="#footer" className="block px-3 py-2 hover:text-gray-400" onClick={() => setIsMenuOpen(false)}>
            Contact
          </a>
          <a
            href="https://github.com/rsriram22"
            target="_blank"
            rel="noopener noreferrer"
            className="m-2 px-2.5 py-2 bg-white text-[#0f0f3d] rounded-md block text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            GitHub
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
