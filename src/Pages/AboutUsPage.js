import React from "react";
import { FaEye, FaBullseye, FaHandsHelping } from "react-icons/fa"; // Import icons
import AboutusImage from "../images/RAF--23.jpg";
import DonorsAndPartners from "../Components/DonorsandPartners";
import TeamGrid from "../Components/Teams";
import NavBar from "../Components/Navbar";
import Footer from "../Components/Footer";

const AboutUsPage = () => {
  return (
    <>
    
    <div className="relative min-h-screen bg-background">
      {/* Navbar */}
      <NavBar />

      {/* Main Content */}
      <div className="pt-20 p-8 md:p-12 lg:p-16">
        {/* Header Section with Overlay */}
        <div className="relative text-center mb-12">
          {/* Header Image */}
          <img
            src={AboutusImage}
            alt="NGOsource logo"
            className="w-full h-72 object-cover rounded-lg shadow-md"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
            <h1 className="text-5xl font-extrabold text-white">About Us</h1>
          </div>
        </div>

        {/* Description Section */}
        <div className="text-center mb-12">
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Rackets for Africa (RFA) is a non-profit organization founded in
            2021 with the aim of providing rackets to individuals and
            communities in Africa who do not have access to this basic necessity
            for the sport. Our mission is to help foster a love for tennis and
            other racket sports, and to provide opportunities for growth and
            development through play. Rackets For Africa was founded in 2021
            with the goal of increasing access to tennis in Africa. Our team is
            comprised of dedicated staff and volunteers who are passionate about
            making a difference in the lives of children in Africa
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 ">
          {/* Vision Card */}
          <div className="bg-black p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center mb-4 text-white">
              <FaEye size={40} /> {/* Vision Icon */}
            </div>
            <h2 className="text-2xl font-semibold text-primary mb-4 text-center text-white">
              Our Vision
            </h2>
            <p className="text-muted-foreground leading-relaxed text-white">
              To be the leading enabler of cost-effective technical assistance
              services for sustainable health systems and service delivery.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-yellow-200 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center mb-4 text-primary">
              <FaBullseye size={40} /> {/* Mission Icon */}
            </div>
            <h2 className="text-2xl font-semibold text-primary mb-4 text-center">
              Our Mission
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              To support national and sub-national governments to build and
              strengthen resilient health systems and improve health outcomes.
            </p>
          </div>

          {/* Values Card */}
          <div className="bg-green-200 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center mb-4 text-primary">
              <FaHandsHelping size={40} /> {/* Values Icon */}
            </div>
            <h2 className="text-2xl font-semibold text-primary mb-4 text-center">
              Our Values
            </h2>
            <ul className="list-disc pl-5 text-muted-foreground space-y-2">
              <li>Trust and Integrity</li>
              <li>Excellence</li>
              <li>Teamwork & Partnership</li>
              <li>Respect</li>
              <li>Innovation</li>
              <li>Sustainability</li>
            </ul>
          </div>
        </div>

        {/* Donors and Partners Section */}
        <div className="mb-12">
          <DonorsAndPartners />
        </div>

        {/* Team Section */}
        <div>
          <TeamGrid />
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default AboutUsPage;
