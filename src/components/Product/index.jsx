import { Link, NavLink } from "react-router-dom";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdOutlineAddShoppingCart } from "react-icons/md";

import "./product.css";

import { useCartContext } from "../../Context/CartContextManager";

export default function Product({ data }) {
  const {cart, setCart} = useCartContext();

  const addItem = () => {
    let items = [...cart]
    items.push(data)
    setCart(items)
  }

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
              <AiOutlineHeart className="action-buttons" />
              <MdOutlineAddShoppingCart className="action-buttons" onClick={() => addItem()}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
