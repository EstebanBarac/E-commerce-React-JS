import React from 'react'
import { Card } from 'react-bootstrap';
import './Item.css'
import { Link } from 'react-router-dom';

export default function Item({ autos }) {
  const { id, nombre, color, precio, imgURL } = autos;
  
    return (
        <>
        <Card style={{ width: '22rem' }} className='bg-dark' id='cardsAutos'>
            <Card.Img variant='top' src={imgURL} id='imgCards'/>
            <Card.Body>
                <Card.Title><h4>{nombre}</h4></Card.Title>
                <Card.Text>
                        <span className='h6'>Color: {color}</span><br/>
                        <span className='h5'>Precio: usd ${precio} (por dia)</span>
                </Card.Text>
                <div id='btnCards'>
                <Link to={`/item/${id}`} className='btn btn-warning'>Ver Mas</Link>
                </div>
            </Card.Body>
        </Card>
        </>
  )
}
