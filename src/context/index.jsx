
import { createContext, useState } from "react";
import { Form } from "../components";


export const CartContext = createContext([])


const CartProvider = ({ children }) => {
    
    const [ cartProducts, setCartProducts ] = useState([])
    const [ totalProducts, setTotalProducts ] = useState(0)
    
    const cartAdd = (product) => {
        setCartProducts(
            [ ...cartProducts, product ]
            )
        }
    
    const totalPrice = () => {
        return cartProducts.reduce((total, product) => total =+ (product.price * product.quantity), 0)
    }

    const cartErase = () => setCartProducts([])

    const cartConfirm = () => {
        return(
            <Form />
        )
    }

    const values = {
        cartProducts: cartProducts,
        cartAdd,
        cartErase,
        cartConfirm,
        totalPrice,
        totalProducts: totalProducts
    }

    return (
        <CartContext.Provider value={values}>
            { children }
        </CartContext.Provider>
    )
}

export default CartProvider