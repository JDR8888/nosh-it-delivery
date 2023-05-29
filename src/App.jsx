import { useState } from 'react'
import Header from './components/header/header'
import BodyContainer from './components/body-container/body-container/body-container'
import './App.css';
import CartProvider from './context/cart-provider';
import Cart from './components/cart-modal/cart';

function App() {
  
  const [isCartOpen, setIsCartOpen] = useState(false);
  const handleCartOpen = () => {
    setIsCartOpen(true);
  }
  const handleCartClose = () => {
    setIsCartOpen(false);
  }

  return (
    <CartProvider>
      {isCartOpen && <Cart onClose={handleCartClose}/>  }
      <Header onOpen={handleCartOpen}/>
      <BodyContainer />
    </CartProvider>
  )
}

export default App
