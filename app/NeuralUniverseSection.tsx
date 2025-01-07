import React from 'react';

const NeuralUniverseSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between bg-white p-8 lg:p-16">
      {/* Image Section */}
      <div className="flex-1 mb-8 lg:mb-0 lg:mr-8">
        <img
          src="/images/BG1.png"
          alt="Happy couple"
          className="w-full max-w-lg mx-auto rounded-md object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="flex-1 text-center lg:text-left">
        <p className="text-gray-500 uppercase text-sm mb-2">Summer 2020</p>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Part of the Neural Universe
        </h2>
        <p className="text-gray-600 text-lg mb-6">
          We know how large objects will act, but things on a small scale.
        </p>
        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
          <button className="bg-green-500 text-white font-semibold py-2 px-6 rounded hover:bg-green-600 transition">
            Buy Now
          </button>
          <button className="border-2 border-green-500 text-green-500 font-semibold py-2 px-6 rounded hover:bg-green-500 hover:text-white transition">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default NeuralUniverseSection;
