import React from "react";

const AdditionalInfo = () => {
  return (
    <div className="mx-auto px-4 py-8 bg-white">
      {/* Tabs Section */}
      <div className="flex justify-center space-x-8 border-b mb-8 text-gray-500">
        <span className="cursor-pointer pb-2 border-b-2 border-transparent hover:text-gray-900">
          Description
        </span>
        <span className="cursor-pointer pb-2 border-b-2 border-transparent hover:text-gray-900 font-semibold text-gray-900">
          Additional Information
        </span>
        <span className="cursor-pointer pb-2 border-b-2 border-transparent hover:text-gray-900">
          Reviews (0)
        </span>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left Section */}
        <div>
          <img
            src="/images/col-md-4 (1).png" // Replace with the image path
            alt="Decorative"
            className="w-full rounded-md"
          />
        </div>

        {/* Right Section */}
        <div>
          {/* Title */}
          <h2 className="text-2xl font-bold mb-4 text-gray-900">
            the quick fox jumps over
          </h2>

          {/* Paragraph */}
          <p className="text-gray-600 mb-6 leading-relaxed">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>

          <p className="text-gray-600 mb-8 leading-relaxed">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>

          {/* Right Column Text List */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              the quick fox jumps over
            </h2>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <span className="mr-2">➤</span> the quick fox jumps over the lazy
                dog
              </li>
              <li className="flex items-center">
                <span className="mr-2">➤</span> the quick fox jumps over the lazy
                dog
              </li>
              <li className="flex items-center">
                <span className="mr-2">➤</span> the quick fox jumps over the lazy
                dog
              </li>
              <li className="flex items-center">
                <span className="mr-2">➤</span> the quick fox jumps over the lazy
                dog
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
              the quick fox jumps over
            </h2>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <span className="mr-2">➤</span> the quick fox jumps over the lazy
                dog
              </li>
              <li className="flex items-center">
                <span className="mr-2">➤</span> the quick fox jumps over the lazy
                dog
              </li>
              <li className="flex items-center">
                <span className="mr-2">➤</span> the quick fox jumps over the lazy
                dog
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalInfo;
