import React from "react";

const PricingCards = () => {
  return (
    <div className="w-full bg-gray-50 py-12">
      {/* Pricing Section */}
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Pricing Plans
          </h2>
          <p className="text-gray-500 text-center max-w-lg">
            Choose the plan that fits your needs and helps you organize across
            all apps by hand.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Free Plan */}
          <div className="border border-gray-300 rounded-lg p-6 text-center bg-white">
            <h3 className="text-lg font-semibold text-gray-700">FREE</h3>
            <p className="text-gray-500 mt-2 mb-6">Organize across all apps by hand</p>
            <h4 className="text-4xl font-bold text-blue-500">0 $</h4>
            <p className="text-gray-400">Per Month</p>
            <div className="mt-6">
              <p className="flex items-center justify-center text-green-500">
                &#10004;{" "}
                <span className="text-gray-700 font-medium ml-2">
                  Unlimited product updates
                </span>
              </p>
            </div>
          </div>

          {/* Standard Plan */}
          <div className="border border-gray-300 rounded-lg p-6 text-center bg-gray-800 text-white">
            <h3 className="text-lg font-semibold">STANDARD</h3>
            <p className="mt-2 mb-6 text-gray-300">
              Organize across all apps by hand
            </p>
            <h4 className="text-4xl font-bold">9.99 $</h4>
            <p className="text-gray-400">Per Month</p>
            <div className="mt-6">
              <p className="flex items-center justify-center text-green-400">
                &#10004;{" "}
                <span className="font-medium ml-2">
                  Unlimited product updates
                </span>
              </p>
              <p className="flex items-center justify-center text-green-400">
                &#10004;{" "}
                <span className="font-medium ml-2">
                  Unlimited product updates
                </span>
              </p>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="border border-gray-300 rounded-lg p-6 text-center bg-white">
            <h3 className="text-lg font-semibold text-gray-700">PREMIUM</h3>
            <p className="text-gray-500 mt-2 mb-6">Organize across all apps by hand</p>
            <h4 className="text-4xl font-bold text-blue-500">19.99 $</h4>
            <p className="text-gray-400">Per Month</p>
            <div className="mt-6">
              <p className="flex items-center justify-center text-green-500">
                &#10004;{" "}
                <span className="text-gray-700 font-medium ml-2">
                  Unlimited product updates
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Trusted Companies Section */}
        <div className="mt-16 text-center">
          <h3 className="text-lg font-medium text-gray-500 mb-6">
            Trusted By Over 4000 Big Companies
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            <img
              src="/images/C1.png"
              alt="Hooli"
              className="h-8 md:h-10"
            />
            <img
              src="/images/C2.png"
              alt="Lyft"
              className="h-8 md:h-10"
            />
            <img
              src="/images/C3.png"
              alt="Stripe"
              className="h-8 md:h-10"
            />
            <img
              src="/images/C4.png"
              alt="AWS"
              className="h-8 md:h-10"
            />
            <img
              src="/images/C5.png"
              alt="Reddit"
              className="h-8 md:h-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCards;
