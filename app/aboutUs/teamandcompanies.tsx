import React from "react";

const TeamAndCompanies = () => {
  return (
    <div className="w-full">
      {/* Team Section */}
      <div className=" mx-auto px-6 py-12  bg-white ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center  bg-white max-w">
          {/* Team Member 1 */}
          <div className="flex flex-col items-center  bg-white max-w">
            <img
              src="/images/t2.png" // Corrected Path
              alt="Team Member 1"
              className="rounded-md w-full max-w-xs"
            />
            <h3 className="text-lg font-bold text-black mt-4">Username</h3>
            <p className="text-gray-500 text-sm">Profession</p>
            <div className="flex mt-2 space-x-3 text-blue-500">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="flex flex-col items-center  bg-white max-w">
            <img
              src="/images/t4.png" // Corrected Path
              alt="Team Member 1"
              className="rounded-md w-full max-w-xs"
            />
            <h3 className="text-lg font-bold text-black mt-4">Username</h3>
            <p className="text-gray-500 text-sm">Profession</p>
            <div className="flex mt-2 space-x-3 text-blue-500">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="flex flex-col items-center bg-white max-w">
            <img
              src="/images/t4.png" // Corrected Path
              alt="Team Member 3"
              className="rounded-md w-full max-w-xs"
            />
            <h3 className="text-lg font-bold text-black mt-4">Username</h3>
            <p className="text-gray-500 text-sm">Profession</p>
            <div className="flex mt-2 space-x-3 text-blue-500">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
        </div>
      </div>

      {/* Big Companies Section */}
      <div className="bg-gray-100 py-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Big Companies Are Here</h2>
          <p className="text-gray-500 mb-8">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>

        {/* Company Logos */}
        <div className="flex flex-wrap justify-center gap-8 px-4">
          <img
            src="/images/C1.png" // Corrected Path
            alt="Hooli"
            className="h-8 md:h-12"
          />
          <img
            src="/images/C2.png" // Corrected Path
            alt="Lyft"
            className="h-8 md:h-12"
          />
          <img
            src="/images/C3.png" // Corrected Path
            alt="Stripe"
            className="h-8 md:h-12"
          />
          <img
            src="/images/C4.png" // Corrected Path
            alt="AWS"
            className="h-8 md:h-12"
          />
          <img
            src="/images/C5.png" // Corrected Path
            alt="Reddit"
            className="h-8 md:h-12"
          />
        </div>
      </div>
    </div>
  );
};

export default TeamAndCompanies;
