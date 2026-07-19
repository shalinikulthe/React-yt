import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const WomensClothDetails = ({SetCart}) => {
     const{id} = useParams()

    const[womencloth,SetWomencloth] = useState(null)

    const fetchdata = async ()=>
  {
     const res = await axios.get(`https://dummyjson.com/products/${id}`)
     SetWomencloth(res.data)
    
  }
  useEffect(()=>
  {
    fetchdata()
  },[id])

  if(!womencloth){
    return <h1>Loading...</h1>
}
const addcart = ()=>
{
    SetCart(prev=>[...prev,womencloth])
    
}

  return (
    <div>
      <img src={womencloth.images[0]} width="200"/>

            <h1>{womencloth.title}</h1>

            <p>Price: ₹{womencloth.price}</p>

            <p>{womencloth.description}</p>
            <button onClick={addcart}>Add to Cart </button>
    </div>
  )
}

export default WomensClothDetails
