import './Header.css';
import Stack from 'react-bootstrap/Stack';
import { Link } from 'react-router-dom';

function Header(props) {
    let result = props.cart.reduce((acc, product) => acc + product.cont, 0)
  return (
    <>
      <div className='mainHeader'>
        <Stack direction="horizontal" gap={3}>
          <div className='leftHeader'>
            <img src='/img/Watch.png' width={40} height={40} />
            <Link to="/" style={{textDecoration: "none", color: "black"}}>
              <div className='leftHeaderText'>
                <h1 style={{fontSize: 20, margin: 0}}><b>WATCH</b></h1>
                <p style={{margin: 0}}>Магазин лучших часов</p>
              </div>
            </Link>
          </div>
          <div className='rightHeader ms-auto'>
            <img src="/img/Group.svg" width={20} height={20} onClick={() => props.onOpenCart(true)}/>
            <span style={{color: 'rgb(92,92,92)'}}><b>{result} руб.</b></span>
            <Link to="/favorites">
              <img src="/img/Favorite.svg" width={20} height={20}/>
            </Link>
            <Link to="/union">
              <img src="/img/Union.svg" width={20} height={20}/>
            </Link>
          </div>
        </Stack>
      </div>
    </>
  );
}

export default Header;
