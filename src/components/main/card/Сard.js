import './Сard.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Сard() {
  return (
    <Card style={{ width: '210px', height: '260px' }}>
      <Card.Img variant="top" src="/img/watch1.png" style={{ width: '123', height: '123px' }} />
      <Card.Body>
        <Card.Title className='cardTitle'>Часы Бронницкий Ювелир</Card.Title>
        <Card.Text style={{fontSize: 14}}>
          Цена:
        </Card.Text>
        <Card.Text>
          <b>54 590 ₽</b>
          <Button variant="outline-success">+</Button>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Сard;