import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css"; // Ensure styles are imported
import Image1 from "../images/RAF--137.jpg";
import Image2 from "../images/RAF--138.jpg";
import Image3 from "../images/RAF-09980.jpg";

const images = [
  { url: Image1, caption: "Rackets for Africa" },
  { url: Image2, caption: "Rackets for Africa" },
  { url: Image3, caption: "Rackets for Africa" },
];

const SlideShow = () => {
  return (
    <div className="w-full h-full">
      <Slide
        duration={3000} // Auto-slide every 3 seconds
        transitionDuration={500} // Transition animation duration
        infinite={true} // Loop the slides infinitely
        indicators={true} // Show indicators (optional)
        nextArrow={
          <button className="bg-transparent border-0 w-8">
            <svg
              fill="#fff"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
            </svg>
          </button>
        }
        prevArrow={
          <button className="bg-transparent border-0 w-8">
            <svg
              fill="#fff"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
            </svg>
          </button>
        }
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="relative w-full h-[350px] md:h-[500px]"
          >
            {/* Image */}
            <img
              src={image.url}
              alt={image.caption}
              className="object-cover w-full h-full"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Caption */}
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-white text-3xl md:text-5xl font-bold p-4">
                {image.caption}
              </h2>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default SlideShow;
