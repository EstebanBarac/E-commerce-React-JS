import {Card, Carousel, Button} from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'
import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import {toast, ToastContainer} from 'react-toastify';
import { Link } from 'react-router-dom';


export default function ItemDetail ({ autos }) {
    
    const [qty, setQty] = useState(1);

    const {isInCart, addItem, getItemQty} = useContext(CartContext)
    
    const  onAdd = () => {
            toast.success('Su pedido se añadio al carrito', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        isInCart(autos.id)
        addItem(autos, qty)
        reinicio();
      }

     function reinicio() {
        setQty(1);
     }
   
   return (
<>
<ToastContainer position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover/>

    <div id='cardDetail'>
                <Carousel id='CarouselItemDetail'>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={autos.imgURL1}
            alt="First slide"/>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={autos.imgURL2}
            alt="Second slide"/>

        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={autos.imgURL3}
            alt="Third slide"/>
        </Carousel.Item>
        </Carousel>
        <Card className='bg-dark text-white' id='cardDetail'>
            <Card.Header><h3>{autos.nombre}</h3></Card.Header>
                <Card.Body id='CardBody'>
                        <Card.Text id='cardText'>
                            <span>{autos.descripcion}</span><br/><br/>
                            <span>Color: {autos.color}</span><br/>
                            <span className='h6'>Precio: Usd $ {autos.precio} (cada 24hs)</span><br/>
                            <div id='Contador'>
                                <ItemCount qty={qty} setQty={setQty} stock={autos.stock} onAdd={onAdd} />
                            </div>
                        </Card.Text>
                </Card.Body>
        </Card>
    </div>
</>

    )
}
