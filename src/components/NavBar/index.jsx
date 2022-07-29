import {  NavLink } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";

import "./navbar.css";

export default function NavBar() {
  return (
    <div className="navbar-container">
      <div className="logo-text-container">
        <p className="logo-text">ShopKart.</p>
      </div>

      <div className="nav-links">
        <NavLink to="/" className="nav-link"><p className="link-text">Products</p></NavLink>
        
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
