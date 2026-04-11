import axios from "axios";
import React, { useEffect, useState } from "react";
import "../components/ProductPage.css";
import Navbar from "../components/Navbar";

const Home = () => {
  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    try {
      const response = await axios.get(
        "https://dummyjson.com/products?limit=50",
      );
      setProducts(response.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []); 

  return (
    <>
      <Navbar />
  

      <div className="products-container">
        {products &&
          products.map((item) => (
            <div key={item.id} className="product-card">
              <div>
                <img src={item.thumbnail} alt={item.title} />
              </div>
              <div className="product-details">
                <h3>{item.title}</h3>
                <p>
                  <b>Brand:</b> {item.brand}
                </p>
                <p>
                  <b>Category:</b> {item.category}
                </p>
                <p>
                  <b>Price:</b> ${item.price}
                </p>
                <p>
                  <b>Rating:</b> {item.rating}
                </p>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Home;
