import React from 'react'
import PublicNavbar from '../components/PublicNavbar'
import SignUpForm from '../components/SignUpForm'
import image from '../media/auth-img.avif'

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-white">
      <PublicNavbar />
      <div className="flex justify-center items-center min-h-[80vh] bg-gray-50">
        <div className="flex w-full max-w-5xl mx-4">
          <SignUpForm />
          <div className="flex-1 flex items-center justify-center p-8">
            <img 
              src={image} 
              alt="Team collaboration illustration"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  )
}