import React from "react";
import { Link } from "react-router-dom";
import BackgroundImage from '../images/RAF-09980.jpg'
import NavBar from "../Components/Navbar";
import Footer from "../Components/Footer";

const programs = [
  {
    id: 1,
    name: "First Edition",
    date: "2023-09-15",
    description: "We Donated Rackets to the Youth in these locations : Winneba Sports College, Sakumono School Complex, Labadi, and Kumasi.",
    imageId: 1, // ID used to reference gallery image
    status: "past",
  },
  {
    id: 2,
    name: "Second Edition",
    date: "2023-08-20",
    description: "We invited Kids from Different Locations to The University of Ghana, Legon ",
    imageId: 2,
    status: "past",
  },
  {
    id: 3,
    name: "Upcoming Regional Tournament",
    date: "2024-01-10",
    description: "An upcoming tournament to bring together local teams.",
    imageId: 3,
    status: "upcoming",
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

      
    <div className="min-h-screen  p-8 pt-24">
      <h1 className="text-4xl font-bold text-center mb-8 text-white">Programs</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {programs.map((program) => (
          <Link
            key={program.id}
            to={`/gallery/${program.imageId}`} // Navigate to the gallery page with the specific image ID
            className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
          >
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
