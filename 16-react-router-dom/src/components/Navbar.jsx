import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
<div className="w-full bg-gray-800 text-white flex justify-between p-4">
  <h1>MyWebsite</h1>
  <div className="flex gap-6">
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
  </div>
</div>
  )
}

export default Navbar
