import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Heart } from "lucide-react";
import Wishlist from './Wishlist';

const WomensClothing = ({SetWishlist}) => {

  const[WomensClothing,SetwomensClothing] = useState([])


  const navigate = useNavigate()

  const fetchData = async ()=>
  {
     const res = await axios.get("https://dummyjson.com/products/category/womens-dresses")
     SetwomensClothing(res.data.products)
     console.log(res.data.products)
  }
  const addWishlist = (elem)=>{
   SetWishlist((prev)=>[
      ...prev,
      elem
   ])
}
  useEffect(()=>
  {
    fetchData()
  },[])
  return (
    <div className=' flex justify-center'>
      {WomensClothing.map((elem)=>
      {
        return<div key={elem.id}>
          <img src={elem.images[0]}/>
            <h2>{elem.title}</h2>
            <p>Price: {elem.price}</p>
            <button onClick={()=>navigate(`/wdetails/${elem.id}`)}>View</button>
            <button onClick={() => addWishlist(elem)}>
   ❤️
</button>
            </div>
      })}
      
    </div>
  )
}

export default WomensClothing
