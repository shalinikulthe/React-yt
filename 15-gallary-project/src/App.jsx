import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cards from './components/Cards'

const App = () => {
  const[data,SetData]=useState([])

  const getData = async () => {
    
    const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=30');
      SetData(response.data)
  }

  useEffect(()=>
  {
    getData()

  },[])

  return (
    <div>
      <Cards data={data}/>
    </div>
    
      


     )}
    

export default App