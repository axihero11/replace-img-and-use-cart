import React from 'react'
import "./App.css"
import Home from './Home'
import Cart from './Cart'
import { CartProvider } from "react-use-cart"
import Slade from './Slade'


function App() {
  return (
    <div>
      <CartProvider>
        <Home />
        <Cart />
        <Slade/>
      </CartProvider>
    </div>
  )
}

export default App
