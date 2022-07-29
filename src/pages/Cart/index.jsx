import { useEffect, useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import axios from "axios";

import "./cart.css";

import OrderPlacedModal from "./OrderPlacedModal";

import { useCartContext } from "../../Context/CartContextManager";
import { useAuthContext } from "../../Context/AuthContextManager";
  
export default function Cart() {
  const { cart, setCart } = useCartContext();
  const { userId } = useAuthContext();
  const [total, setTotal] = useState(0);
  const [finCart, setFinCart] = useState([]);
  const [changed, setChanged] = useState(false);
  const [placed, setPlaced] = useState(false);

  const placeOrder = () => {
    axios.post("http://127.0.0.1:5000/orders",{
        productId: finCart,
        userId: userId,
        totalAmount: total-150,
    }).then((res) => {
        console.log(res.data)
        setPlaced(true)
    }).catch(e => console.log(e));
  }

  const getTotal = () => {
    let temp = 0;
    for (const element of cart) {
      temp = temp + parseInt(element.amount);
    }
    setTotal(temp);
  };

  const createProductList = () =>{
    let i =0
    let items = []
    while(i<cart.length){
        items.push(cart[i].id)
        i++;
    }
    setFinCart(items)
  }

  const change = () => {
    setChanged((prev) => !prev);
    
  };

  function removeItem(value) {
    let items = [...cart];
    let items2 = [];
    let i = 0;
    while (i < cart.length) {
      if (items[i].id === value) {
        items2 = items.slice(0, i);

        items2 = items2.concat(items.slice(i + 1, cart.length));

        break;
      } else {
        ++i;
      }
    }
    // items.concat(items2)
    setCart(items2);
    change();
  }

  function addItem(value) {
    let items = [...cart];
    let i = 0;
    while (i < cart.length) {
      if (items[i].id === value) {
        items.push(items[i]);
        break;
      } else {
        ++i;
      }
    }
    setCart(items);
    change();
  }

  const wipeData = () => {
    setCart([])
    setFinCart([])
    changed()
    setTotal(0)
  }

  useEffect(() => {
    getTotal();
  }, [changed]);

  useEffect(() => {
    getTotal();
    createProductList();
  }, []);

  return (
    <div className="cart-container">
      <div className="cart-inner-container">
        <div className="mycart-container">
          <p className="box-header-text">My Cart</p>
          {cart.length !== 0 ? (
            cart.map((obj, i) => (
              <div key={i} className="item-container">
                <div className="cart-image-container">
                  <img src={obj.image} className="cart-image" />
                </div>
                <div className="item-title-container">
                  <p className="item-title-text">{obj.title}</p>
                  <div className="price-details">
                    <p className="item-price-text">₹ {obj.amount}</p>
                    <MdOutlineCancel
                      className="cancel-icon"
                      onClick={() => removeItem(obj.id)}
                    />
                  </div>
                  <div className="item-amount-container">
                    <AiOutlinePlus
                      onClick={() => addItem(obj.id)}
                      style={{ cursor: "pointer" }}
                    />
                    <input type="text" className="item-amount-box" value={1} />
                    <AiOutlineMinus
                      onClick={() => removeItem(obj.id)}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Cart is empty</p>
          )}
        </div>
        {cart.length !== 0 ? (
          <div className="price-details-container">
            <p className="price-header-text">Price Details</p>
            <div className="price-details">
              <p className="price-details-text">Price</p>
              <p className="price-details-text">₹ {total}</p>
            </div>
            <div className="price-details">
              <p className="price-details-text">Discount Price</p>
              <p className="price-details-text">₹ 100</p>
            </div>
            <div className="price-details  bottom-most">
              <p className="price-details-text">Delivery Charge</p>
              <p className="price-details-text">₹ 50</p>
            </div>
            <div className="price-details">
              <p className="price-details-text total-text">Total</p>
              <p className="price-details-text total-text">₹ {total - 150}</p>
            </div>
          </div>
        ) : (
          <div className="price-details-container">
            <p className="price-header-text">Price Details</p>
            <div className="price-details">
              <p className="price-details-text">Price</p>
              <p className="price-details-text">₹ {total}</p>
            </div>
            <div className="price-details">
              <p className="price-details-text total-text">Total</p>
              <p className="price-details-text total-text">₹ {total}</p>
            </div>
          </div>
        )}
      </div>
      <div className="place-order-button-container">
        <button className="place-order-button" onClick={() => placeOrder()}>Place Order</button>
      </div>
      {placed ? <OrderPlacedModal onClick={() => {setPlaced(false);wipeData()}}/> : null}
    </div>
    
  );
}
