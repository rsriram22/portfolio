import React from 'react';
import { useNavigate } from "react-router-dom";
import Footer from './Footer';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import ScrollSectionbottom from './scrollanimation/scrollbottom';
import Hero from './Herosection';
import Qualification from './qualification';
import Experience from './Experience';
import ContactUs from './ContactUs';

const Home = () => {
  const navigate = useNavigate();

  const handleNavigation = (e) => {
    e.preventDefault();
    navigate("/contact-whatsapp");
  };

  return (
    <div className="site-background text-white font-sans min-h-screen selection:bg-[#f0f83d] selection:text-[#0f0f3d]">
      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about" className="mt-14">
        <About />
      </section>

      {/* Skills Section */}
      <section id="skills" className="mt-20">
        <Skills />
      </section>

      {/* Experience Section */}
      <section id="experience" className="mt-20">
        <Experience />
      </section>

      {/* Projects Section */}
      <section id="projects" className="mt-20">
        <Projects />
      </section>

      {/* Academic Qualifications Section */}
      <section id="qualification" className="mt-20">
        <Qualification />
      </section>

      {/* Contact Section */}
      <section id="contact" className="mt-20">
        <ContactUs />
      </section>

      {/* Thank You Section */}
      <ScrollSectionbottom>
        <div className="my-16 text-center">
          <p className="text-3xl italiana-regular text-slate-300">Thank you for viewing!</p>
        </div>
      </ScrollSectionbottom>

      {/* Footer */}
      <section id="footer" className="mt-10">
        <Footer />
      </section>
    </div>
  );
};

export default Home;
