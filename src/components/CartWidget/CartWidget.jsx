import React from 'react'
import { useContext } from 'react';
import  { BsCart3 }  from 'react-icons/bs';
import { CartContext } from '../../context/CartContext';
import './CartWidget.css';
import { Link } from 'react-router-dom';

export default function CartWidget() {

  const {getItemQty} = useContext(CartContext)

  return (<>
    <Link to="/cart"><BsCart3 className="cart_logo"/></Link>
    <span className="contador_carrito">{getItemQty()}</span>
    </>
    )
}
