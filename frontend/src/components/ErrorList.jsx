import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ErrorCard } from "./ErrorCard";

export function ErrorList() {
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

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
    navigate(`/issue/${id}`); 
  };

  return (
    <div>
      {errors.map((error) => (
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
