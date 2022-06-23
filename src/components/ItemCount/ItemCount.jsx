import React from 'react'


export default function ItemCount({ qty, setQty, stock, onAdd}) {
    
    const sumar = () => {
        qty < stock ? setQty(qty + 1) : alert('No puedes agregar mas')     
    }

    const restar = () => {
        qty > 1 ? setQty(qty - 1) : alert('no puedes poner menos')
    }

    return (
    <div className='container fluid' id='Contador'>
        <div> 
            <h6>Maximo de dias: {stock}</h6>
        </div>
        <div>
            <button className='btn btn-secondary' onClick={restar}>-</button>
            <span className='h3 m-3'id='contador'>{qty}</span>
            <button className='btn btn-secondary' onClick={sumar}>+</button>
        </div>
        <button className='btn btn-warning mt-1' onClick={() => {onAdd()}}>Reservar</button>
    </div>
  )
}
