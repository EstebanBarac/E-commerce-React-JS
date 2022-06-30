import React from 'react'
import { useContext } from 'react';
import { useState } from 'react'
import { CartContext } from '../../context/CartContext';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { Link } from 'react-router-dom';

export default function Checkout() {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const { cart, getItemPrice } = useContext(CartContext);
    
    const db = getFirestore();
    const pedidoCollection = collection(db, 'pedidos');
  
    function handleClick(){
        const pedido = {
            comprador: { name, email, tel },
            items: cart,
            total: getItemPrice(),
        }
        console.log(pedido);

        addDoc(pedidoCollection, pedido).then(({id}) => {
            console.log(id);
        })
    }


    return (
    <div>
        <h1>COMPLETE PARA TERMINAR SU COMPRA</h1>
        <input onChange={(e)=> setName(e.target.value)} placeholder='ingrese su nombre'></input>
        <input onChange={(e)=> setTel(e.target.value)}placeholder='ingrese su telefono' type={tel}></input>
        <input onChange={(e)=> setEmail(e.target.value)}placeholder='ingrese su email' type={email}></input>
        <Link to='/pagoterminado'><button onClick={handleClick}>Realizar PAGO</button></Link>
    
    </div>
  )
}
