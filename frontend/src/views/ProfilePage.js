import React from 'react'
import PrivateNavbar from '../components/PrivateNavbar'
import UserCard from '../components/UserCard'
import { ProfileErrorList } from '../components/ProfileErrorList'

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-white">
        <PrivateNavbar/>    
    <div className="p-4 max-w-screen-lg mx-auto">
        <div className="flex justify-center items-center mb-4 gap-x-10">
            <UserCard/>
        </div>
        <ProfileErrorList/>
    </div>
      
    </div>
  )
}
