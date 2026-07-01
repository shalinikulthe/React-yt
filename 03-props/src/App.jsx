import React from 'react'
import Card from './components/Card'

function App() {
  return (
    <div className='parent'>
      <Card user="Shalini" age={18} img="https://images.unsplash.com/photo-1782236219108-a9da5431cf32?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D" /> 
      <Card user="Priyanka" age={20} img="https://images.unsplash.com/photo-1781768353571-201f02e234af?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D"/>
      <Card user="Amruta" age={21} img="https://plus.unsplash.com/premium_photo-1781967046815-ec1a42b374c9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D"/>  
    </div>
  )
}

export default App

