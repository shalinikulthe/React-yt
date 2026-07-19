import React from 'react'
import Post_Page from './components/Post_Page'
import { Route, Router, Routes } from 'react-router-dom'
import Post_Details from './components/Post_Details'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Post_Page/>}/>
        <Route path='/post/:id' element={<Post_Details/>}/>
      </Routes>
      
    </div>
  )
}

export default App
