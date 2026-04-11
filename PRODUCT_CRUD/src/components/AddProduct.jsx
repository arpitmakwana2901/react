import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddProduct.css";

const AddProduct = () => {
  let data = {
    title: "",
    thumbnail: "",
    category: "",
    price: "",
  };

  const [input, setInput] = useState(data);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("http://localhost:369/product", input)
      .then((response) => {
        alert("Product Added Successfully");
        navigate("/product");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="add-product-container">
      <h2>Add Product</h2>

      <form onSubmit={handleSubmit} className="add-product-form">
        <input
          type="text"
          placeholder="Enter Title"
          value={input.title}
          onChange={(e) => setInput({ ...input, title: e.target.value })}
        />

        <input
          type="text"
          placeholder="Enter Category"
          value={input.category}
          onChange={(e) => setInput({ ...input, category: e.target.value })}
        />

        <input
          type="number"
          placeholder="Enter Price"
          value={input.price}
          onChange={(e) => setInput({ ...input, price: e.target.value })}
        />

        <input
          type="text"
          placeholder="Enter Thumbnail URL"
          value={input.thumbnail}
          onChange={(e) => setInput({ ...input, thumbnail: e.target.value })}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProduct;
