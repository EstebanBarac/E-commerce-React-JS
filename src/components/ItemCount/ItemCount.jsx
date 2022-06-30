import React from 'react'


export default function ItemCount({ qty, setQty, stock, onAdd}) {
    
    const sumar = () => {
        qty < stock ? setQty(qty + 1) : alert('No puedes agregar mas')     
    }

    const restar = () => {
        qty > 1 ? setQty(qty - 1) : alert('no puedes poner menos')
    }

    return (
    <div className='grid row' id='ItemCount'>
        <div> 
            <h6>Maximo de dias: {stock}</h6>
        </div>
        <div>
            <button className='btn btn-secondary m-3' onClick={restar}>-</button>
            <span id='spanNumero'>{qty}</span>
            <button className='btn btn-secondary m-3' onClick={sumar}>+</button>
            <button className='btn btn-warning' onClick={() => {onAdd()}} id='btnReservar'>Reservar</button>
        </div>
        
    </div>
  )
}
