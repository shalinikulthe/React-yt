import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const MensClothDetails = ({SetCart}) => {
    const {id} = useParams()
     const[menscloth,SetMensCloth] = useState(null)

   const fetchApibyid = async()=>
  {
    const responce =  await axios.get(`https://dummyjson.com/products/${id}`)
    SetMensCloth(responce.data)
    // console.log(responce.data.products)
    
  }
  const addcart = ()=>
{
    SetCart(prev=>[...prev,menscloth])
    
}
  useEffect(()=>
{
 fetchApibyid()
},[id])
if(!menscloth){
    return <h1>Loading...</h1>
}
  return (
    <div>
     
      <img src={menscloth.images[0]} width="200"/>

            <h1>{menscloth.title}</h1>

            <p>Price: ₹{menscloth.price}</p>

            <p>{menscloth.description}</p>

            <button onClick={addcart}>Add to Cart </button>
      
    </div>
  )
}

export default MensClothDetails
