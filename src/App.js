import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Сart from './components/cart/Сart';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

function App() {
  const [closeCart, SetCloseCart] = useState(true)
  const [openCart, SetOpenCart] = useState(false)

  return (
    <>
      <Сart closeCart={closeCart} onCloseCart={() => SetCloseCart(false)}/>
      <Header openCart={openCart} onOpenCart={() => SetOpenCart(true)}/>
      <Main />
      <Footer />
    </>
  );
}

export default App
