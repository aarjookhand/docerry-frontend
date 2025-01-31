import React from 'react';

export default function PricingPlans() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Plans</h2>
        <p className="text-lg text-gray-600">Find the plan that works best for your team.</p>
      </div>
      <div className="flex flex-wrap justify-center gap-8 px-6">
        {/* Starter Plan */}
        <div className="max-w-sm w-full bg-white border border-gray-300 shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Starter Plan</h3>
          <p className="text-gray-700 mb-6">Perfect for small teams getting started.</p>
          <div className="text-4xl font-bold text-gray-900 mb-6">
            50€<span className="text-lg font-medium">/month</span>
          </div>
          <ul className="text-gray-700 space-y-3 mb-6">
            <li>✔ Up to 10 users</li>
            <li>✔ Email support</li>
          </ul>
        </div>

        {/* Professional Plan */}
        <div className="max-w-sm w-full bg-white border border-gray-300 shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Professional Plan</h3>
          <p className="text-gray-700 mb-6">Great for growing teams.</p>
          <div className="text-4xl font-bold text-gray-900 mb-6">
            150€<span className="text-lg font-medium">/month</span>
          </div>
          <ul className="text-gray-700 space-y-3 mb-6">
            <li>✔ Up to 50 users</li>
            <li>✔ Priority support</li>
          </ul>
        </div>

        {/* Premium Plan */}
        <div className="max-w-sm w-full bg-white border border-gray-300 shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Premium Plan</h3>
          <p className="text-gray-700 mb-6">Ideal for large teams and enterprises.</p>
          <div className="text-4xl font-bold text-gray-900 mb-6">Pay as you go!</div>
          <ul className="text-gray-700 space-y-3 mb-6">
            <li>✔ Unlimited users</li>
            <li>✔ Custom analytics</li>
            <li>✔ Dedicated support</li>
            <li>For more details, contact us!</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
