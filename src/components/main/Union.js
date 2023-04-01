import Stack from 'react-bootstrap/Stack'
import {Row, Col} from 'react-bootstrap'

function Union() {
  
  function handleUploadImage(){
    alert("У вас не получилось выйти из аккаунта, мы сожалеем")
  }

    return (
      <>
        <div style={{maxWidth: "1080px", margin: "0 auto 0 auto", backgroundColor: "white", borderBottom: "1px solid #EAEAEA", padding: "45px 45px"}}>
          <Stack direction="horizontal" gap={3}>
              <h1>Профиль</h1>
          </Stack>
          <Row className='g-4'>
              <Col style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', paddingTop: '20px'}}>
                <img src='/img/Arab_watch.jpg' width={200} height={200} style={{borderRadius: '50%', marginRight: '40px'}}/>
                <div>
                  <p style={{fontSize: '20px'}}>Покупок: 0</p>
                  <p style={{fontSize: '20px'}}>Потрачено: 0</p>
                  <p style={{fontSize: '20px'}}>Куплено товаров: 0</p>
                  <p style={{fontSize: '20px'}}>До скидки осталось: 10000 рублей*</p>
                </div>
              </Col>
              <span  style={{fontSize: '18px'}}>
                <h3>Обо мне</h3>
                Возраст: 32 года
                <br/>Страна: Ливан
                <br/>Город: Бейрут
                <br/>Меня зовут Мухамел. Я помогаю творческим предпринимателям построить систему онлайн-коммуникации и развивать свой бренд с помощью блогинга.
              </span>
              <h4 style={{textAlign: 'center', color: '#c72d0a', borderTop: '1px solid #EAEAEA', borderBottom: '1px solid #EAEAEA', padding: '10px'}} onClick={handleUploadImage}>Выйти из аккаунта и никогда не возвращаться</h4>
              <span style={{fontSize: '13px', color: 'grey'}}>*скидка повышается за каждые 10000 рублей на 10% (вкл. до 30%)</span>
          </Row>
        </div>
      </>
    );
  }
  
export default Union;