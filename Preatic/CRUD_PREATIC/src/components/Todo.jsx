import React, { useEffect, useState } from "react";

const Todo = () => {
  let data = {
    userName: "",
    email: "",
    password: "",
  };

  const [inputText, setInputText] = useState(data);
  const [todos, setTodos] = useState(() => {
    let saveTodo = localStorage.getItem("todos");
    return saveTodo ? JSON.parse(saveTodo) : [];
  });

  const [editIndex, setEditIndex] = useState("");
  const [boolean, setBoolean] = useState(false);

  function handleAdd(e) {
    e.preventDefault();
    if (inputText.userName.trim() === "") return;
    setTodos([...todos, inputText]);
    console.log(inputText);
    setInputText({
      userName: "",
      email: "",
      password: "",
    });
  }

  function handleEdit(id) {
    setBoolean(true);
    setInputText(todos[id]);
    setEditIndex(id);
  }

  function handleUpdate() {
    let updateData = todos.map((item, i) =>
      i == editIndex ? inputText : item,
    );
    setTodos(updateData);
    setBoolean(true);
    setInputText("");
  }
  function handleDel(index) {
    let delData = todos.filter((el, e) => e != index);
    setTodos(delData);
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <>
      <div>Todo App</div>
      <form>
        <input
          type="text"
          name="userName"
          value={inputText.userName}
          onChange={(e) =>
            setInputText({ ...inputText, userName: e.target.value })
          }
        />
        <input
          type="email"
          name="email"
          value={inputText.email}
          onChange={(e) =>
            setInputText({ ...inputText, email: e.target.value })
          }
        />
        <input
          type="password"
          placeholder="password"
          value={inputText.password}
          onChange={(e) =>
            setInputText({ ...inputText, password: e.target.value })
          }
        />
        {boolean ? (
          <button type="submit" onClick={handleUpdate}>
            Update
          </button>
        ) : (
          <button type="submit" onClick={handleAdd}>
            Submit
          </button>
        )}
      </form>

      {todos.map((item, id) => (
        <div key={id}>
          <h1>{item.userName}</h1>
          <h2>{item.email}</h2>
          <h3>{item.password}</h3>
          <button onClick={() => handleDel(id)}>Delete</button>
          <button onClick={() => handleEdit(id)}>Edit</button>
        </div>
      ))}
    </>
  );
};

export default Todo;
