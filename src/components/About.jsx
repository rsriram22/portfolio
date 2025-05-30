// src/About.js
import React from 'react';
import ScrollSectionside from './scrollanimation/scrolltop';
import ScrollSectionbottom from './scrollanimation/scrollbottom';
import ScrollSectiontop from './scrollanimation/scrolltop';

const About = () => {
  return (
    <div className="mt-6 w-full justify-center">
      <ScrollSectiontop>
        <h2 className="text-4xl italiana-regular flex items-center justify-center">
          <img src="./src/assets/about.png" alt="" className='w-20 h-20 px-3 py-3' />
          About Me
        </h2>
      </ScrollSectiontop>
      
      <ScrollSectionbottom>
        {/* Text Content */}
        <div className="mx-4 lg:mx-40">
          <p className="mt-6 text-lg text-gray-300 text-center">
            "Hi, I'm Chandran, a passionate Website Designer, UI Designer, and Full-Stack Developer with a focus on creating innovative and user-centric web solutions. With expertise in HTML, CSS, React, Angular, Mongoose, Express, and Tailwind CSS, I specialize in building dynamic, responsive, and scalable applications. My approach emphasizes clean, maintainable code, cutting-edge design principles, and user-friendly layouts to ensure high performance and reliability. Whether designing sleek interfaces or developing robust back-end systems, I am dedicated to delivering impactful solutions that drive innovation and set new standards in the digital space."
          </p>
        </div>
      </ScrollSectionbottom>
    </div>
  );
};

export default About;
