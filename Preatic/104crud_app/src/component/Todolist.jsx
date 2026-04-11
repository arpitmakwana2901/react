import React, { useEffect, useState } from "react";

const Todolist = () => {
  const [userData, setUserData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const [todoData, setTodoData] = useState(
    JSON.parse(localStorage.getItem("todo")) || [],
  );

  const [editIndex, setEditIndex] = useState("");

  const [boolean, setBoolean] = false;

  function handleAdd(e) {
    e.preventDefault();
    if (boolean) {
      setTodoData(
        todoData.map((ele, index) => (index == editIndex ? userData : item)),
      );
      setBoolean(false);
    } else {
      setTodoData([...todoData, userData]);
    }
    console.log(userData);

    setUserData({
      userName: "",
      email: "",
      password: "",
    });
  }

  function handleDelete(index) {
    let filterData = todoData.filter((item, i) => i !== index);
    setTodoData(filterData);
  }

  function handleEdit(index) {
    setBoolean(true);
    setUserData(todoData[index]);
    setEditIndex(index);
  }

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todoData));
  }, [todoData]);
  return (
    <>
      <div>
        <h1>Todolist</h1>

        <form onSubmit={handleAdd}>
          <input
            type="text"
            placeholder="Enter Name"
            value={userData.userName}
            onChange={(e) =>
              setUserData({ ...userData, userName: e.target.value })
            }
          />
          <input
            type="text"
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
          <input
            type="text"
            value={userData.password}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />
          <button type="submit">Add</button>
        </form>
      </div>
      <div>
        {todoData.map((ele, index) => (
          <div key={index}>
            <h1>{ele.userName}</h1>
            <h2>{ele.email}</h2>
            <h3>{ele.password}</h3>
            <button onClick={() => handleDelete(index)}>Delete</button>
            <button onClick={() => handleEdit(index)}>Edit</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Todolist;
