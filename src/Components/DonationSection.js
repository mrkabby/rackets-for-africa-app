import React from "react";
import Logo from "../images/RAF--21.jpg";

const DonationSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-8 bg-background gap-8">
      {/* Text Section */}
      <article className="text-center md:text-left mb-6 md:mb-0 md:w-1/2">
        <h1 className="text-4xl font-bold">
          Share your <span className="text-primary">love</span> to make someone’s life better
        </h1>
        <p className="text-muted-foreground mt-4">
          Lorem ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a type and scrambled.
        </p>

        {/* Button Group: Responsive */}
        <div className="flex flex-col md:flex-row items-center gap-4 mt-6 w-full">
          {/* Donate Now Button */}
          <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition w-full md:flex-1">
            Donate now
          </button>

          {/* Volunteer Button */}
          <button className="bg-green-300 text-black  px-6 py-3 rounded-lg hover:bg-primary-dark transition w-full md:flex-1 flex items-center justify-center">
            <img
              alt="volunteer icon"
              src="https://openui.fly.dev/openui/24x24.svg?text=🤝"
              className="mr-2"
            />
            Join our volunteer team
          </button>
        </div>
      </article>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src={Logo}
          alt="Placeholder image representing charity work"
          className="rounded-lg shadow-md"
        />
      </div>
    </section>
  );
};

export default DonationSection;
