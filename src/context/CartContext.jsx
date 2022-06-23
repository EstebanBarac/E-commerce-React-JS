import { createContext, useState } from 'react';

    export const CartContext = createContext()

    const { Provider } = CartContext;

    const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

        const isInCart = (id) => {
            return cart.some(x => x.id === id)
        }

        const addItem = (item, qty) => {
            const newItem = {
                ...item,
                   qty
            }
            if (isInCart(newItem.id)) {
                    const findProduct = cart.find(x => x.id === newItem.id)
                    const productIndex = cart.indexOf(findProduct)
                    const auxArray = [...cart]
                    auxArray[productIndex].qty += qty
                    setCart(auxArray)
            } else {
                setCart([...cart, newItem]);
            }
        }
        
        
        const emptyCart = () => {
                setCart([])
        }
        
        const deleteItem = (id) => {
                return setCart(cart.filter(x => x.id !==id))
        }
        
        const getItemQty = () => {
                return cart.reduce((acc, x) => acc += x.qty, 0)
        }
        
        const getItemPrice = () => {
                return cart.reduce((acc, x) => acc += x.qty * x.precio, 0)
        }
        



    return  <Provider value={{cart, isInCart, addItem, deleteItem, emptyCart, getItemQty, getItemPrice}}>{children}</Provider>     
}

export default CartProvider;