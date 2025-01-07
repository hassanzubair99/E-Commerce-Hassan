import React from "react";

const Products = () => {
  return (
    <div className=" flex items-center justify-center bg-[#23856D]">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center text-white">
        {/* Text Section */}
        <div className="text-left lg:w-1/2 px-4">
          <p className="uppercase text-sm tracking-wide">Summer 2020</p>
          <h1 className="text-4xl lg:text-6xl font-bold mt-2">New Collection</h1>
          <p className="text-base mt-2">
            We know how large objects will act, but things on a small scale.
          </p>
          <button className="mt-2 bg-green-500 text-white py-2 px-6 rounded hover:bg-green-600 transition">
            Shop Now
          </button>
        </div>

        {/* Image Section */}
        <div className="mt-8 lg:mt-0 lg:w-1/2 flex justify-center relative">
          <img
            src="\images\mid_bg.png"
            alt="Woman with bags"
            className="max-w-full h-auto rounded-lg"
          />

        </div>
      </div>
    </div>
  );
};

export default Products;
