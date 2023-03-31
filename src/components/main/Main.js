import './Main.css'
import Сard from './card/Сard'
import Stack from 'react-bootstrap/Stack'
import {Row, Col} from 'react-bootstrap'

function Main(props) {
  let watch = [
      {id: 1, name: 'Часы Бронницкий Ювелир', cont: 54590, img: '/img/watch1.png'},
      {id: 2, name: 'Часы муж SOKOLOV', cont: 54590, img: '/img/watch2.png'},      
      {id: 3, name: 'Часы жен бронницкий ЮВЕЛИР', cont: 7795, img: '/img/watch3.png'},
      {id: 4, name: 'Часы Золотой свет', cont: 28800, img: '/img/watch4.png'},
      {id: 5, name: 'Часы Бронницкий Ювелир', cont: 54590, img: '/img/watch1.png'},
      {id: 6, name: 'Часы муж SOKOLOV', cont: 54590, img: '/img/watch2.png'},      
      {id: 7, name: 'Часы жен бронницкий ЮВЕЛИР', cont: 7795, img: '/img/watch3.png'},
      {id: 8, name: 'Часы Золотой свет', cont: 28800, img: '/img/watch4.png'},
      {id: 9, name: 'Часы Бронницкий Ювелир', cont: 54590, img: '/img/watch1.png'},
      {id: 10, name: 'Часы муж SOKOLOV', cont: 54590, img: '/img/watch2.png'},      
      {id: 11, name: 'Часы жен бронницкий ЮВЕЛИР', cont: 7795, img: '/img/watch3.png'},
      {id: 12, name: 'Часы Золотой свет', cont: 28800, img: '/img/watch4.png'},
    ];
  let carts = watch.map(item =>{
    return <Сard id={item.id} name={item.name} cont={item.cont} img={item.img} AddProdToCartF={(NEWPRODF) => props.AddProdToCartF(NEWPRODF)}/>
  })

  return (
    <>
      <main className='main'>
        <div className='bannerHeader'>
          <img src='/img/WatchForever.png' width={960} height={300} />
        </div>
        <Stack direction="horizontal" gap={3}>
            <h1>Все часы</h1>
            <span>Всего часов: {watch[11].id}</span>
            <input className="ms-auto"/>
        </Stack>
        <Row className='g-4'>
            <Col style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
              {carts}
            </Col>
        </Row>
      </main>
    </>
  );
}

export default Main;
