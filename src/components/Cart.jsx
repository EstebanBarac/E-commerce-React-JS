import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from 'react-router-dom';



export default function Cart() {

    const {cart, getItemPrice, getItemQty, deleteItem, emptyCart} = useContext(CartContext)
    


  return (
    <>
        {
            
            cart.length > 0 ? cart.map((element, index) => {
                return (
                <>
                    <div key= {index} className="card w-50">
                        <div className="card-title">{element.nombre}</div>
                        <div className="card-text">Precio: ${getItemPrice()}</div>
                        <div className="card-text">Cantidad de dias: {getItemQty()}</div>
                    </div>
            
                </>   
                     )
            })
            : 
            <div>
                <h3>El carrito esta vacio</h3>
                <Link to="/"><button>Volver a home</button></Link>
            </div>
        }
    </>
  )
}
