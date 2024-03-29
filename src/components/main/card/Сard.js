import './Сard.css';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import { useState } from 'react';

function Сard(props) {
  const [addedCart, SetAddedCart] = useState(false);
  const [addedFav, SetAddedFav] = useState(false);

  function ClickAddToCart(newProd){
    SetAddedCart(!addedCart)
    props.AddProdToCart(newProd)
  }
  function ClickAddToCartFav(newProdFav){
    SetAddedFav(!addedFav)
    props.AddProdToCartFav(newProdFav)
  }

  return (
    <Card style={{width: '210px', margin: "25px 0"}}>
      <img src={addedFav ? './img/clickedFavButton.png' : './img/addFavButton.svg'} width={32} height={32} style={{zIndex: '1', position: 'absolute', margin: '10px'}} onClick={() => ClickAddToCartFav({id: props.id, name: props.name, cont: props.cont, img: props.img})}/>
      <Card.Img variant="top" src={props.img} style={{width: '123px', height: '123px', margin: 'auto'}} />
      <Card.Body>
        <Card.Title className='cardTitle' style={{height: '33px', fontSize: '14px'}}>{props.name}</Card.Title>
        <Stack direction="horizontal" gap={3}>
          <div><span style={{fontSize: "11px", color: '#BDBDBD'}}>Цена:</span><br/> {props.cont} ₽</div>
          <div className="ms-auto">
            <img src={addedCart ? './img/clickedButton.svg' : './img/addButton.svg'} onClick={() => ClickAddToCart({id: props.id, name: props.name, cont: props.cont, img: props.img})}/>
          </div>
        </Stack>
      </Card.Body>
    </Card>
  );
}

export default Сard;