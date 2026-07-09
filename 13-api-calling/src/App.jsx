import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {

  const[data,SetData] = useState([])
  const getData=async()=>
  {
    const responce = await axios.get('https://jsonplaceholder.typicode.com/todos')
    SetData(responce.data)
  }


  return (
    <div>
      <button onClick={getData}>GetData</button>
      {data.map((function(elem,id)
        {
          return<div><h1 key={id}>{elem.id}</h1>
          <h1 key={id}>{elem.title}</h1></div>
          

        }
      ))}
    </div>
  )
}

export default App
