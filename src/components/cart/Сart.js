import './Сart.css';
import CartOne from './cartOne/CartOne';
import { useState } from 'react';
import Stack from 'react-bootstrap/Stack';

function Cart(props) {
  const  [addedOrder, SetaddedOrder] = useState(true)
  let result = Number(54590)
  let styleOverFlow = {},
      styleSideBlock = {},
      styleSideBlockOrder = {};
  if (props.openCart == true){
    styleOverFlow = {width: '100%'}
    styleSideBlock = {width: '385px'}
    styleSideBlockOrder = {width: '0'}
  }
  if (addedOrder == false){
    styleSideBlock = {width: '0'}
    styleSideBlockOrder = {width: '385px'}
  }
  if (props.openCart == false){
      styleOverFlow = {width: '0'}
      styleSideBlock = {width: '0'}
      styleSideBlockOrder = {width: '0'}
  }

  return (
    <div className='Cart'>
      <div className='OverFlow' style={styleOverFlow} onClick={()=> props.onCloseCart()}></div>
      <div className='SideBlockOrder' style={styleSideBlockOrder}>
        <img src='./img/RemoveCart.jpg' width={32} height={32} className='ms-auto' style={{margin: '30px', position: 'absolute', top: '0', right: '0'}} OnClick={()=> props.onCloseCart()}/>
        <img src='./img/OrderPlaced.jpg'width={83} height={120}/>
        <h3 style={{color: '#87C20A'}}>Заказ оформлен!</h3>
        <h5 style={{color: '#999999'}}>Ваш заказ #18 скоро будет передан курьерской доставке</h5>
          <img src='/img/backButton.png' width={325} height={55} onClick={() => SetaddedOrder(!addedOrder)}/>
      </div>
      <div className='SideBlock' style={styleSideBlock}>
        <Stack direction="horizontal" gap={3}>
          <h2>Корзина</h2>
          <img src='./img/RemoveCart.jpg' width={32} height={32} className='ms-auto' style={{marginRight: '30px'}} onClick={()=> props.onCloseCart()}/>
        </Stack>
        <CartOne/>
        <CartOne/>
        <CartOne/>
        <CartOne/>
        <CartOne/>
        <CartOne/>
        <div style={{fontSize: '16px', padding: '30px', width: '385px', backgroundColor: 'white'}}>
          <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '18px'}}>Итого: <span>{result} ₽</span></div>
          <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '24px'}}>Налог 5%: <span>{result*0.05} ₽</span></div>
          <img src='/img/orderButton.png' onClick={() => SetaddedOrder(!addedOrder)} width={325} height={55}/>
        </div>
      </div>
    </div>
  );
}

export default Cart;