import React, { useState } from 'react'

export default function ItemCount({initial,  stock, onAdd}) {
    const[count, setCount] = useState(initial)

    const sumar = () => {
        count < stock ? setCount(count + 1) : alert('No puedes agregar mas')     
    }

    const restar = () => {
        count > initial ? setCount(count - 1) : alert('no puedes poner menos')
    }

    const reinicio = () => {
        setCount(initial);
    }

    const handlerEvent = () => {

        onAdd(count)
        setCount(initial)
        reinicio()
        }
        

    return (
    <div className='container fluid'>
        <div>
            <h3>PRODUCTO 1</h3>
            <p>Stock: {stock}</p>
        </div>
        <div>
            <button className='btn btn-secondary' onClick={restar}>-</button>
            <span className='h3 m-3'id='contador'>{count}</span>
            <button className='btn btn-secondary' onClick={sumar}>+</button>
        </div>
        <button className='btn btn-primary mt-1' onClick={handlerEvent}>Agregar al carrito</button>
    </div>
  )
}
