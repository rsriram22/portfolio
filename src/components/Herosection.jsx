import React from "react";
import ScrollSectionbottom from "./scrollanimation/scrollbottom";
import ScrollSectionsideright from "./scrollanimation/Scrollright";

const Hero=()=>{
    const whatsappLink = "https://wa.me/+919786415970";
    const emailLink = "mailto:rsriram4518@gmail.com"; // Replace with your email
    return(
          <div className="flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-16 lg:px-24 py-10 space-y-10 md:space-y-0">
  {/* Text Content */}
  <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left max-w-lg">
  <ScrollSectionbottom>
    <h1 className="text-4xl md:text-6xl font-extrabold italiana-regular">Sri Ram R</h1>
    <h2 className="text-xl md:text-2xl mt-4 font-semibold italiana-regular">Web Developer</h2>
    <p className="mt-4 text-lg text-gray-300">
      I'm a passionate web developer dedicated to creating innovative, responsive websites.
    </p>
    <p className="mt-4 font-bold">"Let’s Collaborate"</p>

    {/* Social Icons */}
    <div className="flex items-center justify-center md:justify-start gap-4 mt-4 md:ml-28 lg:ml-44">
{/* WhatsApp Link */}
<a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center hover:scale-110 transition-transform">
  <img src="./src/assets/whatsapp.svg" alt="WhatsApp" className="w-8 h-8" />
  <span className="ml-2 text-sm font-medium">Chat</span>
</a>

{/* Email Link */}
<a href={emailLink} className="flex items-center hover:scale-110 transition-transform">
  <img src="./src/assets/gmaillogo.svg" alt="Gmail" className="w-8 h-8" />
  <span className="ml-2 text-sm font-medium">Mail</span>
</a>
</div>


    {/* Download CV Button */}
    <a
      href="./src/assets/resume.pdf"
      download
      className="inline-block mt-6 bg-white text-black py-2 px-6 rounded-full text-lg font-bold hover:bg-gray-300"
      onClick={(e) => {
        if (!window.confirm("Do you want to download the CV?")) {
          e.preventDefault();
        }
      }}
    >
      Download CV
    </a>
  </ScrollSectionbottom>
</div>

{/* Avatar */}
<div className="md:w-1/2 flex justify-center">
  <ScrollSectionsideright>
    <img src="./src/assets/Profile.png" alt="SRIRAM R Avatar" className="rounded-full shadow-lg w-48 md:w-64 lg:w-96" />
  </ScrollSectionsideright>
</div>
</div>

    )
}

export default Hero