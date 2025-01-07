import React from "react";

const ImageWithPlayButton = () => {
  return (
    <div className="bg-white max-w">
    <div
      className="relative w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg bg-cover bg-center bg-white"
      style={{
        backgroundImage: "url('/images/Video card.png')", // Replace with your image path
        height: "400px", // Adjust the height as needed
      }}
    >
      {/* Play Button */}
      <div className="absolute inset-0 flex justify-center items-center ">
        <div className="bg-blue-500 rounded-full p-4 md:p-6 shadow-lg cursor-pointer hover:bg-blue-600 transition duration-300">
          {/* Play Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 md:w-8 md:h-8 text-white"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M11.596 8.697 6.303 11.879A.5.5 0 0 1 5.5 11.5v-7a.5.5 0 0 1 .803-.396l5.293 3.182a.5.5 0 0 1 0 .838z" />
          </svg>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ImageWithPlayButton;


