import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

export default function PublicNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center py-6 px-8 bg-white">
      <Logo />
      {/* Hamburger Icon */}
      <button
        className="block md:hidden text-gray-800"
        onClick={toggleMenu}
        aria-label="Toggle navigation"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8 font-medium">
        <a href="/" className="text-gray-800 hover:text-gray-600">HOME</a>
        <a href="/about" className="text-gray-800 hover:text-gray-600">ABOUT</a>
        <a href="/contact" className="text-gray-800 hover:text-gray-600">CONTACT US</a>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white z-10 flex flex-col space-y-4 p-6 md:hidden">
          <a href="/" className="text-gray-800 hover:text-gray-600" onClick={toggleMenu}>
            HOME
          </a>
          <a href="/about" className="text-gray-800 hover:text-gray-600" onClick={toggleMenu}>
            ABOUT
          </a>
          <a href="/contact" className="text-gray-800 hover:text-gray-600" onClick={toggleMenu}>
            CONTACT US
          </a>
        </div>
      )}
    </nav>
  );
}
