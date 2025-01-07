import React from "react";

const AboutUs = () => {
  return (
    <div className=" px-4  md:px-12 py-8 md:py-16 mx-auto max-w flex flex-col md:flex-row items-center justify-between bg-white">
      {/* Left Section */}
      <div className="text-center md:text-left md:w-1/2 mb-8 md:mb-0">
        <h3 className="uppercase text-sm font-semibold text-gray-500 mb-2">
          About Company
        </h3>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">ABOUT US</h1>
        <p className="text-gray-600 mb-6 leading-relaxed">
          We know how large objects will act, but things on a small scale
        </p>
        <a
          href="#"
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-600 transition duration-300"
        >
          Get Quote Now
        </a>
      </div>

          {/* Right Section */}
          <div className="relative md:w-1/2 flex items-center justify-center">
        {/* Background Eclipse */}
        <img
          src="/images/Ellipse26.png" // Make sure the image path is correct
          alt="Background Eclipse"
          className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] -z-10 top-1/2 transform -translate-y-1/2"
        />
        {/* Background Eclipse */}
        <img
          src="public\images\E 26.png" // Make sure the image path is correct
          alt="Background Eclipse"
          className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] -z-10 top-1/2 transform -translate-y-1/2"
        />

        {/* Main Image */}
        <img
          src="/images/technology 1.png" // Replace with actual image path
          alt="About Us"
          className="w-full max-w-xs md:max-w-md"
        />
      </div>
    </div>
  );
};

export default AboutUs;
