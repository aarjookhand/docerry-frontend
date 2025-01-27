import React, { useState, useEffect } from "react";
import { ErrorCard } from "./ErrorCard";

export function ErrorList() {
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // TODO BACKEND CALL

        const mockData = [
            { id: 1, email: "user@docerry.com", date: "01/01/2025", name: "ERROR NAME 1", description: "description" },
            { id: 2, email: "user@docerry.com", date: "01/01/2025", name: "ERROR NAME 2", description: "description" },
            { id: 3, email: "user@docerry.com", date: "01/01/2025", name: "ERROR NAME 3", description: "description" },
        ];

        // const response = await fetch("");

        // const data = await response.json();
        setErrors(mockData);
      } catch (error) {
        console.error("Error fetching errors:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {errors.map((error) => (
        <ErrorCard
          key={error.id}
          email={error.email}
          date={error.date}
          name={error.name}
          description={error.description}
        />
      ))}
    </div>
  );
}
