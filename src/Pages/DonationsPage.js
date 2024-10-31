import React from "react";
import BackgroundImage from "../images/RAF-09980.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDonate, faHandsHelping , faLock} from "@fortawesome/free-solid-svg-icons";
import NavBar from "../Components/Navbar";

const DonationPage = () => {
  // Handle donation form submission
  const handleDonationSubmit = (event) => {
    event.preventDefault();
    alert("Redirecting to Paystack...");
  };

  // Handle volunteer form submission
  const handleVolunteerSubmit = (event) => {
    event.preventDefault();
    alert("Thank you for volunteering!");
  };

  return (
    <>
      <NavBar />
      <div
        className="relative min-h-screen flex flex-col items-center pt-20 md:pt-24 p-6 bg-cover bg-center bg-blend-overlay"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white w-full max-w-4xl">
          <h1 className="text-4xl font-bold mb-4 md:mt-10">Support Our Cause</h1>
          <p className="text-lg mb-8">
            Your contributions help us make a difference. Choose to donate or volunteer with us.
          </p>

          <div className="flex flex-col md:flex-row md:space-x-8 w-full items-center">
            {/* Donate Section */}
            <div className="flex flex-col w-full md:w-1/2 bg-white text-black p-6 rounded-lg shadow-lg mb-8 md:mb-0 text-center min-h-[350px]">
              <h2 className="text-2xl font-semibold mb-4 flex justify-center items-center">
                <FontAwesomeIcon icon={faDonate} className="mr-2" />
                Donate
              </h2>
              <form onSubmit={handleDonationSubmit} className="flex flex-col space-y-4 flex-grow">
                <input
                  type="number"
                  placeholder="Amount (NGN)"
                  className="p-2 border border-gray-300 rounded"
                  required
                />
                <button
                  type="submit"
                  className="flex items-center justify-center bg-green-100 text-primary-foreground p-2 rounded hover:bg-green-200"
                >
                  Donate with Paystack
                </button>
              </form>
              <p className="text-xs text-gray-500 mt-4 ">
              <FontAwesomeIcon icon={faLock} className="mr-2"  />Powered by Paystack</p>
            </div>

            {/* Volunteer Section */}
            <div className="flex flex-col w-full md:w-1/2 bg-white text-black p-6 rounded-lg shadow-lg text-center min-h-[350px]">
              <h2 className="text-2xl font-semibold mb-4 flex justify-center items-center">
                <FontAwesomeIcon icon={faHandsHelping} className="mr-2" />
                Volunteer
              </h2>
              <form onSubmit={handleVolunteerSubmit} className="flex flex-col space-y-4 flex-grow">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="p-2 border border-gray-300 rounded"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="p-2 border border-gray-300 rounded"
                  required
                />
                <button
                  type="submit"
                  className="flex items-center justify-center bg-green-100 text-secondary-foreground p-2 rounded hover:bg-green-200"
                >
                  Join as Volunteer
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DonationPage;
