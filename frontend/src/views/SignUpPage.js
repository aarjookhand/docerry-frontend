import React from 'react'
import PublicNavbar from '../components/PublicNavbar'
import SignUpForm from '../components/SignUpForm'
import image from '../media/auth-img.avif'

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-white">
      <PublicNavbar />
      <div className="flex justify-center items-center min-h-[80vh] bg-gray-50">
        <div className="flex w-full max-w-6xl mx-4 px-4 md:px-8 flex-col md:flex-row">
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex items-center justify-center p-8">
            <img 
              src={image} 
              alt="Team collaboration illustration"
              className="max-w-full h-auto rounded-lg shadow-md"
            />
          </div>

          {/* Form Section */}
          <div className="w-full md:w-1/2 flex items-center justify-center p-8">
            <SignUpForm />
          </div>
        </div>
      </div>
    </div>
  )
}
