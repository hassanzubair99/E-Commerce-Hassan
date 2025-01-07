import React from "react";
import Link from "next/link";
const Navbar0= () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left Section: Logo */}
        <div className="text-2xl font-bold text-gray-900">
          Bandage
        </div>

        {/* Center Section: Navigation Links */}
        <nav className="hidden md:flex space-x-6 text-gray-500 font-medium">
        <Link href="/">Home </Link>
          <Link href="/shop" className="hover:text-gray-900 transition">Product</Link>
          <Link href="/priceing" className="hover:text-gray-900 transition">Pricing</Link>
          <Link href="/contact" className="hover:text-gray-900 transition">Contact</Link>
          <Link href="/contact" className="hover:text-gray-900 transition">Talk To Us</Link>
        </nav>

        {/* Right Section: Login and Button */}
        <div className="flex items-center space-x-6">
          <a href="#" className="text-blue-500 font-medium hover:underline">Login</a>
          <a
            href="#"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md font-medium flex items-center transition"
          >
            Become a member
            <span className="ml-2">→</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button className="text-gray-500 hover:text-gray-900 focus:outline-none">
            {/* Menu Icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar0;
