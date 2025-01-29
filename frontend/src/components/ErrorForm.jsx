import React, { useState } from "react";
import { data, useNavigate } from "react-router-dom";

export default function ErrorForm() {
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

  const [isFillingForm, setIsFillingForm] = useState(false);
  const navigate = useNavigate();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  // Save the form data to the backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
     // TODO BACKEND CALL
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
    <div className="p-4 max-w-screen-lg mx-auto">
        <button
            className="text-sm bg-gray-200 px-4 py-2 rounded-md mb-4 hover:bg-gray-300"
            onClick={handleGoBack}
        >
            &larr; Go Back
        </button>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
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
            name="severityLevel"
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
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
        >
          Create
        </button>
      </form>
    </div>
  );
}
