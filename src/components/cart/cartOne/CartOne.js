import './CartOne.css';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import { useState } from 'react';

function CartOne(props) {
    const [DeleteAddCart, SetDeleteAddCart] = useState(false);

    return (
            <Card style={{width: '325px', margin: "auto auto 10px auto"}}>
                <Stack direction="horizontal" gap={2}>
                <img src='./img/RemoveCart.jpg' width={32} height={32} style={{zIndex: '1', position: 'absolute', margin: '10px', top: '0', right: '0'}}/>
                    <Card.Img variant="top" src={props.img} height={65} style={{width: '65px', margin: '0 10px 0 20px'}}/>
                    <Card.Body style={{padding: '22px 16px 16px 0'}}>
                        <Card.Title className='cardTitle' style={{margin: '15px 0 0 0', fontSize: '14px'}}>{props.name}</Card.Title>
                            <div style={{margin: '15px 0 0 0', fontSize: '14px'}}>
                                {props.cont} ₽
                            </div>
                            <div style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                                <img src='./img/DeleteCart.png' width={32} height={32} onClick={() => SetDeleteAddCart(DeleteAddCart-1)}/>
                                <div style={{margin: '0 15px'}}>
                                    {1+DeleteAddCart}
                                </div>
                                <img src='./img/AddCart.png' width={32} height={32} onClick={() => SetDeleteAddCart(DeleteAddCart+1)}/>
                            </div>
                    </Card.Body>
                </Stack>
            </Card>
    );
}

export default CartOne;