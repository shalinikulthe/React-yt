import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-4'>
        <h1>hey</h1>
    <div className=' flex gap-4 '>
    <Link to="/men">Mens Clothing</Link>
    <Link to="/women">Womens Clothing</Link>
    <Link to="/wishlist">Wishlist</Link>
    <Link to="/cart">Cart</Link>
    </div>
    </div>
    
  )
}

export default Navbar
