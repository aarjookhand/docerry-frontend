import React from 'react'
import PublicNavbar from '../components/PublicNavbar'
import ContactInfo from '../components/ContactInfo'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F9FFFF]">
      <PublicNavbar />
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
        <ContactInfo/>
      </div>
    </div>
  )
}
