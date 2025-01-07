import React from "react";

const TeamSection = () => {
  return (
    <div className="w-full bg-gray-50 py-12">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h4 className="text-sm font-medium text-gray-400 mb-2">WHAT WE DO</h4>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Innovation tailored for you
        </h2>
        <nav className="mt-4 text-gray-500">
          <a href="/" className="hover:text-gray-700">
            Home
          </a>{" "}
          <span className="mx-2">&gt;</span>
          <span className="text-gray-800 font-medium">Team</span>
        </nav>
      </div>

      {/* Image Grid Section */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Large Image on the Left */}
          <div className="md:col-span-2">
            <img
              src="/images/l1.png"
              alt="Fashion Model 1"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Top-Right Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <img
                src="/images/l2.png"
                alt="Eco Aware Coat"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div>
              <img
                src="/images/l3.png"
                alt="Denim Jacket"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Bottom-Right Images */}
            <div>
              <img
                src="/images/l4.png"
                alt="Sitting Model"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div>
              <img
                src="/images/l5.png"
                alt="Denim Fashion"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
