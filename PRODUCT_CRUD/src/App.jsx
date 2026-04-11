import React from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/HomePage";
import ProductPage from "./components/ProductPage";
import Login from "./components/Login";
import Logout from "./components/Logout";
import AddProduct from "./components/AddProduct";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/addProduct" element={<AddProduct />} />

      </Routes>
    </>
  );
};

export default App;
