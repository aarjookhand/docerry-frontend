import React from 'react'
import Logo from './Logo'

export default function PublicNavbar() {
    return (
      <nav className="flex justify-between items-center py-6 px-8">
        <Logo />
        <div className="space-x-8 font-medium">
            <a href="/" className="text-gray-800 hover:text-gray-600">HOME</a> 
            <a href="/about" className="text-gray-800 hover:text-gray-600">ABOUT</a>
            <a href="/contact" className="text-gray-800 hover:text-gray-600">CONTACT US</a>
        </div>
      </nav>
    )
  }