import './App.css';
import { useState } from 'react';
import Сart from './components/cart/Сart';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Favorites from './components/Favorites';
import Union from './components/Union';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [closeCart, SetCloseCart] = useState(false)
  const [cart, SetCart] = useState([])

  function AddProdToCart(newProd) {
    SetCart(prev => [...prev, newProd])
  }

  function AddProdToCartF(newProdF) {
    SetCart(prev => [...prev, newProdF])
  }

  return (
    <>
      <Сart closeCart={closeCart} onCloseCart={() => SetCloseCart(false)} cart={cart} />
      <Header closeCart={closeCart} onOpenCart={() => SetCloseCart(true)} cart={cart}/>
      <Routes>
        <Route path='/' element={<Main AddProdToCart={(NEWPROD) => AddProdToCart(NEWPROD)} />}></Route>
        <Route path='/favorites' element={<Favorites AddProdToCart={(NEWPRODF) => AddProdToCartF(NEWPRODF)} />}></Route>
        <Route path='/Union' element={<Union />}></Route>
      </Routes>
    </>
  );
}

export default App
