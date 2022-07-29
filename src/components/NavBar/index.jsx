import { BrowserRouter as Router, Link } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";

import "./navbar.css";

export default function NavBar() {
  return (
    <div className="navbar-container">
      <div className="logo-text-container">
        <p className="logo-text">ShopKart.</p>
      </div>

      <div className="nav-links">
        <p className="link-text">Products</p>
        <p className="link-text">Login</p>
        <HiShoppingCart
            style={{
              fontSize: "1.5rem",
              color: "#0A376D",
              margin: 0,
              marginTop: "5.5%"
            }}
          />
        <p className="link-text">
          
        </p>
      </div>
    </div>
  );
}
