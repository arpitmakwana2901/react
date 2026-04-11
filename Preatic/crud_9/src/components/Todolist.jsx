import React, { useState } from "react";

const Todolist = () => {
  const [inputText, setInputText] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [todoData, setTodoData] = useState("");
  return (
    <div>
      <h1>Todo App</h1>

      <div>
        <input
          type="text"
          name="name"
          value={inputText}
          onChange={(event) => setInputText(event.target.value)}
        />
      </div>
    </div>
  );
};

export default Todolist;
