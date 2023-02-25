import './Сart.css';
import CartOne from './cartOne/CartOne';
import { useState } from 'react';

function Cart() {

  let result = Number(54590)
  const [openCart, SetOpenCart] = useState(true),
        [addedOrder, SetaddedOrder] = useState(true);
  let styleOverFlow = {},
      styleSideBlock = {},
      styleSideBlockOrder = {};
  if (openCart == true){
    styleOverFlow = {width: '100%'}
    styleSideBlock = {width: '385px'}
    styleSideBlockOrder = {width: '385px'}
  }
  else {
    styleOverFlow = {width: '0'}
    styleSideBlock = {width: '0'}
    styleSideBlockOrder = {width: '0'}
  }
  if (addedOrder == false){
    styleSideBlock = {width: '0'}
    styleSideBlockOrder = {width: '385px'}
  }

  return (
    <div className='Cart'>
      <div className='OverFlow' style={styleOverFlow} onClick={()=> SetOpenCart(false)}></div>
      <div className='SideBlockOrder' style={styleSideBlockOrder}></div>
      <div className='SideBlock' style={styleSideBlock}>
        <h2>Корзина</h2>
          <CartOne/>
        <div style={{fontSize: '16px', padding: '30px', position: 'absolute', bottom: '0', width: '385px'}}>
          <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '18px'}}>Итого: <span>{result} ₽</span></div>
          <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '24px'}}>Налог 5%: <span>{result*0.05} ₽</span></div>
          <img src='/img/orderButton.png' onClick={() => SetaddedOrder(!addedOrder)} width={325} height={55}/>
        </div>
      </div>
    </div>
  );
}

export default Cart;