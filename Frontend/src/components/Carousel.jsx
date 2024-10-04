import React, { useState } from "react";
import educationPic from "../assets/education.jpg";
import healthPic from "../assets/health.jpg";
import jobPic from "../assets/job.jpg";
import LegalAidPic from "../assets/LegalAid.jpg";

const carouselItems = [
  {
    title: "Education",
    image: educationPic,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Employment",
    image: jobPic,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Support Counsel",
    image: LegalAidPic,
    description:
      "Seek Assistance: Comprehensive Support for Legal, Financial, and Mental Health Needs!",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <div className="relative w-full h-screen">
        <div className="relative flex overflow-hidden h-full">
          {carouselItems.map((item, index) => (
            <div
              key={index}
              className={`w-full flex-shrink-0 transition-transform duration-500 ease-in-out ${
                index === currentIndex ? "block" : "hidden"
              }`}
            >
              <div
                className="relative bg-cover bg-center h-full"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                    <p className="text-base">{item.description}</p>
                  </div>
                </div>
              </div>
              <div className="py-4 text-center"></div>
            </div>
          ))}
        </div>
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg focus:outline-none"
          onClick={prevSlide}
        >
          &#10094;
        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg focus:outline-none"
          onClick={nextSlide}
        >
          &#10095;
        </button>
      </div>
    </>
  );
};

export default Carousel;
