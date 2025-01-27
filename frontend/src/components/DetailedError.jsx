import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function DetailedError() {
    const { id } = useParams(); 
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
          try {
            // TODO: Replace with real backend call
            const mockDetails = {
              1: {
                id: 1,
                name: "ERROR NAME 1",
                email: "user@docerry.com",
                date: "01/01/2025",
                description: "Detailed description 1",
                severity: "High",
                errorContent: "Error occurred due to a null pointer exception in the backend API.",
                approach: "To resolve, refactor the API logic to check for null values and implement exception handling."
              },

              2: {
                id: 2,
                name: "ERROR NAME 2",
                email: "user@docerry.com",
                date: "01/01/2025",
                description: "Detailed description 2",
                severity: "Low",
                errorContent: "UI misalignment issue caused by incorrect CSS grid implementation.",
                approach: "Fix by adjusting the grid layout to ensure responsiveness across different screen sizes."
              },
              
              3: {
                id: 3,
                name: "ERROR NAME 3",
                email: "user@docerry.com",
                date: "01/01/2025",
                description: "Detailed description 3",
                severity: "Medium",
                errorContent: "Timeout error in fetching data from the external service.",
                approach: "Increase the timeout threshold and investigate the service performance bottleneck."
              }
            };
            
            
            setError(mockDetails[id]);
            // const response = await fetch(`/api/errors/${id}`);
            // const data = await response.json();
            // setError(data);
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
        navigate(-1); 
    };

  return (
      <div className="bg-white p-6 rounded-lg shadow-lg">
            <button className="text-sm bg-gray-200 px-4 py-2 rounded-md mb-4 hover:bg-gray-300"
              onClick={handleGoBack}>
                &larr; Go Back
            </button>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">{error.name}</h3>
            <p className="text-gray-600 text-sm mb-2">
              <span className="font-medium">{error.email}</span> - <span className="italic">{error.date}</span>
            </p>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-medium text-gray-800">Description:</h4>
                <p className="text-gray-700">{error.description}</p>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-gray-800">Severity:</h4>
                <p className="text-gray-700">{error.severity}</p>
              </div>

              <div>
                <h4 className="text-lg font-medium text-gray-800">Error Content:</h4>
                <p className="text-gray-700">{error.errorContent}</p>
              </div>

              <div>
                <h4 className="text-lg font-medium text-gray-800">Approach:</h4>
                <p className="text-gray-700">{error.approach}</p>
              </div>
            </div>
      </div>

  )
}
