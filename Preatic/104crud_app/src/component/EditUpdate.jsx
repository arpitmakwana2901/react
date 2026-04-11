import React, { useEffect, useState } from "react";

const EditUpdate = () => {
  const [userData, setUserData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const [todoData, setTodoData] = useState(
    JSON.parse(localStorage.getItem("todo")) || [],
  );

  const [boolean, setBoolean] = useState(false);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todoData));
  }, [todoData]);

  function handleSubmit(e) {
    e.preventDefault();
    if (boolean) {
      setTodoData(
        todoData.map((ele, index) => (index == editIndex ? userData : item)),
      );
      setBoolean(false);
    } else {
      setTodoData([...todoData, userData]);
    }
    setUserData({
      userName: "",
      email: "",
      password: "",
    });
  }

  function handleDelete(index) {
    let filterData = todoData.filter((e, i) => i !== index);
    setTodoData(filterData);
  }

  const [editIndex, setEditIndex] = useState("");

  function handleEdit(index) {
    setBoolean(true);
    setUserData(todoData[index]);
    setEditIndex(index);
  }
  return (
    <>
      <div onSubmit={handleSubmit}>
        <h1>TodoData</h1>
        <form action="">
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
          <button type="submit">Add Data</button>
        </form>
      </div>

      <div>
        {todoData.map((ele, index) => (
          <div key={index}>
            <h1>{ele.userName}</h1>
            <p>{ele.email}</p>
            <p>{ele.password}</p>
            <button onClick={() => handleDelete(index)}>Delete</button>
            <button onClick={() => handleEdit(index)}>Edit</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default EditUpdate;
