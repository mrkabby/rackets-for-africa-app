import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import AboutUsPage from './Pages/AboutUsPage';
import ContactUsPage from './Pages/ContactUsPage';
import DonationsPage from './Pages/DonationsPage';
import SplashScreen from './Pages/SplashPage';
import Nopage from './Pages/Nopage';
import GalleryPage from './Pages/Gallery';
import ProgramsPage from './Pages/ProgramsPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Splash Screen Route */}
        <Route path="/" element={<SplashScreen />} />

        {/* Main Routes */}
        <Route path="/home" element={<LandingPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/donations" element={<DonationsPage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/gallery/:imageId" element={<GalleryPage />} />
        {/* No Page / 404 Route */}
        <Route path="*" element={<Nopage />} />
      </Routes>
    </BrowserRouter>
  );
}
