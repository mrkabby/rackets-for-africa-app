import React from "react";
import NavBar from "../Components/Navbar";
import Footer from "../Components/Footer";

const ContactPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Thank you for reaching out! We will get back to you shortly.");
  };

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-green-200 p-8 pt-24 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full p-2 border border-gray-300 rounded"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-200 text-white py-2 rounded-lg hover:bg-primary-dark transition"
          >
            Send Message
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
