import React from 'react'
import {toast, ToastContainer} from 'react-toastify';


export default function ItemCount({ qty, setQty, stock, onAdd}) {
    
    const sumar = () => {
        qty < stock ? setQty(qty + 1) : toast.warn('No puedes poner mas', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });     
    }

    const restar = () => {
        qty > 1 ? setQty(qty - 1) : toast.warn('No puedes poner menos', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
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
        
        <ToastContainer position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover/>
    </div>
  )
}
