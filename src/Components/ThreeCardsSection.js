import React from 'react';
import { Link } from 'react-router-dom';
import { FaHandsHelping, FaEnvelope, FaProjectDiagram } from 'react-icons/fa'; // Import specific icons from React Icons

const ThreeCardsSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-green-300">
      {/* Support Us Card */}
      <div className="p-6 rounded-lg shadow-md bg-white">
        <div className="flex justify-center mb-4 text-yellow-500">
          <FaHandsHelping size={40} />
        </div>
        <h2 className="text-xl font-bold mb-4 text-center">Support Us</h2>
        <p className="text-muted-foreground mb-4">
          Your support helps us continue our mission. Consider contributing to our cause.
        </p>
        <div className="flex justify-center">
          <Link to="/support">
            <button className="bg-black hover:bg-yellow-300 text-white py-2 px-4 rounded hover:text-black">
              Learn More
            </button>
          </Link>
        </div>
      </div>

      {/* Contact Us Card */}
      <div className="bg-white text-card-foreground p-6 rounded-lg shadow-md">
        <div className="flex justify-center mb-4 text-yellow-500">
          <FaEnvelope size={40} />
        </div>
        <h2 className="text-xl font-bold mb-4 text-center">Contact Us</h2>
        <p className="text-muted-foreground mb-4">
          We'd love to hear from you! Reach out to us for any inquiries or feedback.
        </p>
        <div className="flex justify-center">
          <Link to="/contact">
            <button className="bg-black hover:bg-yellow-300 text-white py-2 px-4 rounded hover:text-black">
              Get in Touch
            </button>
          </Link>
        </div>
      </div>

      {/* Our Projects Card */}
      <div className="bg-white text-card-foreground p-6 rounded-lg shadow-md">
        <div className="flex justify-center mb-4 text-yellow-500">
          <FaProjectDiagram size={40} />
        </div>
        <h2 className="text-xl font-bold mb-4 text-center">Our Projects</h2>
        <p className="text-muted-foreground mb-4">
          Explore the projects we're working on and see how we're making a difference.
        </p>
        <div className="flex justify-center">
          <Link to="/projects">
            <button className="bg-black hover:bg-yellow-300 text-white py-2 px-4 rounded hover:text-black">
              View Projects
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThreeCardsSection;
