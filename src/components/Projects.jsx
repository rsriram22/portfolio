import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScrollSectionbottom from "./scrollanimation/scrollbottom";

const projectData = [
  {
    id: 1,
    title: "Movie Streaming Website",
    image: "./src/assets/movie.jpg",
    description: "A movie streaming platform with high-quality content.",
    actionText: "View Project",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    image: "./src/assets/e-comerce.jpg",
    description: "A fully functional online shopping website with payment integration.",
    actionText: "View Project",
  },
  {
    id: 3,
    title: "Student Attendance System",
    image: "./src/assets/students Ms.png",
    description: "A smart attendance management system for schools and colleges.",
    actionText: "View Project",
  },
  {
    id: 4,
    title: "Gym Website",
    image: "./src/assets/gym.jpg",
    description: "A modern and interactive gym website for fitness lovers.",
    actionText: "View Project",
  },
  {
    id: 5,
    title: "Hotel Booking System",
    image: "./src/assets/hotel.jpg",
    description: "An online hotel reservation platform with multiple payment options.",
    actionText: "View Project",
  },
];

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div className="w-full justify-center items-center">
      <ScrollSectionbottom>
        <div className="mt-6 w-full">
          <h2 className="text-4xl italiana-regular flex items-center justify-center">
            <img
              src="./src/assets/project.png"
              alt="Project Icon"
              className="w-20 h-20 px-3 py-3"
            />
            Projects
          </h2>

          <p className="mt-6 text-lg text-gray-300 text-center px-4 sm:px-20">
            My recent projects span both frontend and backend development,
            showcasing my ability to create cohesive and efficient web solutions.
          </p>
        </div>

        <div className="m-3 flex justify-center">
          <div className="w-full max-w-6xl">
            <Slider {...settings}>
              {projectData.map((project) => (
                <div key={project.id} className="px-4">
                  <div className="rounded-3xl shadow-2xl overflow-hidden hover:scale-105 transition-transform duration-300 flex flex-col bg-white">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="rounded-lg w-full h-48 object-cover"
                    />
                    <div className="p-4 text-center">
                      <h2 className="text-[#0f0f3d] text-lg font-bold mb-2 italiana-regular">
                        {project.title}
                      </h2>
                      <p className="text-gray-500 mb-4">{project.description}</p>
                      <button className="relative px-4 py-2 rounded-full bg-gray-400 text-white overflow-hidden group">
                        <span className="absolute inset-0 bg-gradient-to-l from-gray-400 to-blue-900 w-0 group-hover:w-full transition-all duration-300"></span>
                        <span className="relative z-10 text-white hover:text-black">
                          {project.actionText}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </ScrollSectionbottom>
    </div>
  );
};

export default Projects;
