import React, { useEffect, useState } from "react";

const Todolist = () => {
  const [inputText, setInputText] = useState("");
  const [todolist, setTodolist] = useState(
    JSON.parse(localStorage.getItem("todoData")) || []
  );

  const [addCart, setAddToCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  function handleAdd() {
    if (inputText.trim() === "") return;
    setTodolist([...todolist, inputText]);
    setInputText("");
  }

  function addToCart(element) {
    if (!addCart.includes(element)) {
      setAddToCart([...addCart, element]);
    }
  }

  function removeFromCart(item) {
    setAddToCart(addCart.filter((cartItem) => cartItem !== item));
  }

  function toggleCart() {
    setShowCart(!showCart);
  }

  useEffect(() => {
    localStorage.setItem("todoData", JSON.stringify(todolist));
  }, [todolist]);

  return (
    <div>
      <h1>Todolist</h1>
      <input
        type="text"
        placeholder="Enter Task"
        onChange={(event) => setInputText(event.target.value)}
        value={inputText}
      />
      <button onClick={handleAdd}>Add</button>
      <button onClick={toggleCart}>
        {showCart ? "Hide Cart" : "Show Cart"}
      </button>

      {todolist.map((element, index) => (
        <div key={index}>
          <h3>{element}</h3>
          <button onClick={() => addToCart(element)}>Add to Cart</button>
        </div>
      ))}

      {showCart && (
        <div
          style={{
            height: "200px",
            width: "250px",
            border: "1px solid black",
            padding: "10px",
            marginTop: "10px",
          }}    
        >
          <h2>Cart Items</h2>
          {addCart.length === 0 ? (
            <p>Cart is empty</p>
          ) : (
            addCart.map((element, index) => (
              <div key={index} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <h3>{element}</h3>
                <button onClick={() => editFromCart(element)}>Edit</button>
                <button onClick={() => removeFromCart(element)}>Remove</button>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Todolist;
