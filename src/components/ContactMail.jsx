import React from "react";
import gmailSvg from "../assets/gmaillogo.svg";

const Contactm = () => {
  const emailLink = "https://mail.google.com/mail/?view=cm&fs=1&to=rsriram4518@gmail.com";

  return (
    <div className="flex gap-8">
      <a
        href={emailLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-9 h-9 rounded-full shadow-lg hover:scale-125 transform transition-transform duration-300"
        aria-label="Google Mail"
      >
        <img src={gmailSvg} alt="gmail" className="w-full h-full" />
      </a>
    </div>
  );
};

export default Contactm;
