import { Button, Card } from "react-bootstrap";

const ItemDetail = ({ nombre, descripcion, img, price }) => {
    return (
        <>
        {
        <Card style={{ width: '30rem' }} className='bg-dark' id='cardsAutos'>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>
            <h3>{nombre}</h3>
              </Card.Title>
                <Card.Text> 
                    <p>{descripcion}</p>
                    <h4> usd ${price} (por dia)</h4>
                <Button variant="warning">ALQUILER</Button>
            </Card.Text>
          </Card.Body>
        </Card> 
        }
        </>
    );
  };
  
  export default ItemDetail;