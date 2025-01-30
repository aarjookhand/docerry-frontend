import React, { useState } from "react";
import { Link } from "react-router-dom";

export function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Backend call for search
    if (query.length > 2) {
      try {
        const response = await fetch(`http://localhost:5001/search?title=${query}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          setResults(data);
          console.log("Search results:", data);
        } else {
          console.error("Error fetching search results:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    } else {
      setResults([]); 
    }
  };

  return (
    <div className="w-full md:w-1/2">
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={handleSearch}
        className="border rounded-md px-5 py-2 w-full"
      />
      {results.length > 0 && (
      <ul className="mt-4 bg-white shadow-md rounded-lg p-4 max-h-64 overflow-y-auto">
        {results.map((result) => (
          <li key={result._id} className="border-b last:border-none py-3 px-2 hover:bg-blue-50 transition duration-200">
            <Link 
              to={`/issue/${result.issueId}`} 
              className="block text-lg font-semibold text-black"
            >
              {result.title}
            </Link>
            <p className="text-sm text-gray-500 mt-1">{result.content.slice(0, 20)}...</p>
          </li>
        ))}
      </ul>
      )}
    </div>
  );
}
