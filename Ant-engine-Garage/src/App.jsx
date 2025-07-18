import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Bodypart from "./pages/Bodypart";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";
import "./App.css";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        // เพิ่มจำนวนสินค้าเดิม
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // เพิ่มสินค้าใหม่ พร้อม quantity = 1
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const increaseQuantity = (id) => {
  setCartItems((prevItems) =>
    prevItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    )
  );
};

const decreaseQuantity = (id) => {
  setCartItems((prevItems) =>
    prevItems
      .map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0)
  );
};


  return (
    <div className="app-container">
      <Navbar />
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/cart" style={{ color: "#ff6600", fontWeight: "600" }}>
          🛒 ตะกร้าสินค้า (
          {cartItems.reduce((sum, item) => sum + item.quantity, 0)})
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/bodypart" element={<Bodypart addToCart={addToCart} />} />
        {/* <Route
          path="/cart"
          element={<Cart cartItems={cartItems} onRemoveItem={removeFromCart} />}
        /> */}
        <Route
  path="/cart"
  element={
    <Cart
      cartItems={cartItems}
      onRemoveItem={removeFromCart}
      onIncreaseQuantity={increaseQuantity}
      onDecreaseQuantity={decreaseQuantity} 
    />
  }
/>

        <Route
          path="/product/:id"
          element={<ProductDetail addToCart={addToCart} />}
        />
      </Routes>
      
    </div>
  );
}


export default App;
