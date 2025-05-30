// src/Home.js
import React from 'react';
import { useNavigate } from "react-router-dom";
import Footer from './Footer';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import ScrollSectionbottom from './scrollanimation/scrollbottom';
import Hero from './Herosection';
import Qualification from './Qualification';
import Experience from './Experience';
import Navbar from './NavBar';

const Home = () => {
  const navigate = useNavigate();

  const handleNavigation = (e) => {
    e.preventDefault();
    navigate("/contact-whatsapp");
  };

  return (
    <div className="bg-[#0f0f3d] text-white font-sans min-h-screen">
      {/* Navbar (optional) */}
      {/* <Navbar /> */}

      <section id="home">
        <Hero />
      </section>

      <section id="about" className="mt-12">
        <About />
      </section>

      <section id="skills" className="mt-16">
        <Skills />
      </section>

      <section id="projects" className="mt-16">
        <Projects />
      </section>

      <section id="qualification" className="mt-16">
        <Qualification />
      </section>

      <section id="experience" className="mt-16">
        <Experience />
      </section>

      <section id="contact" className="mt-10">
        {/* Contact section (add when needed) */}
      </section>

      {/* Thank You Section with reduced top/bottom spacing */}
      <ScrollSectionbottom>
        <div className="my-16 text-center">
          <p className="text-3xl italiana-regular">Thank you for viewing!</p>
        </div>
      </ScrollSectionbottom>

      <section id="footer" className="mt-10">
        <Footer />
      </section>
    </div>
  );
};

export default Home;
