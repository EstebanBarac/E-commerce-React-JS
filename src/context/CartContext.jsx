import { createContext, useEffect, useState } from 'react';

    export const CartContext = createContext()

    const { Provider } = CartContext;

    const CartProvider = ({ children }) => {
    
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cartItems')) ?? [])

        const isInCart = (id) => {
            return cart.some((x) => x.id === id)
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
                const updatedCart = cart.filter((element) => element.id !== id);
                setCart(updatedCart);
        }
        
        const getItemQty = () => {
                return cart.reduce((acc, x) => acc += x.qty, 0)
        }
        
        const getItemPrice = () => {
                return cart.reduce((acc, x) => acc += x.qty * x.precio, 0)
        }
        
        useEffect(() => {
            localStorage.setItem("cartItems", JSON.stringify(cart));
          }, [cart]);


    return  <Provider value={{ cart, isInCart, addItem, deleteItem, emptyCart, getItemQty, getItemPrice }}>{children}</Provider>     
}

export default CartProvider;