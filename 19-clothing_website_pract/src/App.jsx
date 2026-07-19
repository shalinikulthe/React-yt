import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import MensClothing from './pages/MensClothing'
import WomensClothing from './pages/WomensClothing'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import MensClothDetails from './pages/MensClothDetails'
import WomensClothDetails from './pages/WomensClothDetails'

const App = () => {
  const [cart, SetCart] = useState([])
  const [wishlist,SetWishlist] = useState([])
  return (
    <div >
        <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/men' element={<MensClothing SetWishlist={SetWishlist}/>}/>
      <Route path='/women' element={<WomensClothing  SetWishlist={SetWishlist}/>}/>
      <Route path='/wishlist' element={<Wishlist wishlist={wishlist} SetWishlist={SetWishlist}/>}/>
      <Route path='/cart' element={<Cart cart={cart} SetCart={SetCart}/>}/>
      <Route path='/details/:id' element={<MensClothDetails cart={cart} SetCart={SetCart}/>}/>
       <Route path='/wdetails/:id' element={<WomensClothDetails cart={cart} SetCart={SetCart}  />}/>

     </Routes>
    </div>
  )
}

export default App
