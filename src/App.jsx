<<<<<<< HEAD
=======
import logo from './logo.svg';
>>>>>>> a06d1a9856ba4e526f9c35cfce7b3fe9ae8d0a02
import './App.css';
import { useState } from 'react';
import Сart from './components/cart/Сart';
import Header from './components/header/Header';
import Main from './components/main/Main';
<<<<<<< HEAD
=======
import Footer from './components/footer/Footer';
>>>>>>> a06d1a9856ba4e526f9c35cfce7b3fe9ae8d0a02
import Favorites from './components/Favorites';
import Union from './components/Union';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [closeCart, SetCloseCart] = useState(false)
  const [cart, SetCart] = useState([])

  function AddProdToCart(newProd) {
    SetCart(prev => [...prev, newProd])
  }

<<<<<<< HEAD
  function AddProdToCartF(newProdF) {
    SetCart(prev => [...prev, newProdF])
  }

=======
>>>>>>> a06d1a9856ba4e526f9c35cfce7b3fe9ae8d0a02
  return (
    <>
      <Сart closeCart={closeCart} onCloseCart={() => SetCloseCart(false)} cart={cart} />
      <Header closeCart={closeCart} onOpenCart={() => SetCloseCart(true)} cart={cart}/>
      <Routes>
        <Route path='/' element={<Main AddProdToCart={(NEWPROD) => AddProdToCart(NEWPROD)} />}></Route>
<<<<<<< HEAD
        <Route path='/favorites' element={<Favorites AddProdToCart={(NEWPRODF) => AddProdToCartF(NEWPRODF)} />}></Route>
        <Route path='/Union' element={<Union />}></Route>
      </Routes>
=======
        <Route path='/favorites' element={<Favorites />}></Route>
        <Route path='/union' element={<Union />}></Route>
      </Routes>
      <Footer />
>>>>>>> a06d1a9856ba4e526f9c35cfce7b3fe9ae8d0a02
    </>
  );
}

export default App
