import React from 'react'

const Cards = (props) => {
  return ( 
   <div className='grid grid-cols-3 gap-2 bg-white py-2 px-2'>
      {
        props.data.length==0 ?(
          <h1>No Data Found</h1>
        ):(
        props.data.map((elem,idx)=>
        {
          return<div key={idx}>
            <img src={elem.download_url} className='w-screen h-48 object-cover rounded-lg'/>
            </div>
        })

        )
      }
      </div>     
  )
}

export default Cards
