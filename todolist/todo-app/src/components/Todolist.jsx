import React, {useEffect, useState } from 'react'

const Todolist = () => {
  const[inputText,setInputText] = useState("");
  const[todolist,setTodolist] = useState( JSON.parse (localStorage.getItem("todoData")) || []);
  // const[todolist,setTodolist] = useState([])
  const[boolean,setBoolean] = useState(false)
  const[editIndex,setEditIndex] = useState("");
 
  function handleAdd(){
    setTodolist([...todolist,inputText]);
    setInputText("");
  }
 
  function handleDelete(arrayIndex){
   let filterData = todolist.filter((element,i)=> i != arrayIndex);
    setTodolist(filterData)
  }
  function handleEdit(index){
    setBoolean(true);
    setInputText(todolist[index])
    setEditIndex(index)
  }
  // function showCart(){
  //   setBoolean(true)
  // }

  useEffect(()=>{
    localStorage.setItem("todoData",JSON.stringify(todolist))
  })

  console.log(todolist)
  return (

    <div>
      <h1>Todolist</h1>
      <input type="text" placeholder='Enter Task' 
        onChange={((event)=>setInputText(event.target.value))}
        value={inputText}
      />
      <button onClick={handleAdd}>Add</button>
      
      {/* <button onClick={showCart}>Show Cart</button> */}
      {
        todolist.map((element,index)=>(
          <div key={index}>
              <h3>{element}</h3>
              <button onClick={()=>{handleDelete(index)}}>Delete</button>
              <button onClick={()=>{handleEdit(index)}}>Edit</button>
          </div>    
        ))
      }
    </div>
  )
}

export default Todolist