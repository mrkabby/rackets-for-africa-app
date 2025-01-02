import React, { useState } from "react";
import BackgroundImage from "../images/RAF-09980.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDonate, faHandsHelping, faLock } from "@fortawesome/free-solid-svg-icons";
import NavBar from "../Components/Navbar";
import Footer from "../Components/Footer";
import emailjs from 'emailjs-com';

const DonationPage = () => {
  const [donationAmount, setDonationAmount] = useState("");
  const [volunteerSubmitted, setVolunteerSubmitted] = useState(false);
  const [volunteerData, setVolunteerData] = useState({ fullName: "", email: "" });

  // Handle donation amount input
  const handleAmountChange = (event) => {
    const value = event.target.value;
    if (/^\d*(\.\d{0,2})?$/.test(value) || value === "") {
      setDonationAmount(value);
    }
  };

  // Handle volunteer data input
  const handleVolunteerChange = (event) => {
    const { name, value } = event.target;
    setVolunteerData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle volunteer form submission
  const handleVolunteerSubmit = (event) => {
    event.preventDefault();
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          fullName: volunteerData.fullName,
          email: volunteerData.email,
        },
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setVolunteerSubmitted(true);
          setTimeout(() => setVolunteerSubmitted(false), 3000);
          setVolunteerData({ fullName: "", email: "" });
        },
        (error) => {
          console.error('FAILED...', error);
        }
      );
  };

  return (
    <>
      <NavBar />
      <div
        className="relative min-h-screen flex flex-col items-center pt-28 md:pt-24 p-6 bg-cover bg-center"
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
                  type="text"
                  placeholder="Enter Donation Amount (e.g., 10.00)"
                  className="p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 mb-4"
                  value={donationAmount}
                  onChange={handleAmountChange}
                  aria-label="Donation Amount"
                  required
                />
                <form
                  action="https://www.paypal.com/donate"
                  method="post"
                  target="_top"
                  className="flex justify-center"
                >
                  <input type="hidden" name="business" value={process.env.REACT_APP_PAYPAL_BUSINESS} />
                  <input type="hidden" name="no_recurring" value="0" />
                  <input type="hidden" name="item_name" value="Donate to us" />
                  <input type="hidden" name="currency_code" value="USD" />
                  <button
                    type="submit"
                    className="bg-yellow-400 text-black font-bold py-2 px-4 rounded-lg shadow-lg w-full"
                    disabled={!donationAmount || parseFloat(donationAmount) <= 0}
                  >
                    Donate with PayPal
                  </button>
                </form>
              </div>
              <p className="text-xs text-gray-500 mt-4">
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
                  name="fullName"
                  placeholder="Full Name"
                  className="p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  value={volunteerData.fullName}
                  onChange={handleVolunteerChange}
                  required
                  aria-label="Full Name"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  value={volunteerData.email}
                  onChange={handleVolunteerChange}
                  required
                  aria-label="Email Address"
                />
                <button
                  type="submit"
                  className="bg-green-100 text-secondary-foreground p-2 rounded hover:bg-green-200"
                >
                  Join as Volunteer
                </button>
              </form>
              {volunteerSubmitted && (
                <p className="text-green-600 text-sm mt-4">Thank you for volunteering!</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DonationPage;
