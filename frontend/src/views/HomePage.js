import React from "react";
import PrivateNavbar from "../components/PrivateNavbar"
import { SearchBar } from "../components/SearchBar";
import { CreateButton } from "../components/CreateError-btn";
import { ErrorList } from "../components/ErrorList";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
        <PrivateNavbar/>    
    <div className="p-4 max-w-screen-lg mx-auto">
      <div className="flex justify-center items-center mb-4 gap-x-10">
        <SearchBar />
        <CreateButton />
      </div>
      <ErrorList />
    </div>
    </div>
  );
}
