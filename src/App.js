import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//components
import NavBar from "./components/NavBar";

//pages
import Auth from "./pages/Auth";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/HomePage/Product";
import Cart from "./pages/Cart";

import { useAuthContext } from "./Context/AuthContextManager";

function App() {
  const { isLoggedIn } = useAuthContext();

  return (
    <Router>
      <NavBar />
      {!isLoggedIn ? (
        <Routes>
          <Route path="/" element={<Auth />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      )}
      {/* <Auth /> */}
    </Router>
  );
}

export default App;
