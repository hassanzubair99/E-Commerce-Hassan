import React from "react";

const Footer4 = () => {
  return (
    <footer className="bg-white px-8 py-12">
      {/* Top Section */}
      <div className="flex justify-between items-center pb-8 border-b border-gray-200">
        <h1 className="text-3xl font-bold text-gray-800">Bandage</h1>
        <div className="flex gap-4">
          <a href="#" className="text-blue-500 hover:text-blue-700">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-blue-500 hover:text-blue-700">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-blue-500 hover:text-blue-700">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>

      {/* Links Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 py-8 text-gray-600">
        {/* Company Info */}
        <div>
          <h2 className="font-bold text-gray-800 mb-4">Company Info</h2>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Carrier</li>
            <li>We are hiring</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h2 className="font-bold text-gray-800 mb-4">Legal</h2>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Carrier</li>
            <li>We are hiring</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Features */}
        <div>
          <h2 className="font-bold text-gray-800 mb-4">Features</h2>
          <ul className="space-y-2">
            <li>Business Marketing</li>
            <li>User Analytic</li>
            <li>Live Chat</li>
            <li>Unlimited Support</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h2 className="font-bold text-gray-800 mb-4">Resources</h2>
          <ul className="space-y-2">
            <li>IOS & Android</li>
            <li>Watch a Demo</li>
            <li>Customers</li>
            <li>API</li>
          </ul>
        </div>

        {/* Get In Touch */}
        <div>
          <h2 className="font-bold text-gray-800 mb-4">Get In Touch</h2>
          <div className="flex">
            <input
              type="email"
              placeholder="Your Email"
              className="border px-3 py-2 rounded-l w-full outline-none"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-2">Lore imp sum dolor Amit</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer4;
