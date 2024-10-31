import React from 'react';
import Franny from '../images/Franny.jpg';
import Veer from '../images/veer.jpg';
import Yash from '../images/yash.jpg';

const DonorsAndPartners = () => {
  return (
    <div className="container mx-auto p-6">
      {/* Donors Section */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-primary">Our Donors</h2>
        <p className="text-muted-foreground">
          We are incredibly grateful for the support from our donors who make our mission possible. Their generosity helps us reach communities in need, empowering individuals and fostering a better future.
        </p>
      </div>

      {/* Donor Logos */}
      <div className="flex justify-center space-x-8 mb-12">
        <div className="flex flex-col items-center">
          <img
            src={Veer}
            alt="Veer Foundation Logo"
            className="w-32 h-32 object-cover rounded-lg mb-2"
          />
          <p className="text-primary font-semibold">Veer Gupta</p>
          <p className="text-muted-foreground text-sm">Major Donor</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={Yash}
            alt="Yash Industries Logo"
            className="w-32 h-32 object-cover rounded-lg mb-2"
          />
          <p className="text-primary font-semibold">Yash Gupta</p>
          <p className="text-muted-foreground text-sm">Corporate Sponsor</p>
        </div>
      </div>

      {/* Partners Section */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-primary">Our Partners</h2>
        <p className="text-muted-foreground">
          Our partners play a vital role in advancing our mission through strategic collaboration and shared commitment to making a positive impact. Together, we are creating lasting change.
        </p>
      </div>

      {/* Partner Logos */}
      <div className="flex justify-center space-x-8">
        <div className="flex flex-col items-center">
          <img
            src={Franny}
            alt="ASAP Kids Logo"
            className="w-32 h-32 object-cover rounded-lg mb-2"
          />
          <p className="text-primary font-semibold">Francisca Nyarko</p>
          <p className="text-muted-foreground text-sm">Francisca Nyarko Foundation</p>
        </div>
      </div>
    </div>
  );
};

export default DonorsAndPartners;
