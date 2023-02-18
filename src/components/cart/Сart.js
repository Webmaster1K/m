import './Сart.css';
import { useState } from 'react';

function Cart() {

  const [openCart, SetOpenCart]=useState(true)
  let styleOverFlow = {}
      styleSideBlock = {}
  if (openCart == true){
    styleOverFlow = {width: '100%'}
    styleSideBlock = {width: '385px'}
  }
  else{
    styleOverFlow = {width: '0'}
    styleSideBlock = {width: '0'}
  }

  return (
    <div>
      <div className='OverFlow' style={styleOverFlow} onClick={()=> SetOpenCart(false)}></div>
      <div className='SideBlock' style={styleSideBlock}></div>
    </div>
  );
}

export default Cart;