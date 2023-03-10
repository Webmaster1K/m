import './Сart.css';
import CartOne from './cartOne/CartOne';
import { useState } from 'react';
import Stack from 'react-bootstrap/Stack';

function Cart(props) {
  const  [addedOrder, SetaddedOrder] = useState(true)
  let watchCart = [
        {id: 1, name: 'Часы Бронницкий Ювелир', cont: 54590, img: '/img/watch1.png'},
        {id: 2, name: 'Часы муж SOKOLOV', cont: 54590, img: '/img/watch2.png'},      
        {id: 3, name: 'Часы жен бронницкий ЮВЕЛИР', cont: 7795, img: '/img/watch3.png'},
        {id: 4, name: 'Часы Золотой свет', cont: 28800, img: '/img/watch4.png'},
      ],
      cartsCart = watchCart.map(props =>{
        return <CartOne name={props.name} cont={props.cont} img={props.img}/>
      }),
      result = watchCart.reduce((acc, product) => acc + product.cont, 0);;

  let styleOverFlow = {},
      styleSideBlock = {},
      styleSideBlockOrder = {};
  if (props.closeCart == true){
    styleOverFlow = {width: '100%'}
    styleSideBlock = {width: '385px'}
    styleSideBlockOrder = {width: '0'}
  }
  if (addedOrder == false){
    styleSideBlock = {width: '0'}
    styleSideBlockOrder = {width: '385px'}
  }
  if (props.closeCart == false){
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
        {cartsCart}
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