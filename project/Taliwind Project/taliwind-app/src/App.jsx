import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [editIndex, setEditIndex] = useState("");
  const [boolean, setBoolean] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((res) => {
        setProducts(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []); 

  function handleAdd(product) {
    setCart([...cart, product]);
  }

  function removeFromCart(item) {
    setCart(cart.filter((deleteItem) => deleteItem != item));
  }

  function editFromCart(item) {
    setBoolean(true);
    setCart(products[item]);
    setEditIndex(item);
  }

  return (
    <>
      <Navbar />
      <div className="flex mt-[60px]">
        <div className="grid grid-cols-[repeat(3,1fr)] gap-5">
          {products.map((item) => (
            <div
              key={item.id}
              className="mx-auto max-w-sm p-6 shadow-lg rounded-xl"
            >
              <p className="text-3xl">{item.id}</p>
              <p className="text-xl text-blue-600 uppercase">{item.category}</p>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="line-clamp-2">{item.description}</p>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-50 object-contain"
              />
              <p className="text-lg font-semibold text-green-600">
                <strong>Price: </strong>${item.price}
              </p>
              <button
                className="w-full bg-red-500 text-white py-2 mt-2 rounded-lg hover:bg-red-700"
                onClick={() => handleAdd(item)}
              >
                ADD TO CART
              </button>
            </div>
          ))}
        </div>

        
        <div className="w-[300px] h-screen border-l border-gray-300 fixed right-0 p-4 bg-white overflow-y-auto">
          <h2 className="text-xl font-semibold mb-4">Cart Items</h2>
          {cart.length === 0 ? (
            <p className="text-gray-500">Cart is empty</p>
          ) : (
            cart.map((item, index) => (
              <div key={index} className="p-2 border-b border-gray-200">
                <p className="text-3xl">{item.id}</p>
                <h4 className="font-medium">{item.title}</h4>
                <p className="line-clamp-2">{item.description}</p>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-50 object-contain"
                />
                <p className="text-lg font-semibold text-green-600">
                  <strong>Price: </strong>${item.price}
                </p>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition ml-2"
                  onClick={() => removeFromCart(item)}
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default App;
