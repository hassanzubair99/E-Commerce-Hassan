import React from "react";

const WorkWithUs = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center bg-blue-600">
      {/* Left Section: Text */}
      <div className="bg-blue-600 text-white px-6 md:px-12 py-12 md:w-1/2 flex flex-col justify-center">
        <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">
          Work With Us
        </h4>
        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
          Now Let’s grow Yours
        </h1>
        <p className="text-sm md:text-base mb-6">
          The gradual accumulation of information about atomic and small-scale
          behavior during the first quarter of the 20th.
        </p>
        <button className="border border-white rounded-md py-2 px-6 hover:bg-white hover:text-blue-600 transition duration-300">
          Button
        </button>
      </div>

      {/* Right Section: Image */}
      <div className="w-full md:w-1/2">
        <img
          src="/images/h3.png" // Replace with the actual image path
          alt="Work With Us"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default WorkWithUs;
