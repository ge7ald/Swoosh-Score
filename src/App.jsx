import Home from "./pages/Home";
import Cart from "./pages/cartSection";
import Shop from "./pages/shop";
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [addCart, setAddCart] = useState(false);
  const [cartItem, setCartItem] = useState([]);
  const numOfCartItems = cartItem.length;
  
     const totalPrice = cartItem.reduce(
  (total, item) => total + item.price,
  0
);

  function onToggleToCart() {
    setAddCart((prev) => {
      const newValue = !prev;

      if (newValue) {
        alert("Added to cart");
      } else {
        alert("Removed from cart");
      }

      return newValue;
    });
  }
  function toggleRemove(id) {
     setCartItem(prev => prev.filter(item => item.id !== id ))
     console.log("removed")
  }
  function cartItems(item) {
    setCartItem((prev) => [...prev, item]);
    console.log(item)
  }
  function updateCart(id) {
    setCartItem(prev => prev.map(items => items.id === id ? {...items, quantities: items.quantities + 1} : items))
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              toggleToCart={onToggleToCart}
              cartItem={cartItems}
              numOfCartItems={numOfCartItems}
            />
          }
        />
        <Route
          path="/cartSection"
          element={
            <Cart
              item={cartItem}
              numOfCartItems={numOfCartItems}
              totalPrice={totalPrice}
              onToggleRemove={toggleRemove}
            />
          }
        />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </Router>
  );
}

export default App;
