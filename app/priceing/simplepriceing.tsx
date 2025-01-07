import React from "react";

const PricingSection = () => {
  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="bg-white text-center py-12">
        <h4 className="text-sm font-semibold tracking-widest text-gray-500">
          PRICING
        </h4>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mt-2">
          Simple Pricing
        </h1>
        {/* Breadcrumb */}
        <div className="mt-4 text-gray-600">
          <span className="font-semibold">Home</span>
          <span className="mx-2">&gt;</span>
          <span>Pricing</span>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Pricing
          </h2>
          <p className="text-gray-500 mt-4 mx-auto max-w-2xl">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>

          {/* Toggle Switch */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <span className="text-gray-800 font-semibold">Monthly</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                disabled // Static checkbox (non-functional)
              />
              <div className="w-12 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-6 peer-checked:after:bg-blue-500 peer-checked:bg-blue-500 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
            </label>
            <span className="text-gray-800 font-semibold">Yearly</span>
            <button className="bg-blue-500 text-white px-4 py-1 rounded-md shadow-md hover:bg-blue-600">
              Save 25%
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
