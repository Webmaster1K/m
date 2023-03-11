import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Сart from './components/cart/Сart';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

function App() {
  const [closeCart, SetCloseCart] = useState(false)
  const [cart, SetCart] = useState([])

  function AddProdToCart(newProd){
    SetCart(prev => [...prev, newProd])
  }

  return (
    <>
      <Сart closeCart={closeCart} onCloseCart={() => SetCloseCart(false)} cart={cart}/>
      <Header closeCart={closeCart} onOpenCart={() => SetCloseCart(true)}/>
      <Main AddProdToCart={(NEWPROD) => AddProdToCart(NEWPROD)}/>
      <Footer />
    </>
  );
}

export default App
