import { Button } from 'react-bootstrap';
import React from 'react'
import { Card } from 'react-bootstrap';
import './Item.css'

export default function Item({ autos }) {
  const { nombre, color, precio, imgURL } = autos;
  
    return (
        <>
        <Card style={{ width: '22rem' }} className='bg-dark' id='cardsAutos'>
            <Card.Img variant='top' src={imgURL} id='imgCards'/>
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>
                        <p>Color: {color}</p>
                        <p>Precio: usd ${precio} (por dia)</p>
                </Card.Text>
                <div id='btnCards'>
                  <Button variant="warning">Ver mas</Button>
                </div>
            </Card.Body>
        </Card>
        </>
  )
}
