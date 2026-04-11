// import { useEffect, useState } from "react";

// const App = () => {
//   const [userData, setUserData] = useState({
//     userName: "",
//     email: "",
//     password: "",
//   });

//   const [todoData, setTodoData] = useState(
//     JSON.parse(localStorage.getItem("crud")) || [],
//   );

//   useEffect(() => {
//     localStorage.setItem("crud", JSON.stringify(todoData));
//   }, [todoData]);

//   function handleSubmit(e) {
//     e.preventDefault();

//     setTodoData([...todoData, userData]);
//     console.log(userData);
//     setUserData({
//       userName: "",
//       email: "",
//       password: "",
//     });
//   }
//   return (
//     <>
//       <div>
//         <h1>Todolist App</h1>

//         <form action="" onSubmit={handleSubmit}>
//           <input
//             type="text"
//             value={userData.userName}
//             onChange={(event) =>
//               setUserData({ ...userData, userName: event.target.value })
//             }
//           />

//           <input
//             type="text"
//             value={userData.email}
//             onChange={(event) =>
//               setUserData({ ...userData, email: event.target.value })
//             }
//           />

//           <input
//             type="text"
//             value={userData.password}
//             onChange={(event) =>
//               setUserData({ ...userData, password: event.target.value })
//             }
//           />
//           <button type="submit">Add</button>
//         </form>
//       </div>

//       {todoData.map((ele, index) => (
//         <div key={index}>
//           <h1>{ele.userName}</h1>
//           <p>{ele.email}</p>
//           <p>{ele.password}</p>
//         </div>
//       ))}
//     </>
//   );
// };

// export default App;

import React from "react";
import Todolist from "./component/Todolist";
import EditUpdate from "./component/EditUpdate";

const App = () => {
  return (
    <div>
      {/* <Todolist /> */}
      <EditUpdate />
    </div>
  );
};

export default App;
