'use client'
import React, { useState } from 'react';
import { FaHeart, FaShoppingBag, FaBars, FaTimes } from 'react-icons/fa'; // Importing Font Awesome Icons
import Image from 'next/image'; // Importing Next.js Image component

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage mobile and tablet menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu visibility
  };

  return (
    <div className="bg-white border-b border-gray-300 py-4 px-8">
      <div className="flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <Image
            src="/V1.png"
            alt="Nike"
            className="h-8" 
            width={60} // Set width and height for the image
            height={60}
            layout="intrinsic" // Ensures responsiveness and maintains aspect ratio
          />
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes className="h-6 w-6 text-gray-700" /> : <FaBars className="h-6 w-6 text-gray-700" />}
          </button>
        </div>

        {/* Navigation Links for Large Screens */}
        <div className="hidden lg:flex items-center space-x-1 xl:gap-10 2xl:gap-44">
          <a href="#" className="text-gray-700 hover:text-black py-2 px-4 text-sm lg:text-base">New & Featured</a>
          <a href="#" className="text-gray-700 hover:text-black py-2 px-4 text-sm lg:text-base">Men</a>
          <a href="#" className="text-gray-700 hover:text-black py-2 px-4 text-sm lg:text-base">Women</a>
          <a href="#" className="text-gray-700 hover:text-black py-2 px-4 text-sm lg:text-base">Kids</a>
          <a href="#" className="text-gray-700 hover:text-black py-2 px-4 text-sm lg:text-base">Sale</a>
          <a href="#" className="text-gray-700 hover:text-black py-2 px-4 text-sm lg:text-base">SNKRS</a>

          {/* Search Icon inside the Search Bar for Large Screens */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-500 rounded-full py-2 px-4 w-64 pl-10" // Added padding left for space for the icon
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-3 top-2.5 text-gray-600 w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12h3l-4-4m0 8l4-4H9m6 4H9m4 4v-4h3a9 9 0 1 0-9 9z"
              />
            </svg>
          </div>

          {/* Heart Icon for Large Screens */}
          <div className="flex items-center space-x-4">
            {/* Shopping Bag Icon */}
            <FaShoppingBag className="h-6 w-6 text-gray-700 hover:text-black" />
            {/* Heart Icon */}
            <FaHeart className="h-6 w-6 text-gray-700 hover:text-black" />
          </div>
        </div>
      </div>

      {/* Mobile Menu Section */}
      {isMenuOpen && (
        <div className="lg:hidden flex flex-col space-y-4 py-4">
          <a href="#" className="text-gray-700 hover:text-black py-2 px-4 text-sm lg:text-base">New & Featured</a>
          <a href="#" className="text-gray-700 hover:text-black py-2 px-4 text-sm lg:text-base">Men</a>
          <a href="#" className="text-gray-700 hover:text-black py-2 px-4 text-sm lg:text-base">Women</a>
          <a href="#" className="text-gray-700 hover:text-black py-2 px-4 text-sm lg:text-base">Kids</a>
          <a href="#" className="text-gray-700 hover:text-black py-2 px-4 text-sm lg:text-base">Sale</a>
          <a href="#" className="text-gray-700 hover:text-black py-2 px-4 text-sm lg:text-base">SNKRS</a>

          {/* Mobile Search Icon */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-600 rounded-full py-2 px-4 w-64 pl-10" // Added padding left for space for the icon
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-3 top-2.5 text-gray-500 w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12h3l-4-4m0 8l4-4H9m6 4H9m4 4v-4h3a9 9 0 1 0-9 9z"
              />
            </svg>
          </div>

          {/* Mobile Heart Icon */}
          <div className="flex items-center space-x-4">
            {/* Heart Icon */}
            <FaHeart className="h-6 w-6 text-gray-700 hover:text-black" />
            {/* Shopping Bag Icon */}
            <FaShoppingBag className="h-6 w-6 text-gray-700 hover:text-black" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
