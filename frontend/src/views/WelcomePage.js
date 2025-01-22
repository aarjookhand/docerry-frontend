import React from 'react';
import { useNavigate } from 'react-router-dom';
import PublicNavbar from '../components/PublicNavbar';

export default function WelcomePage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/signup'); 
  };

  return (
    <div className="min-h-screen bg-white">
      <PublicNavbar />
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
        <h1 className="text-5xl font-black mb-12 tracking-tight">
          Make Every Fix a Team Asset.
        </h1>
        <button
          className="px-10 py-3 border border-black rounded font-medium hover:bg-black hover:text-white transition-colors"
          onClick={handleClick}
        >
          JOIN NOW
        </button>
      </div>
    </div>
  );
}
