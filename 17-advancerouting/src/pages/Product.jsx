import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div >
      <h1 className='flex p-6 justify-center items-center'>This is Product Page</h1>
      <div className="flex gap-4 font-bold justify-center ">
  <Link to="mensclothing">Mens Clothing</Link>
  <Link to="womensclothing">Womens Clothing</Link>
</div>
         <Outlet/>
    </div>
  )
}

export default Product
 