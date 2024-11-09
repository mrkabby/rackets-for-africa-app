import React from "react";
import { useParams, Link } from "react-router-dom"; // Import Link for navigation
import NavBar from "../Components/Navbar";

import Image16 from "../images/IMG-20241109-WA0016.jpg";
import Image17 from "../images/IMG-20241109-WA0017.jpg";
import Image18 from "../images/IMG-20241109-WA0018.jpg";
import Image19 from "../images/IMG-20241109-WA0019.jpg";
import Image20 from "../images/IMG-20241109-WA0020.jpg";
import Image21 from "../images/IMG-20241109-WA0021.jpg";
import Image22 from "../images/IMG-20241109-WA0022.jpg";
import Image23 from "../images/IMG-20241109-WA0023.jpg";
import Image24 from "../images/IMG-20241109-WA0024.jpg";
import Image25 from "../images/IMG-20241109-WA0025.jpg";
import Image26 from "../images/IMG-20241109-WA0026.jpg";
import Image27 from "../images/IMG-20241109-WA0027.jpg";
import Image32 from "../images/IMG-20241030-WA0032.jpg";
import Legon1 from "../images/RAF--137.jpg";
import Legon2 from "../images/RAF--138.jpg";
import Legon3 from "../images/RAF--20.jpg";
import Legon4 from "../images/RAF--21.jpg";
import Legon5 from "../images/RAF--23.jpg";
import Legon6 from "../images/RAF--73.jpg";
import Legon7 from "../images/RAF-09980.jpg";
import Footer from "../Components/Footer";

const images = [
  { id: 1, src: Image16, alt: "Program Event Image 16" },
  { id: 1, src: Image17, alt: "Program Event Image 17" },
  { id: 1, src: Image18, alt: "Program Event Image 18" },
  { id: 1, src: Image19, alt: "Program Event Image 19" },
  { id: 1, src: Image20, alt: "Program Event Image 20" },
  { id: 1, src: Image21, alt: "Program Event Image 21" },
  { id: 1, src: Image22, alt: "Program Event Image 22" },
  { id: 1, src: Image23, alt: "Program Event Image 23" },
  { id: 1, src: Image24, alt: "Program Event Image 24" },
  { id: 1, src: Image25, alt: "Program Event Image 25" },
  { id: 1, src: Image26, alt: "Program Event Image 26" },
  { id: 1, src: Image27, alt: "Program Event Image 27" },
  { id: 1, src: Image32, alt: "Program Event Image 32" },
  { id: 2, src: Legon1, alt: "Second Edition Image 1" },
  { id: 2, src: Legon2, alt: "Second Edition Image 2" },
  { id: 2, src: Legon3, alt: "Second Edition Image 3" },
  { id: 2, src: Legon4, alt: "Second Edition Image 4" },
  { id: 2, src: Legon5, alt: "Second Edition Image 5" },
  { id: 2, src: Legon6, alt: "Second Edition Image 6" },
  { id: 2, src: Legon7, alt: "Second Edition Image 7" },
];

const GalleryPage = () => {
  const { imageId } = useParams(); // Get imageId from URL parameters
  const selectedImages = images.filter((image) => image.id === Number(imageId)); // Filter images by id

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gray-100 p-8 pt-32">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-center flex-grow">Gallery</h1>
          
          {/* Back Button */}
          <Link
            to="/programs"
            className=" text-black px-4 py-2 rounded-lg font-semibold  transition underline"
          >
            Back to Programs
          </Link>
        </div>

        {selectedImages.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {selectedImages.map((image, index) => (
              <div key={index} className="flex justify-center items-center">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full max-w-lg rounded-lg shadow-md"
                />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">No images found for this program.</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default GalleryPage;
