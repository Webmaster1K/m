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
  
export default Favorites;