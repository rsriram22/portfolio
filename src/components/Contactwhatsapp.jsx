import React from "react";
import whatsappSvg from "../assets/whatsapp.svg";

const Contactw = () => {
  const whatsappLink = "https://wa.me/+919786415970";

  return (
    <div className="flex gap-8">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-8 h-8 rounded-full shadow-lg hover:scale-125 transform transition-transform duration-300"
        aria-label="WhatsApp"
      >
        <img src={whatsappSvg} alt="whatsapp" className="w-full h-full" />
      </a>
    </div>
  );
};

export default Contactw;
