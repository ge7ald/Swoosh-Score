import Home from "./pages/Home";
import Cart from "./pages/cartSection";
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cartSection" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;

