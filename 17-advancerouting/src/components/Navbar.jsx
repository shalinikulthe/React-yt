import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-gray-800 text-white flex justify-between p-4">
      <h1>Navbar</h1>
      <div className=' flex gap-4'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/product">Product</Link>
      </div>
     <div className="fixed bottom-5 left-1/2 -translate-x-1/2 flex gap-4 ">
  <button
    onClick={() => navigate(-1)}
    className=" bg-gray-800 text-white px-4 py-2 rounded w-32"
  >
    Previous
  </button>

  <button
    onClick={() => navigate(1)}
    className=" bg-gray-800 text-white px-4 py-2 rounded w-32"
  >
    Next
  </button>
</div>
    </div>
  )
}

export default Navbar
