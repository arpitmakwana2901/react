import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom"; 

const Navbar = () => {
  return (
    <nav>
      <h2>Brand Name</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/product">Product</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;