import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

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

  const { issueId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/issue/${issueId}`);
        if (response.ok) {
          const data = await response.json();
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

  return (
    <div className="p-4 max-w-screen-lg mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Error Name */}
        <div>
          <label className="block font-medium text-gray-700">
            Error Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="border w-full rounded-md px-3 py-2"
            required
          />
        </div>

        {/* Error Content */}
        <div>
          <label className="block font-medium text-gray-700">
            Error Content <span className="text-red-500">*</span>
          </label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            className="border w-full rounded-md px-3 py-2"
            rows="4"
            required
          />
        </div>

        {/* Affected Components */}
        <div>
          <label className="block font-medium text-gray-700">
            Affected Components
          </label>
          <input
            type="text"
            name="affectedComponents"
            value={formData.affectedComponents}
            onChange={handleChange}
            className="border w-full rounded-md px-3 py-2"
          />
        </div>

        {/* Severity Level */}
        <div>
          <label className="block font-medium text-gray-700">
            Severity Level
          </label>
          <input
            type="text"
            name="severity"
            value={formData.severity}
            onChange={handleChange}
            className="border w-full rounded-md px-3 py-2"
          />
        </div>

        {/* Root Cause */}
        <div>
          <label className="block font-medium text-gray-700">Root Cause</label>
          <input
            type="text"
            name="rootCause"
            value={formData.rootCause}
            onChange={handleChange}
            className="border w-full rounded-md px-3 py-2"
          />
        </div>

        {/* My Approach */}
        <div>
          <label className="block font-medium text-gray-700">
            My Approach <span className="text-red-500">*</span>
          </label>
          <textarea
            name="solution"
            value={formData.solution}
            onChange={handleChange}
            className="border w-full rounded-md px-3 py-2"
            rows="4"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="grid grid-cols-2 gap-x-20">
            <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
            >
            Update
            </button>
            <button
            type="button"
            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
            onClick={handleCancel}
            >
            Cancel
            </button>
        </div>

      </form>
    </div>
  );
}
