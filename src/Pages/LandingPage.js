import React from 'react';
import SlideShow from '../Components/SlideShow';
import DiscoverUs from '../Components/DiscoverUs';
import ThreeCardsSection from '../Components/ThreeCardsSection';
import NavBar from '../Components/Navbar';
import DonationSection from '../Components/DonationSection';

const LandingPage = () => {
  return (
    <div className="relative">
      {/* Navbar */}
      <NavBar />

      {/* Ensure content starts after the Navbar */}
      <main className="mt-16 md:mt-20">
        <SlideShow />
        <DiscoverUs />
        <ThreeCardsSection />
        <DonationSection />
      </main>
    </div>
  );
};

export default LandingPage;
