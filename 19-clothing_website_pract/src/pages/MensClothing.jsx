import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const MensClothing = ({SetWishlist}) => {

  const[menscloth,SetMensCloth] = useState([])

  const navigate = useNavigate()

  const fetchApi = async()=>
  {
    const responce =  await axios.get("https://dummyjson.com/products/category/mens-shirts")
    SetMensCloth(responce.data.products)
    // console.log(responce.data.products)
    
  }
  const addWishlist = (elem)=>{
   SetWishlist((prev)=>[
      ...prev,
      elem
   ])
}
  useEffect(()=>{

    fetchApi()

  },[])
  
 return (
    <div className='flex justify-center'>
      {menscloth.map((elem)=>
      {
        return<div key={elem.id}>
          <img src={elem.images[0]}/>
            <h2>{elem.title}</h2>
            <p>Price: {elem.price}</p>
            <button onClick={()=> navigate(`/details/${elem.id}`)}>view</button>
                     <button onClick={() => addWishlist(elem)}>
   ❤️
</button>
          </div>
      })}
    </div>
  )
}

export default MensClothing
