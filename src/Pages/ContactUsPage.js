import React, { useState } from "react";
import axios from "axios";
import NavBar from "../Components/Navbar";
import Footer from "../Components/Footer";
import BackgroundImage from "../images/RAF--23.jpg"; // Import your background image

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
     service_id: process.env.REACT_APP_EMAILJS_SERVICE_ID,
      template_id: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      user_id: process.env.REACT_APP_EMAILJS_USER_ID,
      template_params: {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
    };

    try {
      const response = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        alert("Thank you for reaching out! We will get back to you shortly.");
        setFormData({ name: "", email: "", message: "" }); // Reset form
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("There was an error sending your message. Please try again.");
    }
  };

  return (
    <>
      <NavBar />
      <div
        className="relative min-h-screen bg-cover bg-center p-8 pt-24 flex flex-col items-center"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white w-full max-w-lg">
          <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg text-gray-800"
          >
            <div className="mb-4">
              <label htmlFor="name" className="block font-semibold mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
