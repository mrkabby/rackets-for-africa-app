import React, { useState, useEffect } from "react";
import logo from "../images/Logo.png";

const SplashScreen = () => {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(true);
    }, 3000); // Change 3000 to the number of milliseconds you want to delay

    // Navigate to the onboarding page after showing the logo
    if (showLogo) {
      setTimeout(() => {
        window.location.href = "/home";
      }, 2000); // Change 2000 to the number of milliseconds you want to wait before navigation
    }

    return () => clearTimeout(timer);
  }, [showLogo]);

  return (
    <div className="h-screen flex items-center justify-center bg-white">
      {showLogo && (
        <div className="text-center text-black flex flex-col items-center">
          <img
            src={logo}
            alt="Logo"
            className={`h-72 w-72 mb-1 transform transition-transform duration-1000 ${
              showLogo ? "scale-100" : "scale-50"
            }`}
          />
          <p>Serving to transform Africa’s rising generation</p>
        </div>
      )}
    </div>
  );
};

export default SplashScreen;