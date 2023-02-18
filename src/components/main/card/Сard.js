import './Сard.css';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import { useState } from 'react';

function Сard() {
  const [addedCart, SetAddedCart] = useState(false);
  const [addedFav, SetAddedFav] = useState(false);

  return (
    <Card style={{width: '210px', margin: "25px 0"}}>
      <img src={addedFav ? './img/clickedFavButton.png' : './img/addFavButton.svg'} width={32} height={32} style={{zIndex: '1', position: 'absolute', margin: '10px'}} onClick={() => SetAddedFav(!addedFav)}/>
      <Card.Img variant="top" src="/img/watch1.png" style={{ width: '123', height: '123' }} />
      <Card.Body>
        <Card.Title className='cardTitle'>Часы Бронницкий Ювелир</Card.Title>
        <Stack direction="horizontal" gap={3}>
          <div><span style={{fontSize: "11px", color: '#BDBDBD'}}>Цена:</span><br/> 54 590 ₽</div>
          <div className="ms-auto">
            <img src={addedCart ? './img/clickedButton.svg' : './img/addButton.svg'} onClick={() => SetAddedCart(!addedCart)}/>
          </div>
        </Stack>
      </Card.Body>
    </Card>
  );
}

export default Сard;