import { useState } from "react";

const Todolist = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  function addTask() {
    setTodos([...todos, inputText]);
    console.log(inputText);
    setInputText("");
  }

  function deleteTask(indexTodoDelete) {
    const deletedTodos = todos.filter(
      (todo, index) => index !== indexTodoDelete,
    );
    setTodos(deletedTodos);
  }

  function editTask(indexToEdit) {
    setInputText(todos[indexToEdit]);
    setEditIndex(indexToEdit);
  }

  return (
    <>
      <h1>Todolist App</h1>
      <input
        type="text"
        placeholder="Enter Task"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>

      <ul>
        {todos.map((element, index) => {
          return (
            <li key={index}>
              {element} <button onClick={() => editTask(index)}>Edit</button>
              <button onClick={() => deleteTask(index)}>Delete Task</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Todolist;
