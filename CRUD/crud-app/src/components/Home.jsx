import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);

  function handleDelete(id){
    axios.delete("http://localhost:3000/product/"+id).then((res) => {
      console.log(res);
      alert("Product Deleted Successfully");
      window.location.reload();
    });
  }
  useEffect(() => {
    // axios("http://localhost:3000/product").then((res) => {
    //   console.log(res);
    //   setProducts(res.data);
    // });
    getData();  
  }, []);
  
  function getData(){
    axios.get("http://localhost:3000/product").then((res) => {
      console.log(res);
      setProducts(res.data);
    });
  }
  
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
        <tbody>
          {products &&
            products.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.price}</td>
                <td><button>Edit</button>
                <button onClick={()=>{handleDelete(item.id)}}>Delete</button>
                </td>
                
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
