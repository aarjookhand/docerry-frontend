import React from 'react';

export default function ContactInfo() {
  return (
    <div className="max-w-lg mx-auto p-12 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <p className="text-gray-700 mb-6 text-3xl">We’d love to hear from you!</p>
      <div className="space-y-4">
        <div className="flex items-center justify-center">
          <span className="text-xl mr-3">💬</span>
          <p>
            <strong>For sales inquiries:</strong>{' '}
            <a href="mailto:sales@docerry.com" className="text-blue-600 hover:underline">
              sales@docerry.com
            </a>
          </p>
        </div>
        <div className="flex items-center justify-center">
          <span className="text-xl mr-3">🔧</span>
          <p>
            <strong>For support:</strong>{' '}
            <a href="mailto:support@docerry.com" className="text-blue-600 hover:underline">
              support@docerry.com
            </a>
          </p>
        </div>
        <div className="flex items-center justify-center">
          <span className="text-xl mr-3">📞</span>
          <p>
             +33 01 01 01 01 01
          </p>
        </div>
        <div className="flex items-center justify-center">
          <span className="text-xl mr-3">📍</span>
          <p>
             Paris, France
          </p>
        </div>
      </div>
    </div>
  );
}
