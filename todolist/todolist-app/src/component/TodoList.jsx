import React, { useState } from 'react'

const TodoList = () => {
    const[inputText,setInputText] = useState("");
    const[todolist,setTodoList]= useState([]);
    const[boolean,setBoolean] = useState(false);
    const[editIndex,setEdit] = useState("");
    function handleAdd(){
        setTodoList([...todolist, inputText]);
        setInputText("")
    }
 
    function handleDelete(deleArray){
        let deleteData = todolist.map((item,i)=>i!=deleArray);
        setTodoList(deleteData);
    }
    
    function handleEdit(index){
        setBoolean(true);
        setInputText(todolist[index]);
        setEdit(index)
    }

    function handleUpdate() {
        let updateTodolist = todolist.map((todo, i) =>
          i == editIndex ? inputText : todo
        );
        setTodoList(updateTodolist);
        setBoolean(false);
        setInputText("")
      }
    console.log(todolist);

  return (
    <>
        <h1>Todolist</h1>
        <input type="text" placeholder='Enter Task' value={inputText} onChange={((event)=>setInputText(event.target.value))} />

        {boolean ? (
        <button onClick={handleUpdate}>Update</button>
      ) : (
        <button onClick={handleAdd}>Add</button>
      )}

       <div>
        {
            todolist.map((item,index)=>(
                <div key={index}>
                    <h3>{item}</h3>
                   <button onClick={(()=>{handleDelete(index)})}>Delete</button>
                   <button onClick={(()=>{handleEdit(index)})}>Edit</button>
                </div>
            ))
        }
       </div>
    </>
  )
}

export default TodoList