import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

import { useAuthContext } from "./AuthContextManager";


export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [favourite, setFavourite] = useState([]);

  const {userId} = useAuthContext();
  
  const getFavourites = () => {
    axios.get("http://127.0.0.1:5000/favourites?userId"+userId).then((res) => {
        console.log(res.data[res.data.length-1])
        // setFavourite()
    }).catch(e => console.log(e));
  }

  const updateFavourite = () => {
    axios
      .post("http://127.0.0.1:5000/favourites", {
        favouriteList: favourite,
        userId: userId,
      })
      .then((res) => {
        console.log("favourite update");
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    updateFavourite();
    getFavourites()
  }, [favourite]);
  useEffect(()=> {
    getFavourites()
  },[])
  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        favourite,
        setFavourite,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  return useContext(CartContext);
}
