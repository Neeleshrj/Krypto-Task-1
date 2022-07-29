import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdOutlineAddShoppingCart } from "react-icons/md";

import axios from "axios";

import "./product.css";

import { useCartContext } from "../../Context/CartContextManager";
import { useAuthContext } from "../../Context/AuthContextManager";

export default function Product({ data }) {
  const { cart, setCart, favourite, setFavourite } = useCartContext();
  const { userId } = useAuthContext();
  const [ isFavourite, setIsFavourite] = useState(false)
  const [changed, setChanged] = useState(false);

  const change = () => {
    setChanged((prev) => !prev);
  };

  const addItem = () => {
    let items = [...cart];
    items.push(data);
    setCart(items);
  };


  const checkFavourite = (val) => {
    let i =0
    while(i<favourite.length && favourite.length!=0){
      if(favourite[i] === val){
        setIsFavourite(true)
        break
      }
      ++i;
    }
   
  }

  const addToFavourite = (id) => {
    let items = [...favourite];
    let items2 = [];
    let flag = 0;
    let i = 0;
    while(i < favourite.length){
      if(favourite[i] === id){
        console.log("match")
        items2 = items.slice(0,i)
        items = items.slice(i+1,favourite.length)
        items = items2.concat(items)
        setIsFavourite(false)
        flag = 1;
        break
      }else{
        ++i;
      }
    }

    if(flag == 0){
      items.push(id)
    }
    setFavourite(items)
    change()
    
  };

  useEffect(() => {
    checkFavourite(data.id)
  }, [changed]);

  return (
    <div className="product-container">
      <div className="product-box">
        <div>
          <NavLink to={`/products/${data.id}`}>
            <img src={data.image} className="product-img" />
          </NavLink>
          <div className="product-info-box">
            <div className="product-text-box">
              <p className="product-text">{data.title}</p>
            </div>
            <p className="product-text">₹ {data.amount}</p>
            <div className="product-rating-container">
              <p className="rating">{data.rating}</p>
            </div>
            <div className="action-buttons-container">
              {isFavourite ? (
                <AiFillHeart
                  className="action-buttons"
                  onClick={() => addToFavourite(data.id)}
                />
              ) : (
                <AiOutlineHeart
                  className="action-buttons"
                  onClick={() => addToFavourite(data.id)}
                />
              )}

              <MdOutlineAddShoppingCart
                className="action-buttons"
                onClick={() => addItem()}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
