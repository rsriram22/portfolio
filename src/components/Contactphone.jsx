import React from 'react';
import { Phone } from 'lucide-react';

const Contactphone = () => {
  return (
    <div className="bg-white p-1 rounded-full hover:scale-125 transform transition-transform duration-300">
      <a
        href="tel:+919786415970"
        className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white shadow-md"
        aria-label="Call Phone"
      >
        <Phone size={16} />
      </a>
    </div>
  );
};

export default Contactphone;
