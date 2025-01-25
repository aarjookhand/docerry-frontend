import React, { useState } from 'react';
import Logo from './Logo';

export default function PublicNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white">
      <div className="flex justify-between items-center py-6 px-8">
        {/* Logo */}
        <Logo />

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-medium">
          <a href="/" className="text-gray-800 hover:text-gray-600">
            HOME
          </a>
          <a href="/about" className="text-gray-800 hover:text-gray-600">
            ABOUT
          </a>
          <a href="/contact" className="text-gray-800 hover:text-gray-600">
            CONTACT US
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isOpen
                    ? 'M6 18L18 6M6 6l12 12' // X icon for closing
                    : 'M4 6h16M4 12h16M4 18h16' // Hamburger menu icon
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-8 pb-4 bg-white">
          <a
            href="/"
            className="block py-2 text-gray-800 hover:text-gray-600"
            onClick={() => setIsOpen(false)}
          >
            HOME
          </a>
          <a
            href="/about"
            className="block py-2 text-gray-800 hover:text-gray-600"
            onClick={() => setIsOpen(false)}
          >
            ABOUT
          </a>
          <a
            href="/contact"
            className="block py-2 text-gray-800 hover:text-gray-600"
            onClick={() => setIsOpen(false)}
          >
            CONTACT US
          </a>
        </div>
      )}
    </nav>
  );
}
