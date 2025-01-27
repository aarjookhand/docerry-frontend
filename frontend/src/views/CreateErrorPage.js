import React from "react";
import PrivateNavbar from '../components/PrivateNavbar';
import ErrorForm from '../components/ErrorForm';

export default function CreateErrorPage() {

  return (
    <div className="min-h-screen bg-white">
      <PrivateNavbar/>
      <div className="p-4 max-w-screen-lg mx-auto">
        <ErrorForm/>
      </div>
    </div>
  );
}