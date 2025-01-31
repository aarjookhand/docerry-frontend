import React, { useEffect, useState } from 'react';
import { Edit3 } from 'lucide-react';
import authService from '../services/authService';

export default function UserCard() {
  const [userData, setUserData] = useState(null);
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [passwordData, setPasswordData] = useState({ oldPassword: '', newPassword: '' });

  const userId = authService.getUserIdFromToken();

  useEffect(() => {
    if (!userId) return; 

    const fetchUserData = async () => {
      try {
        // TODO BACKEND CALL
        const response = await fetch("");
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasswordData({ ...passwordData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // TODO BACKEND CALL
      const response = await fetch(``, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(passwordData),
      });

      if (response.ok) {
        alert("Password updated successfully!");
        setShowPasswordForm(false);
      } else {
        alert("Failed to update the password.");
      }
    } catch (error) {
      console.error("Error updating password:", error);
      alert("An error occurred while updating the password.");
    }
  };


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

      {showPasswordForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Update Password</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-1">Old Password</label>
                <input
                  type="password"
                  name="oldPassword"
                  value={passwordData.oldPassword}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-1">New Password</label>
                <input
                  type="password"
                  name="newPassword"
                  value={passwordData.newPassword}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  required
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded"
                  onClick={() => setShowPasswordForm(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}


    </div>
  );
}
