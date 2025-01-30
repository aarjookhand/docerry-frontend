import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ErrorCard } from "./ErrorCard";
import authService  from "../services/authService";

export function ProfileErrorList() {
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();
  
  const loggedInUserId = authService .getUserIdFromToken();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/issue");
        const data = await response.json();
        setErrors(data);
      } catch (error) {
        console.error("Error fetching errors:", error);
      }
    };
    fetchData();
  }, []);

  const handleClick = (id) => {
    navigate(`/update-issue/${id}`); 
  };

  return (
    <div>
      {errors
        .filter((error) => error.userId === loggedInUserId)
        .map((error) => (
          <ErrorCard
            key={error._id}
            created_at={new Date(error.createdAt).toLocaleDateString()}
            title={error.title}
            onClick={() => handleClick(error.issueId)}
          />
        ))}
    </div>
  );
}
