import React, { useState, useEffect  } from "react";
import { data, useNavigate } from "react-router-dom";
import authService  from "../services/authService";

export default function ErrorForm() {
  const [formData, setFormData] = useState({
    issueId: "",
    userId: "",  
    title: "",
    content: "",
    solution: "",
    severity: "",
    affectedComponents: "",
    rootCause: "",
  });

  const [isFillingForm, setIsFillingForm] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    const userId = authService.getUserIdFromToken();
    if (userId) {
      setFormData((prevData) => ({
        ...prevData,
        userId: userId,  
      }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  // Save the form data to the backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/issue", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Issue created successfully!");
        setIsFillingForm(false);
        console.log(data)
        navigate("/home"); 
      } else {
        alert("Failed to create the issue.");
      }
    } catch (error) {
      console.error("Error saving data:", error);
      alert("An error occurred while saving.");
    }
  };


  // Go Back Handler
  const handleGoBack = () => {
    setIsFillingForm(true); 
    if (
      window.confirm("Are you sure you want to leave? Unsaved changes will be lost.")
    ) {
      navigate(-1); 
    }
  };

  return (
    <div className="p-6 max-w-screen-lg mx-auto bg-gray-100 rounded-lg shadow-md">
      <button
        className="text-sm text-gray-800 bg-gray-200 px-4 py-2 rounded-md mb-6 hover:bg-gray-300 transition-all"
        onClick={handleGoBack}
      >
        &larr; Go Back
      </button>
  
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Error Name */}
        <div>
          <label className="block text-gray-700 font-semibold">Error Name <span className="text-red-500">*</span></label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
            required
          />
        </div>
  
        {/* Error Content */}
        <div>
          <label className="block text-gray-700 font-semibold">Error Content <span className="text-red-500">*</span></label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
            rows="4"
            required
          />
        </div>
  
        {/* Affected Components */}
        <div>
          <label className="block text-gray-700 font-semibold">Affected Components</label>
          <input
            type="text"
            name="affectedComponents"
            value={formData.affectedComponents}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
          />
        </div>
  
        {/* Severity Level */}
        <div>
          <label className="block text-gray-700 font-semibold">Severity Level</label>
          <input
            type="text"
            name="severity"
            value={formData.severity}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
          />
        </div>
  
        {/* Root Cause */}
        <div>
          <label className="block text-gray-700 font-semibold">Root Cause</label>
          <input
            type="text"
            name="rootCause"
            value={formData.rootCause}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
          />
        </div>
  
        {/* My Approach */}
        <div>
          <label className="block text-gray-700 font-semibold">My Approach <span className="text-red-500">*</span></label>
          <textarea
            name="solution"
            value={formData.solution}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
            rows="4"
            required
          />
        </div>
  
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
        >
          Create
        </button>
      </form>
    </div>
  );
  
}
