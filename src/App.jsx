import './App.css';
import { useState } from 'react';
import Сart from './components/cart/Сart';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Favorites from './components/main/Favorites';
import Union from './components/main/Union';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [closeCart, SetCloseCart] = useState(false)
  const [cart, SetCart] = useState([])
  const [fav, SetFav] = useState([])

  function AddProdToCart(newProd) {
    SetCart(prev => [...prev, newProd])
  }
  function AddProdToCartFav(newProdFav) {
    SetFav(prev => [...prev, newProdFav])
  }

  return (
    <>
      <Сart closeCart={closeCart} onCloseCart={() => SetCloseCart(false)} cart={cart} />
      <Header closeCart={closeCart} onOpenCart={() => SetCloseCart(true)} cart={cart} />
      <Routes>
        <Route path='/' element={<Main AddProdToCart={(NEWPROD) => AddProdToCart(NEWPROD)} AddProdToCartFav={(NEWPRODFAV) => AddProdToCartFav(NEWPRODFAV) } />}></Route>
        <Route path='/favorites' element={<Favorites fav={fav}/>}></Route>
        <Route path='/Union' element={<Union />}></Route>
      </Routes>
    </>
  );
}

export default App
