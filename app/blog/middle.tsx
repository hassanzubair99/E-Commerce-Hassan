import React from "react";

const ProductPage = () => {
  return (
    <div className="mx-auto p-4 md:flex md:items-start md:justify-center bg-white">
      {/* Left Side: Image Section */}
      <div className="w-full md:w-1/2 p-4">
        <div className="relative">
          <img
            src="/images/i1.png" // Replace with correct image path
            alt="Floating Phone"
            className="w-full object-cover rounded-md"
          />
          {/* Arrows */}
          <button className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700">
            &#9664;
          </button>
          <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700">
            &#9654;
          </button>
        </div>
        {/* Thumbnail Images */}
        <div className="flex mt-4 space-x-2">
          <img
            src="/images/i2.png" // Replace with correct thumbnail path
            alt="Thumbnail 1"
            className="w-1/3 cursor-pointer rounded-md border hover:border-blue-500"
          />
          <img
            src="/images/i3.png"
            alt="Thumbnail 2"
            className="w-1/3 cursor-pointer rounded-md border hover:border-blue-500"
          />
        </div>
      </div>

      {/* Right Side: Product Info */}
      <div className="w-full md:w-1/2 p-4 text-black">
        <h2 className="text-2xl font-semibold mb-2">Floating Phone</h2>

        {/* Reviews */}
        <div className="flex items-center mb-2">
          <div className="text-yellow-400 text-lg">
            ★★★★☆
          </div>
          <span className="ml-2 text-gray-500 text-sm">(10 Reviews)</span>
        </div>

        {/* Price */}
        <div className="text-2xl font-bold mb-2">$1,139.33</div>

        {/* Availability */}
        <div className="mb-4">
          Availability:{" "}
          <span className="text-green-500 font-medium">In Stock</span>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-4">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent door ENIM RELIT Mollie. Excitation venial
          consequent sent nostrum met.
        </p>

        {/* Color Options */}
        <div className="flex items-center space-x-2 mb-4">
          <div className="w-6 h-6 rounded-full bg-blue-500 cursor-pointer"></div>
          <div className="w-6 h-6 rounded-full bg-green-500 cursor-pointer"></div>
          <div className="w-6 h-6 rounded-full bg-orange-500 cursor-pointer"></div>
          <div className="w-6 h-6 rounded-full bg-gray-800 cursor-pointer"></div>
        </div>

        {/* Buttons */}
        <div className="flex items-center space-x-4">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition">
            Select Options
          </button>
          <button className="border border-gray-400 py-2 px-4 rounded-md hover:border-gray-600 transition">
            ♥
          </button>
          <button className="border border-gray-400 py-2 px-4 rounded-md hover:border-gray-600 transition">
            🛒
          </button>
          <button className="border border-gray-400 py-2 px-4 rounded-md hover:border-gray-600 transition">
            👁️
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
