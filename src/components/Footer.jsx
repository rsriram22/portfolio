import React, { useRef, useState } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm("service_xq9ukn6", "template_k840s3a", form.current, {
        publicKey: "AvwTaoskwG3mgaN8A",
      })
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
          setLoading(false);
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error("EmailJS Error:", error.text);
          setLoading(false);
        }
      );
  };

  return (
    <>
      <footer className="bg-gradient-to-t from-[#0f0f3d] to-gray-900 w-full text-white py-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo */}
          <div className="text-center md:text-left">
            <img src="./src/assets/sri.png" alt="Logo" className="mx-auto md:mx-0 h-auto" />
          </div>

          {/* Social Links */}
          <div className="flex space-x-4 p-4 mt-16 justify-center md:justify-start">
            <a href="https://wa.me/+919786415970" className="text-green-500 hover:text-green-800 transition-colors">
              <FaWhatsapp size={30} />
            </a>
            <a href="https://www.instagram.com/sriram_rs45/" className="text-pink-600 hover:text-white transition-colors">
              <FaInstagram size={30} />
            </a>
            <a href="https://www.linkedin.com/in/rsriram45/" className="text-blue-700 hover:text-blue-900 transition-colors">
              <FaLinkedin size={30} />
            </a>
            <a href="https://github.com/rsriram22" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaGithub size={30} />
            </a>
          </div>

          {/* Project List */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold">Projects</h3>
            <ul className="mt-2 space-y-1 text-gray-400">
              <li>Mobile Service Website</li>
              <li>Hotel Accounts Management</li>
              <li>E-Commerce</li>
              <li>Students Attendance System</li>
            </ul>
          </div>

          {/* Message Input Form */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold">Send a Message</h3>
            <p className="text-gray-400 mt-2">Have a project in mind? Feel free to reach out and let's collaborate!</p>
            <form ref={form} onSubmit={sendEmail} className="mt-4 flex items-center">
              <input type="hidden" name="to_email" value="rsriram4518@gmail.com" />
              <input
                type="mail"
                name="message"
                placeholder="Enter your Mail here" 
                className="px-4 py-2 w-full rounded-l-lg text-black outline-none"
                required
              />
              <button
                type="submit"
                className="bg-red-500 px-4 py-2 rounded-r-lg"
                disabled={loading}
              >
                {loading ? "Sending..." : "➤"}
              </button>
            </form>
          </div>
        </div>
      </footer>

      {/* Copyright */}
      <div className="bg-white">
        <div className="border-t border-gray-700 py-3 text-center">
          <p className="text-sm font-bold text-black">
            &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
