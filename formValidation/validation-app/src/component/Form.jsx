import React, { useState } from "react";

const Form = () => {
  const [userData, setUserData] = useState({
    userName: "",
    email: "",
    password: "",
  });
console.log(userData)
  const [showData, setShowData] = useState({});
  const [errorData, setErrorData] = useState({});

  function handleSubmit(event) {
    event.preventDefault(); 
    if (validation()) {
      setShowData(userData);
      userData({
        userName: "",
        email: "",
        password: "",
      });
    }
  }

  function validation() {
    let valid = true;
    let errorObject = {};
    if (userData.userName.trim() == "") {
      errorObject.userName = "Invalid UserName";
      valid = false;
    }

    if (userData.email.trim() == "") {
      errorObject.email = "Invalid Email";
      valid = false;
    }

    if (userData.password.trim() == "") {
      errorObject.password = "Invalid Password";
      valid = false;
    }
    setErrorData(errorObject);
    return valid;
  }
  return (
    <div
      style={{
        border: "10px solid white",
        borderRadius: "2rem",
        width: "370px",
        height: "450px",
        backgroundColor: "transparent",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <h1 style={{ color: "skygrey" }}>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div style={{}}>
          <div style={{ textAlign: "center" }}>
            <label htmlFor="username">User Name :</label>
            <input
              type="text"
              placeholder="Please Enter UserName"
              id="username"
              style={{
                width: "200px",
                alignItems: "center",
                textAlign: "center",
              }}
              value={userData.userName}
              onKeyDown={(event) =>
                setUserData({ ...userData, userName: event.target.value })
              }
            />

            {errorData.userName && (
              <p style={{ color: "red" }}>{errorData.userName}</p>
            )}
          </div>

          <div style={{ textAlign: "center" }}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Please Enter Email"
              style={{ width: "200px", textAlign: "center" }}
              value={userData.email}
              onChange={(event) =>
                setUserData({ ...userData, email, email: event.target.value })
              }
            />

            {errorData.email && (
              <p style={{ color: "red" }}>{errorData.email}</p>
            )}
          </div>

          <div style={{ textAlign: "center" }}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Please Enter Password"
              style={{ width: "200px", textAlign: "center" }}
              value={userData.password}
              onChange={(event) =>
                setUserData({ ...userData, password: event.target.value })
              }
            />
            {errorData.password && (
              <p style={{ color: "red" }}>{errorData.password}</p>
            )}
          </div>

          <div style={{ marginLeft: "100px" }}>
            <button type="submit" style={{ width: "150px" }}>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
