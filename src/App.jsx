import { useState } from 'react'

import Header from './components/Header.jsx'
import Shop from './components/Shop.jsx'
import { DUMMY_PRODUCTS } from './dummy-products.js'
import CartContextProvider, {
  CartContext,
} from './store/shoppig-cart-context.jsx'

function App() {
  return (
    <CartContextProvider>
      <Header />
      <Shop />
    </CartContextProvider>
  )
}

export default App
