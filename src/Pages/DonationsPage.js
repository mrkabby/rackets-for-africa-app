import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import BackgroundImage from "../images/RAF-09980.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDonate, faHandsHelping, faLock } from "@fortawesome/free-solid-svg-icons";
import NavBar from "../Components/Navbar";

const DonationPage = () => {
  const [donationAmount, setDonationAmount] = useState(""); // State to store the amount

  const handleAmountChange = (event) => {
    setDonationAmount(event.target.value); // Update amount
  };

  // Handle volunteer form submission
  const handleVolunteerSubmit = (event) => {
    event.preventDefault();
    alert("Thank you for volunteering!");
  };

  return (
    <PayPalScriptProvider options={{ "client-id": "YOUR_CLIENT_ID" }}> {/* Replace with actual PayPal client ID */}
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
            Your contributions help us make a difference. Choose to donate via PayPal or volunteer with us.
          </p>

          <div className="flex flex-col md:flex-row md:space-x-8 w-full items-center">
            {/* Donate Section */}
            <div className="flex flex-col w-full md:w-1/2 bg-white text-black p-6 rounded-lg shadow-lg mb-8 md:mb-0 text-center min-h-[350px]">
              <h2 className="text-2xl font-semibold mb-4 flex justify-center items-center">
                <FontAwesomeIcon icon={faDonate} className="mr-2" />
                Donate
              </h2>
              <div className="flex flex-col space-y-4 flex-grow">
                {/* Input Field for Donation Amount */}
                <input
                  type="number"
                  placeholder="Enter Donation Amount (e.g., 10.00)"
                  className="p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  value={donationAmount}
                  onChange={handleAmountChange}
                  required
                />

                {/* PayPal Donate Button */}
                {donationAmount ? (
                  <PayPalButtons
                    style={{ layout: "vertical", shape: "rect", label: "donate" }}
                    createOrder={(data, actions) => {
                      return actions.order.create({
                        purchase_units: [
                          {
                            amount: {
                              value: donationAmount, // Use user-entered amount
                            },
                          },
                        ],
                      });
                    }}
                    onApprove={(data, actions) => {
                      return actions.order.capture().then((details) => {
                        alert(`Thank you, ${details.payer.name.given_name}, for your donation!`);
                      });
                    }}
                  />
                ) : (
                  <button
                    disabled
                    className="bg-gray-300 text-gray-500 p-2 rounded cursor-not-allowed"
                  >
                    Enter an amount to enable donation
                  </button>
                )}
              </div>
              <p className="text-xs text-gray-500 mt-4 ">
                <FontAwesomeIcon icon={faLock} className="mr-2" /> Powered by PayPal
              </p>
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
                  className="p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
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
    </PayPalScriptProvider>
  );
};

export default DonationPage;
