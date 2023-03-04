import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Сart from './components/cart/Сart';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

function App() {
  const [openCart, SetOpenCart] = useState(false)
  return (
    <>
      <Сart openCart={openCart} onCloseCart={() => SetOpenCart(false)}/>
      <Header openCart={openCart} onOpenCart={() => SetOpenCart(true)}/>
      <Main />
      <Footer />
    </>
  );
}

export default App
