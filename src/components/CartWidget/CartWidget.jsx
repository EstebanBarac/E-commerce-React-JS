import React from 'react'
import  { BsCart3 }  from 'react-icons/bs';
import './CartWidget.css';

export default function CartWidget({ items }) {
  return (<>
    <BsCart3 className="cart_logo"/>
    <span className="contador_carrito">{items}</span>
    </>
    )
}
