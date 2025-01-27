import React, { useState } from "react";

export function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = async (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Backend call for search
    try {
      // TODO BACKEND CALL
      const response = await fetch("");
      const data = await response.json();
      console.log("Search results:", data);
      
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <input
      type="text"
      placeholder="Search"
      value={searchQuery}
      onChange={handleSearch}
      className="border rounded-md px-5 py-2 w-full md:w-1/2"
    />
  );
}
