import React from 'react'
import { Link } from 'react-router-dom'

const MensClothing = () => {
  return (
    <div className='flex gap-4 font-bold justify-center'>
      <Link to="/product/1">Shirt</Link>
      <Link to="/product/2">Jeans</Link>
    </div>
  )
}

export default MensClothing
