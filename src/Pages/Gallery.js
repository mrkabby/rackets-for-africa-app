import React, { useState, useEffect } from "react";
import Image1 from "../images/RAF--137.jpg";
import Image2 from "../images/RAF--138.jpg";
import Image3 from "../images/RAF-09980.jpg";
import Image4 from "../images/RAF--20.jpg";
import Image5 from "../images/RAF--21.jpg";
import Image6 from "../images/RAF--23.jpg";
import NavBar from "../Components/Navbar";
import Footer from "../Components/Footer";

const images = [Image1, Image2, Image3, Image4, Image5, Image6];

const GalleryPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call or image loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gray-100 p-8 pt-24"> {/* Added pt-24 for top padding */}
        <h1 className="text-4xl font-bold text-center mb-8">Gallery</h1>

        {/* Loading Spinner */}
        {loading ? (
          <div className="flex justify-center items-center min-h-screen">
            <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
          </div>
        ) : (
          // Gallery Grid
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((src, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-md"
              >
                <img
                  src={src}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default GalleryPage;
