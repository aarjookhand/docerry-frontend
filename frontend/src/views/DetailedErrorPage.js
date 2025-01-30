import React from 'react'
import PrivateNavbar from '../components/PrivateNavbar'
import DetailedError from '../components/DetailedError'

export default function DetailedErrorPage() {
  return (
    <div className="min-h-screen bg-white">
        <PrivateNavbar/>    
    <div className="p-4 max-w-screen-lg mx-auto">
      <DetailedError />
    </div>
    </div>
  )
}
