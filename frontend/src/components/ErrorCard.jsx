import React from "react";

export function ErrorCard({ email, date, name, description }) {
    return (
      <div className="bg-gray-100 px-10 rounded-md shadow-md mb-4">
        <p className="text-gray-600">
          {email} - Date posted: {date}
        </p>
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-gray-800">{description}</p>
      </div>
    );
  }
  