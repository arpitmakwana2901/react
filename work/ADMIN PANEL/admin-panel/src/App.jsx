import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ProductPage from "./components/ProductPage";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navbar path="/" element={<Navbar/>} />
      <Routes>
      <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        
        <Route path="/header" element={<Header />} />
        <Route path="/productpage" element={<ProductPage />} />
      </Routes>
    </Router>
  );
};

export default App;
