import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Home from "./components/Home";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((response) => {
        setAllProducts(response.data);
        setProducts(response.data);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (search.trim() === "") {
      setProducts(allProducts);
    } else {
      const filteredProducts = allProducts.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );
      setProducts(filteredProducts);
    }
  }, [search, allProducts]);

  function handleAdd(product) {
    if (cart.some((item) => item.id === product.id)) {
      alert("This item is already in the cart!");
      return;
    }
    setCart([...cart, product]);
    alert("Added to Cart Successfully!");
    
  }

  function removeFromCart(item) {
    setCart(cart.filter((cartItem) => cartItem.id !== item.id));
  }

  function buyNow() {
    if (cart.length === 0) {
      alert("Your cart is empty! Add some products before purchasing.");
      return;
    }
    alert("Purchase successful! Thank you for your order.");
    setCart([]);
  }

  return (
    <>
      <Navbar />
      

      <Routes>
        <Route path="/" element={<Home products={products} handleAdd={handleAdd}/>}/>
        <Route path="/showCart" element={<Cart cart={cart}   removeFromCart={removeFromCart} buyNow={buyNow} />} />
      </Routes>
    </>
  );
};

export default App;
