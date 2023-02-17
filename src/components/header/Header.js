import './Header.css';
import Stack from 'react-bootstrap/Stack';

function Header() {
  return (
    <>
      <div className='mainHeader'>
        <Stack direction="horizontal" gap={3}>
          <div className='leftHeader'>
            <img src='/img/Watch.png' width={40} height={40} />
            <div className='leftHeaderText'>
              <h1 style={{fontSize: 20, margin: 0}}><b>WATCH</b></h1>
              <p style={{margin: 0}}>Магазин лучших часов</p>
            </div>
          </div>
          <div className='rightHeader ms-auto'>
            <span style={{ color: 'rgb(92,92,92)' }}><b>0 р.</b></span>
            <img src="/img/Group.svg" width={20} height={20}/>
            <img src="/img/Favorite.svg" width={20} height={20}/>
            <img src="/img/Union.svg" width={20} height={20}/>
          </div>
        </Stack>
      </div>
      <div className='bannerHeader'>
        <img src='/img/WatchForever.png' width={960} height={300} />
      </div>
    </>
  );
}

export default Header;
