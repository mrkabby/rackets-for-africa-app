import React from "react";
import { Link } from "react-router-dom";
import BackgroundImage from "../images/RAF-09980.jpg";
import NavBar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ProgramImage1 from "../images/Logo.png";
import ProgramImage2 from "../images/Logo.png";
import ProgramImage3 from "../images/Logo.png";

const programs = [
  {
    id: 1,
    name: "Upcoming Regional Tournament",
    date: "2024-01-10",
    description: "An upcoming tournament to bring together local teams.",
    image: ProgramImage3,
    imageId: 1,
    status: "upcoming",
  },
  
  {
    id: 2,
    name: "Second Edition",
    date: "2023-08-20",
    description: "We invited kids from different locations to the University of Ghana, Legon.",
    image: ProgramImage2,
    imageId: 2,
    status: "past",
  },
  {
    id: 3,
    name: "First Edition",
    date: "2023-09-15",
    description:
      "We donated rackets to the youth in these locations: Winneba Sports College, Sakumono School Complex, Labadi, and Kumasi.",
    image: ProgramImage1, 
    imageId: 3, 
    status: "past",
  },
];

const ProgramsPage = () => {
  return (
    <>
      <NavBar />
      <div
        className="relative min-h-screen flex flex-col items-center pt-20 md:pt-24 p-6 bg-cover bg-center bg-blend-overlay"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        <div className="min-h-screen p-8 pt-24">
          <h1 className="text-4xl font-bold text-center mb-8 text-white">Programs</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <Link
                key={program.id}
                to={`/gallery/${program.imageId}`}
                className="flex flex-col bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden h-full"
              >
                {/* Program Image */}
                <img
                  src={program.image}
                  alt={`${program.name} image`}
                  className="w-full h-48 object-cover"
                />

                {/* Program Content */}
                <div className="flex flex-col justify-between p-6 flex-grow">
                  <div>
                    <h2 className="text-2xl font-semibold mb-2">{program.name}</h2>
                    <p className="text-gray-600">{program.date}</p>
                    <p className="mt-2 text-gray-800">{program.description}</p>
                    <span
                      className={`inline-block mt-4 px-4 py-2 rounded ${
                        program.status === "upcoming" ? "bg-green-200" : "bg-gray-200"
                      }`}
                    >
                      {program.status === "upcoming" ? "Upcoming" : "Past"}
                    </span>
                  </div>

                  {/* View Gallery Button */}
                  <button className="w-full mt-4 bg-black text-white py-2 rounded-lg font-semibold hover:bg-yellow-300 transition">
                    View Gallery
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProgramsPage;
