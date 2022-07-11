import React from 'react'
import CartView from './CartView'
import {useContext} from 'react';
import {CartContext} from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './CartViewContainer.css'

export default function CartViewContainer() {

    const {cart, getItemPrice, emptyCart} = useContext(CartContext)
  
    return (
        <>
        <div id='cart'>
    <div className="container py-5">  
      <div className="row d-flex justify-content-center align-items-center" id='CartViewContainer'>
        <div className="col-10"> 
        <button type="button" className="btn btn-outline-danger m-3 float-end" onClick={emptyCart}> Vaciar carrito</button>
        <Link to='/'><button type="button" className="btn btn-outline-warning m-3">Agregar mas</button></Link>
             {
              cart.map( item => (
                <CartView key={item.id} item={item} />
              ))
            }
          
          <div className="card mb-4 bg-dark text-white">
            <div className="card-body p-4 d-flex flex-row">
              <div className="form-outline flex-fill">
              <h4 className='float-end'>Total: $ {getItemPrice()}</h4>
              </div>
            </div>
          </div>
  
          <div className="card align-items-center bg-dark text-white">
            <div className="card-body ">
              <Link to={'/checkout'}><button type="button" className="btn btn-warning btn-block btn-lg">Proceder al pago</button></Link>
            </div>
          </div>
  
        </div>
      </div>
    </div>
    </div>
  
  </>
  )
}
