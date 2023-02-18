import './Main.css';
import Сard from './card/Сard';
import Stack from 'react-bootstrap/Stack';

function Main() {
  return (
    <>
      <main className='main'>
        <Stack direction="horizontal" gap={3}>
            <h1>Все чаи</h1>
            <input className="ms-auto"/>
        </Stack>
        <div className='allCard'>
          <Сard/>
          <Сard/>
          <Сard/>
          <Сard/>
          <Сard/>
          <Сard/>
          <Сard/>
          <Сard/>
          <Сard/>
          <Сard/>
          <Сard/>
          <Сard/>
        </div>
      </main>
    </>
  );
}

export default Main;
