import React, { useState } from 'react';
import logo from "../images/Logo.png";
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navigate = useNavigate();

  return (
    <nav className="flex flex-wrap items-center justify-between bg-white px-4 fixed w-full top-0 z-50 ">
      <div className="h-24 w-24">
        <img src={logo} alt="Logo" className="h-full w-full cursor-pointer"onClick={() => navigate("/home")} />
      </div>
      <div className="flex md:hidden mx-8">
        <button id="hamburger" onClick={toggleMenu}>
          <img
            className={!isMenuOpen ? 'block' : 'hidden'}
            src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
            width="40"
            height="40"
            alt="Menu"
          />
          <img
            className={isMenuOpen ? 'block' : 'hidden'}
            src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
            width="40"
            height="40"
            alt="Close"
          />
        </button>
      </div>
      <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:w-auto md:flex text-right text-bold  mx-8 md:mt-0 md:border-none text-black`}>
        <Link to="/home">
          <div className="block md:inline-block hover:text-teal-500 px-3 py-3 md:border-none">Home</div>
        </Link>
        
        <Link to="/about-us">
          <div className="block md:inline-block hover:text-teal-500 px-3 py-3 md:border-none">About Us</div>
        </Link>
        <Link to="/programs">
          <div className="block md:inline-block hover:text-teal-500 px-3 py-3 md:border-none">Programs</div>
        </Link>
        <Link to="/contact-us">
          <div className="block md:inline-block hover:text-teal-500 px-3 py-3 md:border-none">Contact Us</div>
        </Link>
      </div>
      <div className="hidden md:flex md:w-auto px-2 py-2 md:rounded">
        <a href="/donations">
          <div className="flex justify-end">
            <div className="flex items-center h-10 w-30 rounded-md bg-[#e5e834] text-black font-medium p-2">
            <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 mr-2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.9-2.4-5.25-5.25-5.25-1.78 0-3.35.88-4.29 2.23a5.254 5.254 0 00-8.96 3.02c0 7.18 9 11.25 9 11.25s9-4.07 9-11.25z"
        />
      </svg>
              Support Us
            </div>
          </div>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;