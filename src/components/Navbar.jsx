
import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className = 'w-full bg-black p-4 flex items-center justify-around text-white cursor:pointer'>
        <Link to = '/home'>Home</Link>
        <Link  to  = '/bwiAssignment/login'>Login</Link>
    </div>
  )
}
