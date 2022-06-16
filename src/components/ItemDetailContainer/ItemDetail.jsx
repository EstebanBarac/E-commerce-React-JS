import {Card, Carousel, Button} from 'react-bootstrap';
import './ItemDetail.css'


export default function ItemDetail ({ autos }) {
    return (
<>
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
        <Card className='bg-dark text-white m-3' id='cardDetail'>
            <Card.Header><h3>{autos.nombre}</h3></Card.Header>
                <Card.Body>
                        <Card.Text id='cardText'>
                            <span>{autos.descripcion}</span><br/><br/>
                            <span className='h6'>Color: {autos.color}</span><br/>
                            <span className='h5'>Precio: Usd $ {autos.precio} (cada 24hs)</span><br/>
                        </Card.Text>
                    <Button className='btn btn-warning'>Reservar</Button>
                </Card.Body>
        </Card>
    </div>
</>

    )
}
