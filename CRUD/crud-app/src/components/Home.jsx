import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios("http://localhost:3000/product").then((res) => {
      console.log(res);
      setProducts(res.data);
    });
  }, []);
  
  
  return (
    <div>
     <Link to={"/createProduct"}> <button>Create Product</button></Link>
      <table style={{ border: "1px solid black" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody style={{border:"1px solid blue"}}>
          {products &&
            products.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.price}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
