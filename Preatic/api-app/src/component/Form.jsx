import React, { useState } from "react";

const Form = () => {
  const [userData, setUserData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  console.log(userData)


  return (
    <div>
      <h1>Registration Form</h1>
      <form action="" style={{ display: "flex" }}>
        <label htmlFor="userName">User Name:</label>
        <input
          type="text"
          id="userName"
          placeholder="Enter Your Name"
          value={userData.userName}
          onChange={(event) =>
            setUserData({ ...userData, userName: event.target.value })
          }
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          placeholder="Enter Your Email"
          value={userData.email}
          onChange={(event) =>
            setUserData({ ...userData, email: event.target.value })
          }
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Enter Your Password"
          value={userData.password}
          onChange={(event) =>  
            setUserData({ ...userData, password: event.target.value })
          }
        />
      </form>
    </div>
  );
};

export default Form;
