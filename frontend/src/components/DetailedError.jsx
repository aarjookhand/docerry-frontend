import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function DetailedError() {
  const { id } = useParams(); 
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulating API call for testing
        const response = await fetch(`http://localhost:8080/issue/${id}`);
        const data = await response.json();
        setError(data);
        console.log(data)
      } catch (error) {
        console.error("Error fetching error details:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!error) {
    return <div>Loading...</div>;
  }

  const handleGoBack = () => {  
    navigate("/home"); 
  };

  return (
    <div className="bg-gray-200 text-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
      <button
        className="text-sm bg-gray-700 px-4 py-2 rounded-md mb-6 hover:bg-gray-600 transition"
        onClick={handleGoBack}
      >
        &larr; Go Back
      </button>
  
      <h3 className="text-3xl font-semibold text-black mb-4">{error.title}</h3>
      <p className="text-gray-400 text-sm mb-4">
        <span className="italic">{new Date(error.createdAt).toLocaleDateString()}</span>
      </p>
  
      <div className="space-y-6">
        {error.content && (
          <div className="border-l-4 border-emerald-500 pl-4">
            <h4 className="text-lg font-medium text-emerald-500">Content:</h4>
            <p className="text-gray-800 text-lg">{error.content}</p>
          </div>
        )}
  
        {error.severity && (
          <div className="border-l-4 border-red-500 pl-4">
            <h4 className="text-lg font-medium text-red-500">Severity:</h4>
            <p className= "text-gray-800 text-lg ">{error.severity}</p>
          </div>
        )}
  
      {error.affectedComponents && error.affectedComponents.filter(component => component.trim() !== "").length > 0 && (
      <div className="border-l-4 border-blue-500 pl-4">
        <h4 className="text-lg font-medium text-blue-500">Affected Components:</h4>
        <p className="text-gray-800 text-lg">{error.affectedComponents.filter(component => component.trim() !== "").join(", ")}</p>
      </div>
      )}


  
        {error.solution && (
          <div className="border-l-4 border-teal-500 pl-4">
            <h4 className="text-lg font-medium text-teal-500">Approach:</h4>
            <p className="text-gray-800 text-lg">{error.solution}</p>
          </div>
        )}
      </div>
    </div>
  );
  
}  