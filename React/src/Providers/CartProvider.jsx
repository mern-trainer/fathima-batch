import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])

    const addToCart = (product) => {
        const matchedIndex = cartList.findIndex((cartItem) => {
            return cartItem.id == product.id
        })
        if (matchedIndex > -1) {
            return toast.error("Product already added to cart")
        }
        setCartList([...cartList, product])
        return toast.success("Product added to cart")
    }

    const removeFromCart = (id) => {
        const res = cartList.filter(cartItem => cartItem.id != id)
        setCartList(res)
        return toast.success("Product removed from cart")
    }

    return <CartContext.Provider value={{ cartList, addToCart, removeFromCart }}>
        {children}
    </CartContext.Provider>
}
