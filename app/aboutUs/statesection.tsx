import React from "react";

const StatsSection = () => {
  return (
    <div className="max-w mx-auto px-4 py-12 md:py-16 bg-white">
      {/* Heading Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Left Side */}
        <div>
          <h4 className="text-sm font-semibold text-red-500 mb-2">
            Problems trying
          </h4>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </h2>
        </div>

        {/* Right Side */}
        <div>
          <p className="text-gray-500 leading-relaxed">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 text-center gap-y-8">
        {/* Stat 1 */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-1">15K</h3>
          <p className="text-gray-500 text-sm font-medium">Happy Customers</p>
        </div>

        {/* Stat 2 */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-1">150K</h3>
          <p className="text-gray-500 text-sm font-medium">Monthly Visitors</p>
        </div>

        {/* Stat 3 */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-1">15</h3>
          <p className="text-gray-500 text-sm font-medium">
            Countries Worldwide
          </p>
        </div>

        {/* Stat 4 */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-1">100+</h3>
          <p className="text-gray-500 text-sm font-medium">Top Partners</p>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
