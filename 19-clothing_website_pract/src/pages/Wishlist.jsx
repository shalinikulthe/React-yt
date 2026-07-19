import React from 'react'

const Wishlist = ({wishlist,SetWishlist}) => {

  const removeWishlist = (id) => {
 SetWishlist(prev => prev.filter(item => item.id !== id))
} 
  return (
    <div>
    {
        wishlist.map((item)=>{
          return (
            <div>
              <img src={item.images[0]} width="200"/>
              <p>{item.price}</p>
            <h1 key={item.id}>{item.title}</h1>
            <button onClick={()=>removeWishlist((item.id))}>remove</button>
            </div>
          )
        })
      }
    </div>
  )
}

export default Wishlist
