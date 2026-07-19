import React from 'react'

const Cart = ({cart,SetCart}) => {
  const removecart = (id) => {
 SetCart(prev => prev.filter(item => item.id !== id))
} 

  return (
    <div>
      {
        cart.map((item)=>{
          return (
            <div>
              <img src={item.images[0]} width="200"/>
              <p>{item.price}</p>
            <h1 key={item.id}>{item.title}</h1>
            <button onClick={()=>removecart((item.id))}>remove</button>
            </div>
          )
        })
      }
    </div>
  )
}

export default Cart