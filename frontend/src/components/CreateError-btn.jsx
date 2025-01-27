import React, {} from "react";
import { useNavigate } from 'react-router-dom';

export function CreateButton() {
    const navigate = useNavigate();
    
      const handleClick = () => {
        navigate('/create-error'); 
      };
    
  
    return (
      <button
        onClick={handleClick}
        className="bg-black text-white px-10 py-2 rounded-md shadow-md hover:bg-gray-800"
      >
        + Create
      </button>
    );
  }
  