import React from 'react';

const DiscoverUs = () => {
  return (
    <div className="bg-slate-900 text-foreground p-8 md:p-12 lg:p-16">
      <h2 className="text-3xl font-bold mb-4 text-center text-white">
        DISCOVER WHO WE ARE
      </h2>
      <p className="text-white mb-6 text-center">
        Welcome to our world! We are dedicated to providing the best services to our clients. Our team is passionate and committed to excellence. Join us on this journey to explore more about who we are and what we do.
      </p>

      {/* Center the button */}
      <div className="flex justify-center">
        <a
          href="/about-us"
          className="inline-block bg-yellow-300 text-primary-foreground px-6 py-3 rounded-lg hover:bg-black hover:text-white transition"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default DiscoverUs;
