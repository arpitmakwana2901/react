import axios from "axios";
import React, { useState } from "react";

const Create = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  function handleSubmit(event) {
    
    event.preventDefault();
    if (name == "" || description == "" || price == "") {
      alert("Please Enter Required Fields");
      return;
    }
    let object = { name, description, price };
 console.log(object)

 axios
      .post("http://localhost:3000/product", object)
      .then((res) => {
        console.log(res);
        alert("product added successfully");
        navigate("/");
      })
      .catch((err) => {
        alert(err);
      });
  }
  

  
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <label>Description:</label>
        <input
          type="text"
          placeholder="Enter Description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />

        <label>Price:</label>
        <input
          type="number"
          placeholder="Enter Price"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default Create;
