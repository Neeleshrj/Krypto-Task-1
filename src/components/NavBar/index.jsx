import { NavLink } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";

import "./navbar.css";

//hooks
import { useAuthContext } from "../../Context/AuthContextManager";

export default function NavBar() {
  const { isLoggedIn, logout } = useAuthContext();

  return (
    <div className="navbar-container">
      <div className="logo-text-container">
        <p className="logo-text">ShopKart.</p>
      </div>

      <div className="nav-links">
        <NavLink to="/" className="nav-link">
          <p className="link-text">Products</p>
        </NavLink>

        {!isLoggedIn ? (
          <NavLink to="/auth" className="nav-link">
            <p className="link-text">Login</p>
          </NavLink>
        ) : (
          <p className="link-text" onClick={() => logout()}>Logout</p>
        )}
        <HiShoppingCart
          style={{
            fontSize: "1.5rem",
            color: "#0A376D",
            margin: 0,
            marginTop: "5.5%",
          }}
        />
        <p className="link-text"></p>
      </div>
    </div>
  );
}
