import { createContext, useContext, useState, useEffect } from "react";

export const CartContext = createContext();

export default function CartContextProvider({children}){
    const [cart, setCart] = useState([]);

    return(
        <CartContext.Provider value={{
            cart,
            setCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export function useCartContext() {
    return useContext(CartContext);
  }