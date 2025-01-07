import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-8 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-8">
          {/* Logo */}
          <div className="mb-6 lg:mb-0">
            <h2 className="text-2xl font-bold text-gray-800">Bandage</h2>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 flex-1">
            {/* Company Info */}
            <div>
              <h3 className="text-gray-800 font-semibold mb-2">Company Info</h3>
              <ul className="text-gray-500 space-y-1 text-sm">
                <li>About Us</li>
                <li>Carrier</li>
                <li>We are hiring</li>
                <li>Blog</li>
              </ul>
            </div>
            {/* Legal */}
            <div>
              <h3 className="text-gray-800 font-semibold mb-2">Legal</h3>
              <ul className="text-gray-500 space-y-1 text-sm">
                <li>About Us</li>
                <li>Carrier</li>
                <li>We are hiring</li>
                <li>Blog</li>
              </ul>
            </div>
            {/* Features */}
            <div>
              <h3 className="text-gray-800 font-semibold mb-2">Features</h3>
              <ul className="text-gray-500 space-y-1 text-sm">
                <li>Business Marketing</li>
                <li>User Analytic</li>
                <li>Live Chat</li>
                <li>Unlimited Support</li>
              </ul>
            </div>
            {/* Resources */}
            <div>
              <h3 className="text-gray-800 font-semibold mb-2">Resources</h3>
              <ul className="text-gray-500 space-y-1 text-sm">
                <li>IOS & Android</li>
                <li>Watch a Demo</li>
                <li>Customers</li>
                <li>API</li>
              </ul>
            </div>
          </div>

          {/* Get In Touch */}
          <div className="mt-6 lg:mt-0 w-full max-w-md">
            <h3 className="text-gray-800 font-semibold mb-2">Get In Touch</h3>
            <div className="flex mb-2">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border rounded-l-md text-gray-700 focus:outline-none"
              />
              <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600">
                Subscribe
              </button>
            </div>
            <p className="text-gray-500 text-sm">Lore imp sum dolor Amit</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t pt-4 text-center md:text-left flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            Made With Love By Finland All Right Reserved
          </p>
          <div className="flex space-x-4 text-blue-500">
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
