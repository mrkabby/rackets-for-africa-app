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
          Thank you for supporting the SITTOs. We are a proud Texan non-profit organization that serves locally in the Dallas Fort Worth area. Online giving is easy, safe, and convenient. This is a secure website.
        </p>
      </div>

      {/* Donor Logos */}
      <div className="flex justify-center space-x-8 mb-12">
        <div className="flex flex-col items-center">
          <img
            src={Veer}
            alt="Panera Bread Logo"
            className="w-32 h-32 object-cover rounded-lg mb-2"
          />
        </div>
        <div className="flex flex-col items-center">
          <img
            src={Yash}
            alt="Walmart Logo"
            className="w-32 h-32 object-cover rounded-lg mb-2"
          />
        </div>
      </div>

      {/* Partners Section */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-primary">Our Partners</h2>
        <p className="text-muted-foreground">
          Thank you for supporting the SITTOs. We are a proud Texan non-profit organization that serves locally in the Dallas Fort Worth area. Online giving is easy, safe, and convenient. This is a secure website.
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
        </div>
      </div>
    </div>
  );
};

export default DonorsAndPartners;
