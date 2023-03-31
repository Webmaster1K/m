<<<<<<< HEAD
import Stack from 'react-bootstrap/Stack'
import {Row, Col} from 'react-bootstrap'
import CartOne from './cart/cartOne/CartOne';

function Favorites(props) {
  let watchF = props.cart.map((props) => {
return <CartOne name={props.name} cont={props.cont} img={props.img} />})
    return (
      <>
        <div style={{maxWidth: "1080px", margin: "0 auto 0 auto", backgroundColor: "white", borderBottom: "1px solid #EAEAEA", padding: "45px 45px"}}>
          <Stack direction="horizontal" gap={3}>
              <h1>Избранные</h1>
          </Stack>
          <Row className='g-4'>
              <Col style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
                {watchF}
              </Col>
          </Row>
        </div>
      </>
    );
  }
  
=======
import Stack from 'react-bootstrap/Stack'
import {Row, Col} from 'react-bootstrap'

function Favorites() {
    return (
      <>
        <div style={{maxWidth: "1080px", margin: "0 auto 0 auto", backgroundColor: "white", borderBottom: "1px solid #EAEAEA", padding: "45px 45px"}}>
          <Stack direction="horizontal" gap={3}>
              <h1>Избранные</h1>
          </Stack>
          <Row className='g-4'>
              <Col style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
              </Col>
          </Row>
        </div>
      </>
    );
  }
  
>>>>>>> a06d1a9856ba4e526f9c35cfce7b3fe9ae8d0a02
export default Favorites;