import axios from "axios";
import React, { useEffect, useState } from "react";
import "./ProductPage.css";
import { Link } from "react-router-dom";

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get("http://localhost:369/product");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <>
      <Link to="/addProduct">
        <button>Add Product</button>
      </Link>

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
                  <b>Category:</b> {item.category}
                </p>
                <p>
                  <b>Price:</b> ${item.price}
                </p>
              </div>

              <button>Edit</button>
              <button>Delete</button>
            </div>
          ))}
      </div>
    </>
  );
};

export default ProductPage;
