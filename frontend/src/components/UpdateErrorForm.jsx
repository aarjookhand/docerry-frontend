import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import authService from "../services/authService"

export default function UpdateErrorForm() {
  
  const [formData, setFormData] = useState({
    issueId: "",
    userId: 1,  
    title: "",
    content: "",
    solution: "",
    severity: "",
    affectedComponents: "",
    rootCause: "",
  });

  const loggedInUserId = authService.getUserIdFromToken();
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const { issueId } = useParams();
  const navigate = useNavigate();

  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/issue/${issueId}`);
        if (response.ok) {
          const data = await response.json();
          if (data.userId !== loggedInUserId) {
            alert("You are not authorized to update this issue.");
            navigate("/profile");
            return;
          }
          setFormData(data); 
          console.log(data)
        } else {
          alert("Failed to fetch issue data.");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        alert("An error occurred while fetching issue data.");
      }
    };
    fetchData();
  }, [issueId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:8080/issue/${issueId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Issue updated successfully!");
        navigate("/profile");
      } else {
        alert("Failed to update the issue.");
      }
    } catch (error) {
      console.error("Error updating data:", error);
      alert("An error occurred while updating.");
    }
  };

  const handleCancel = () => {
    if (window.confirm("Are you sure you want to leave? Unsaved changes will be lost.")) {
      navigate("/profile");
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:8080/issue/${issueId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        alert("Issue deleted successfully!");
        navigate("/profile");
      } else {
        alert("Failed to delete the issue.");
      }
    } catch (error) {
      console.error("Error deleting data:", error);
      alert("An error occurred while deleting.");
    }
  };


  return (
    <div className="p-6 max-w-screen-lg mx-auto bg-gray-900 text-white rounded-lg shadow-xl">
      <h1 className="text-2xl font-bold mb-6 text-center">Update Your Approach</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Error Name */}
        <div>
          <label className="block font-semibold mb-1">Error Name <span className="text-red-500">*</span></label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full bg-gray-800 text-white border border-gray-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
            placeholder="Enter the error title"
            required
          />
        </div>
  
        {/* Error Content */}
        <div>
          <label className="block font-semibold mb-1">Error Content <span className="text-red-500">*</span></label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            className="w-full bg-gray-800 text-white border border-gray-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
            rows="4"
            placeholder="Describe the error details"
            required
          />
        </div>
  
        {/* Affected Components */}
        <div>
          <label className="block font-semibold mb-1">Affected Components</label>
          <input
            type="text"
            name="affectedComponents"
            value={formData.affectedComponents}
            onChange={handleChange}
            className="w-full bg-gray-800 text-white border border-gray-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., API, UI"
          />
        </div>
  
        {/* Severity Level */}
        <div>
          <label className="block font-semibold mb-1">Severity Level</label>
          <input
            type="text"
            name="severity"
            value={formData.severity}
            onChange={handleChange}
            className="w-full bg-gray-800 text-white border border-gray-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., Critical, Low"
          />
        </div>
  
        {/* Root Cause */}
        <div>
          <label className="block font-semibold mb-1">Root Cause</label>
          <input
            type="text"
            name="rootCause"
            value={formData.rootCause}
            onChange={handleChange}
            className="w-full bg-gray-800 text-white border border-gray-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
            placeholder="Describe the root cause"
          />
        </div>
  
        {/* My Approach */}
        <div>
          <label className="block font-semibold mb-1">My Approach <span className="text-red-500">*</span></label>
          <textarea
            name="solution"
            value={formData.solution}
            onChange={handleChange}
            className="w-full bg-gray-800 text-white border border-gray-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
            rows="4"
            placeholder="Describe the solution"
            required
          />
        </div>
  
        {/* Buttons */}
        <div className="flex justify-between items-center">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold shadow-lg transition"
          >
            Update
          </button>
          <button
            type="button"
            className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-2 rounded-lg font-semibold shadow-lg transition"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            type="button"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold shadow-lg transition"
            onClick={() => setShowDeleteConfirmation(true)}
          >
            Delete
          </button>
        </div>
      </form>
  
      {/* Delete Confirmation Modal */}
      {showDeleteConfirmation && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white">
            <h2 className="text-xl font-bold mb-4">Confirm Delete</h2>
            <p>Are you sure you want to delete this issue? This action cannot be undone.</p>
            <div className="mt-6 flex justify-end space-x-4">
              <button
                className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-lg font-semibold"
                onClick={() => setShowDeleteConfirmation(false)}
              >
                Cancel
              </button>
              <button
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
  
}
