import './Main.css';
import Сard from './card/Сard';
import Stack from 'react-bootstrap/Stack';
import {Row, Col} from 'react-bootstrap'

function Main() {
  return (
    <>
      <main className='main'>
        <Stack direction="horizontal" gap={3}>
            <h1>Все часы</h1>
            <input className="ms-auto"/>
        </Stack>
        <Row className='allCard g-4' xs={1} md={2} lg={4}>
          {Array.from({length:12}).map(()=>(
            <Col>
              <Сard/>
            </Col>
          ))}
        </Row>
      </main>
    </>
  );
}

export default Main;
