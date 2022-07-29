import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//components
import NavBar from "./components/NavBar";

//pages
import Auth from "./pages/Auth";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/HomePage/Product";

function App() {
  return (
    <Router>
      <NavBar />

      {/* <Auth /> */}
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/auth" element={<Auth />}/>
        <Route path="/products/:id" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
