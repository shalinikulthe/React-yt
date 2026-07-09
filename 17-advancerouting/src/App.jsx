import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Product from './pages/Product'
import MensClothing from './pages/MensClothing'
import Home from './pages/Home'
import About from './pages/About'
import WomensClothing from './pages/WomensClothing'
import ProductDetails from './pages/ProductDetails'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path="mensclothing" element={<MensClothing />} />
          <Route path="womensclothing" element={<WomensClothing />} />
           
        </Route>
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  )
}

export default App
