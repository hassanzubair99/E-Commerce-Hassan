import React from "react";
import Link from "next/link";
import { Links } from "react-router-dom";
const Header = () => {
  return (
    <header>
      {/* Top Bar */}
      <div className="bg-green-600 text-white text-sm py-2">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Left Info */}
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <i className="mr-1">📞</i> (225) 555-0118
            </span>
            <span className="flex items-center">
              <i className="mr-1">✉️</i> michelle.rivera@example.com
            </span>
          </div>

          {/* Center Text */}
          <div className="hidden md:block font-semibold">
            Follow Us and get a chance to win 80% off
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-3">
            <span>Follow Us :</span>
            <i className="cursor-pointer">📸</i>
            <i className="cursor-pointer">🎥</i>
            <i className="cursor-pointer">📘</i>
            <i className="cursor-pointer">🐦</i>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white shadow-md py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logo */}
          <h1 className="text-xl font-bold text-gray-800">Bandage</h1>

          {/* Nav Links */}
          <nav className="hidden md:flex space-x-8 text-black font-bold">
            <Link href="/" className="hover:text-green-600">
              Home
            </Link>
            <a href="/shop" className="hover:text-green-600">
              Shop <span className="text-xs">▼</span>
            </a>
            <Link href="/aboutUs" className="hover:text-green-600">
              About
            </Link>
            <Link href="/blog" className="hover:text-green-600">
              Blog
            </Link>
            <Link href="/contact" className="hover:text-green-600">
              Contact
            </Link>
            <a href="#" className="hover:text-green-600">
              Pages
            </a>
          </nav>

          {/* Right Links */}
          <div className="flex items-center space-x-4 text-sm font-bold text-blue-600">
            <a href="#" className="hover:underline">
              Login / Register
            </a>
            <i className="cursor-pointer text-gray-700">🔍</i>
            <i className="cursor-pointer text-gray-700">🛒 1</i>
            <i className="cursor-pointer text-gray-700">💙</i>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
