import React, { useEffect, useState } from 'react';
import { Edit3 } from 'lucide-react';

export default function UserCard() {
  const [userData, setUserData] = useState(null);
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    if (!userId) return; 

    const fetchUserData = async () => {
      try {
        // TODO
        const response = await fetch("");
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [userId]);

  if (!userData) return <p>Loading user data...</p>;

  return (
    <div className="max-w-sm p-6 bg-white rounded-2xl shadow-md flex items-start justify-between">
      <div>
        <p className="text-lg font-semibold text-gray-600 mt-2">
          {userData.email}
        </p>
        <p className="text-sm text-gray-600 mt-1">
          <span className="font-medium">Since</span> {new Date(userData.dateJoined).toLocaleDateString()}
        </p>
        <p className="text-sm text-gray-600 mt-1">
          <span className="font-medium">Scored Points:</span> {userData.scoredPoints}
        </p>
      </div>

      <button className="flex items-center text-gray-400 hover:text-black">
        <Edit3 size={18} className="mr-1" />
      </button>
    </div>
  );
}
