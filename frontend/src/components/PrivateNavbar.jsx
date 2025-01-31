import React, { useState } from 'react';
import Logo from './Logo';
import 'font-awesome/css/font-awesome.min.css';
import { logout } from '../services/logoutService';


export default function PrivateNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

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
        <a href="/notification" className="text-gray-800 hover:text-gray-600 flex items-center">
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 611.999 611.999" 
                height="24" 
                width="24" 
                fill="#000000" 
                className="mr-2"
            >
                <g>
                <g>
                    <g>
                    <path d="M570.107,500.254c-65.037-29.371-67.511-155.441-67.559-158.622v-84.578c0-81.402-49.742-151.399-120.427-181.203C381.969,34,347.883,0,306.001,0c-41.883,0-75.968,34.002-76.121,75.849c-70.682,29.804-120.425,99.801-120.425,181.203v84.578c-0.046,3.181-2.522,129.251-67.561,158.622c-7.409,3.347-11.481,11.412-9.768,19.36c1.711,7.949,8.74,13.626,16.871,13.626h164.88c3.38,18.594,12.172,35.892,25.619,49.903c17.86,18.608,41.479,28.856,66.502,28.856c25.025,0,48.644-10.248,66.502-28.856c13.449-14.012,22.241-31.311,25.619-49.903h164.88c8.131,0,15.159-5.676,16.872-13.626C581.586,511.664,577.516,503.6,570.107,500.254z M484.434,439.859c6.837,20.728,16.518,41.544,30.246,58.866H97.32c13.726-17.32,23.407-38.135,30.244-58.866H484.434z M306.001,34.515c18.945,0,34.963,12.73,39.975,30.082c-12.912-2.678-26.282-4.09-39.975-4.09s-27.063,1.411-39.975,4.09C271.039,47.246,287.057,34.515,306.001,34.515z M143.97,341.736v-84.685c0-89.343,72.686-162.029,162.031-162.029s162.031,72.686,162.031,162.029v84.826c0.023,2.596,0.427,29.879,7.303,63.465H136.663C143.543,371.724,143.949,344.393,143.97,341.736z M306.001,577.485c-26.341,0-49.33-18.992-56.709-44.246h113.416C355.329,558.493,332.344,577.485,306.001,577.485z"/>
                    <path d="M306.001,119.235c-74.25,0-134.657,60.405-134.657,134.654c0,9.531,7.727,17.258,17.258,17.258c9.531,0,17.258-7.727,17.258-17.258c0-55.217,44.923-100.139,100.142-100.139c9.531,0,17.258-7.727,17.258-17.258C323.259,126.96,315.532,119.235,306.001,119.235z"/>
                    </g>
                </g>
                </g>
            </svg>
          </a>
          <a href="/home" className="text-gray-800 hover:text-gray-600">
            HOME
          </a>
          <a href="/profile" className="text-gray-800 hover:text-gray-600">
            PROFILE
          </a>
          <button 
            onClick={() => setShowLogoutModal(true)} 
            className="text-gray-800 hover:text-gray-600"
          >
            LOGOUT
          </button>
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
            href="/notification"
            className="block py-2 text-gray-800 hover:text-gray-600"
            onClick={() => setIsOpen(false)}
          >
            Notification
          </a>
          <a
            href="/home"
            className="block py-2 text-gray-800 hover:text-gray-600"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="/profile"
            className="block py-2 text-gray-800 hover:text-gray-600"
            onClick={() => setIsOpen(false)}
          >
            Profile
          </a>
          <button className="block w-full text-left py-2 text-gray-800 hover:text-gray-600" onClick={() => { setIsOpen(false); setShowLogoutModal(true); }}>Logout</button>
        </div>
      )}

    {showLogoutModal && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
        <div className="bg-white text-white p-8 rounded-lg shadow-lg max-w-sm w-full">
          <h2 className="text-xl font-semibold mb-4 text-center text-black">Confirm Logout</h2>
          <p className="text-black text-center mb-6">Are you sure you want to log out?</p>
          <div className="flex justify-between space-x-4">
            <button
              className="bg-gray-600 hover:bg-gray-500 text-white px-6 py-2 rounded transition duration-300 ease-in-out"
              onClick={() => setShowLogoutModal(false)}
            >
              Cancel
            </button>
            <button
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded transition duration-300 ease-in-out"
              onClick={logout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    )}

    </nav>
  );
}