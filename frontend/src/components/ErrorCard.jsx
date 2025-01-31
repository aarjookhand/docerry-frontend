import React from "react";

export function ErrorCard({ created_at, title, onClick }) {
  return (
    <div
      className="border-2 text-gray-800 p-6 rounded-lg shadow-md mb-4 cursor-pointer hover:bg-gray-300 transition-all duration-300"
      onClick={onClick}
    >
      <h3 className="text-xl font-semibold text-black mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">
        Date posted: <span className="text-gray-500">{new Date(created_at).toLocaleDateString()}</span>
      </p>
    </div>
  );
}
