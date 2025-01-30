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
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <button
        className="text-sm bg-gray-200 px-4 py-2 rounded-md mb-4 hover:bg-gray-300"
        onClick={handleGoBack}
      >
        &larr; Go Back
      </button>
  
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">{error.title}</h3>
      <p className="text-gray-600 text-sm mb-2">
        <span className="italic">{new Date(error.createdAt).toLocaleDateString()}</span>
      </p>
  
      <div className="space-y-4">
        {error.content && (
          <div>
            <h4 className="text-lg font-medium text-gray-800">Description:</h4>
            <p className="text-gray-700">{error.content}</p>
          </div>
        )}
  
        {error.severity && (
          <div>
            <h4 className="text-lg font-medium text-gray-800">Severity:</h4>
            <p className="text-gray-700">{error.severity}</p>
          </div>
        )}
  
        {error.affectedComponents?.length > 0 && (
          <div>
            <h4 className="text-lg font-medium text-gray-800">Affected Components:</h4>
            <p className="text-gray-700">{error.affectedComponents.join(", ")}</p>
          </div>
        )}
  
        {error.solution && (
          <div>
            <h4 className="text-lg font-medium text-gray-800">Approach:</h4>
            <p className="text-gray-700">{error.solution}</p>
          </div>
        )}
      </div>
    </div>
  );
}  