import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//components
import NavBar from "./components/NavBar";

//pages
import Auth from "./pages/Auth";

function App() {
  return (
    <Router>
      <NavBar />
      <Auth />
      {/* <Routes>
        <Route path="/">
          
        </Route>
      </Routes> */}
    </Router>
  );
}

export default App;
