import React from "react";

const NewCollection = () => {
  return (
    <div
      className="h-screen flex items-center justify-center"
      style={{
        backgroundImage: 'url(/images/hero_bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center lg:items-start text-white">
        <div className="text-center lg:text-left lg:w-1/2 px-4">
          <p className="uppercase text-sm tracking-wide font-bold">Summer 2020</p>
            <h1 className="text-4xl lg:text-6xl font-bold mt-6">New Collection</h1>
          <p className="text-base mt-4">
            We know how large objects will act, but things on a small scale.
          </p>
          <button className="mt-6 bg-[#2DC071] text-white font-bold py-2 px-6 rounded hover:bg-green-600 transition">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewCollection;
