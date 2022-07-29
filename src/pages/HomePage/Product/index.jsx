import { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import axios from "axios";

import "./productpage.css";

//components
import PrimaryButton from "../../../components/Buttons/PrimaryButton";
import SecondaryButton from "../../../components/Buttons/SecondaryButton";

//context
import { useCartContext } from "../../../Context/CartContextManager";

export default function ProductPage() {
  const [data, setData] = useState(null);
  const { cart, setCart } = useCartContext();

  const addItem = () => {
    let items = [...cart];
    console.log(items)
    items.push(data);
    setCart(items);
  };

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000" + window.location.pathname)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  if (data) {
    return (
      <div className="product-page-container">
        <div className="product-image-container">
          <img src={data.image} className="product-image" />
        </div>
        <div className="product-description-container">
          <div className="product-title-container">
            <div className="product-title-innercontainer">
              <p className="product-title">{data.title}</p>
            </div>
            <div className="favourite-button-container">
              <AiOutlineHeart className="favourite-button" />
            </div>
          </div>
          <div className="">
            <p className="product-description">{data.description}</p>
            <p className="product-cost">₹ {data.amount}</p>
          </div>
          <div className="button-container">
            <SecondaryButton text="Buy Now" color="#000" textColor="#000" />
            <PrimaryButton
              text="Add to Basket"
              color="#000"
              textColor="#fff"
              onClick={() => addItem()}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return <p>Loading</p>;
  }
}
