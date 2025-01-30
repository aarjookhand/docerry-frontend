import React from "react";

export function ErrorCard({ created_at, title , onClick}) {
    return (
      <div className="bg-gray-100 px-5 py-5 rounded-md shadow-md mb-4"
      onClick={onClick}>
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-gray-600">
          Date posted: {created_at}
        </p>
     </div>
    );
  }
  