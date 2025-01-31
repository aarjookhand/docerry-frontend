import React from 'react';

export default function ContactInfo() {
  return (
    <div className="max-w-lg mx-auto p-8 to-black shadow-xl rounded-lg border border-gray-400">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-6 tracking-wide">Contact Us</h2>
      <p className="text-lg text-gray-700 mb-8">Have a question or need support? We are here to help!</p>

      <div className="space-y-6">
        {/* Sales Inquiries */}
        <div className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg shadow-md hover:bg-gray-200 transition duration-300 ease-in-out">
          <span className="text-3xl text-blue-600">💬</span>
          <div>
            <p className="text-gray-800 font-semibold">For sales inquiries:</p>
            <a href="mailto:sales@docerry.com" className="text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out">
              sales@docerry.com
            </a>
          </div>
        </div>

        {/* Support */}
        <div className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg shadow-md hover:bg-gray-200 transition duration-300 ease-in-out">
          <span className="text-3xl text-blue-600">🔧</span>
          <div>
            <p className="text-gray-800 font-semibold">For support:</p>
            <a href="mailto:support@docerry.com" className="text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out">
              support@docerry.com
            </a>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg shadow-md hover:bg-gray-200 transition duration-300 ease-in-out">
          <span className="text-3xl text-blue-600">📞</span>
          <div>
            <p className="text-gray-800 font-semibold">Call us:</p>
            <p className="text-gray-800">+33 01 01 01 01 01</p>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg shadow-md hover:bg-gray-200 transition duration-300 ease-in-out">
          <span className="text-3xl text-blue-600">📍</span>
          <div>
            <p className="text-gray-800 font-semibold">Our office:</p>
            <p className="text-gray-800">Paris, France</p>
          </div>
        </div>
      </div>
    </div>
  );
}
