import React from "react";
import ScrollSectionbottom from "./scrollanimation/scrollbottom";
import { ExternalLink, CheckCircle2, Layers, BarChart3, Building2 } from "lucide-react";

import ecommerceImg from "../assets/e-comerce.jpg";
import hotelImg from "../assets/hotel.jpg";
import mobileServiceImg from "../assets/gym.jpg";
import projectIcon from "../assets/project.png";

const projectData = [
  {
    id: 1,
    title: "Mobile Service Website",
    image: mobileServiceImg,
    categoryIcon: <Layers size={18} className="text-[#f0f83d]" />,
    description:
      "Responsive service website that helps customers explore mobile products, service options, and repair support.",
    technologies: ["React", "JavaScript", "HTML", "CSS"],
    features: [
      "Mobile Product Catalogue",
      "Service Information",
      "Responsive Design",
      "Customer Enquiries",
    ],
    actionText: "View Project",
    link: "https://github.com/rsriram22",
  },
  {
    id: 2,
    title: "E-Commerce",
    image: ecommerceImg,
    categoryIcon: <BarChart3 size={18} className="text-cyan-400" />,
    description:
      "Online shopping platform with product browsing, cart management, and a streamlined customer checkout experience.",
    technologies: ["React", "JavaScript", "HTML", "CSS"],
    features: [
      "Product Catalogue",
      "Shopping Cart",
      "Responsive Storefront",
      "Order Management",
    ],
    actionText: "View Project",
    link: "https://github.com/rsriram22",
  },
  {
    id: 3,
    title: "Hotel Accounts Management",
    image: hotelImg,
    categoryIcon: <Building2 size={18} className="text-pink-400" />,
    description:
      "Hotel management system for organizing bookings, guest information, billing, and daily account records.",
    technologies: [".NET", "ASP.NET Core", "SQL Server", "REST APIs"],
    features: [
      "Guest Records",
      "Room Booking",
      "Billing & Invoices",
      "Account Reports",
    ],
    actionText: "View Project",
    link: "https://github.com/rsriram22",
  },
];

const Projects = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 sm:px-10">
      <ScrollSectionbottom>
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest font-bold text-[#f0f83d] bg-[#f0f83d]/10 px-3 py-1 rounded-full border border-[#f0f83d]/20">
            Portfolio Showcase
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold mt-3 italiana-regular text-white flex items-center justify-center gap-3">
            <img
              src={projectIcon}
              alt="Project Icon"
              className="w-10 h-10 object-contain inline-block"
            />
            Projects
          </h2>

          <p className="mt-3 text-base text-gray-400 max-w-2xl mx-auto">
            Production-oriented software projects built with modern .NET backends, React interfaces, and SQL Server.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-2">
            {projectData.map((project) => (
              <div key={project.id} className="flex">
                <div className="group bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-3xl overflow-hidden hover:border-[#f0f83d]/40 transition-all duration-300 hover:shadow-2xl hover:shadow-[#f0f83d]/5 flex flex-col w-full">
                {/* Image Header */}
                <div className="relative overflow-hidden h-44 w-full bg-slate-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-70" />
                </div>

                <div className="p-6 flex flex-col flex-grow text-left">
                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-semibold bg-slate-800 text-gray-300 border border-slate-700/60 px-2.5 py-0.5 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-[#f0f83d] transition-colors mb-2.5 italiana-regular flex items-center gap-2">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Features List */}
                  <div className="mt-auto pt-4 border-t border-slate-800/80 mb-6">
                    <span className="text-[11px] uppercase tracking-wider font-bold text-gray-400 block mb-2.5">
                      Core Features:
                    </span>
                    <ul className="grid grid-cols-1 gap-1.5">
                      {project.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2 text-xs text-gray-300">
                          <CheckCircle2 size={13} className="text-[#f0f83d] shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Link */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-slate-800 hover:bg-[#f0f83d] text-white hover:text-[#0b0b26] font-semibold text-xs transition-all border border-slate-700/80 hover:border-transparent group-hover:shadow-md"
                  >
                    <span>{project.actionText}</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
                </div>
              </div>
            ))}
        </div>
      </ScrollSectionbottom>
    </div>
  );
};

export default Projects;
