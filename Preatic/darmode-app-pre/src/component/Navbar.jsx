import React from "react";

const Navbar = ({ darkMode, setDarkMode }) => {
  console.log(darkMode, "navbar");
  return (
    <nav
      style={{
        height: "75px",
        width: "100%",
        backgroundColor: "red",
        display: "flex",
        background: darkMode ? "red" : "black",
        color: darkMode ? "black" : "white",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        justifyContent: "space-around",
      }}
    >
      <img
        src="https://static.vecteezy.com/system/resources/previews/000/388/900/original/modern-company-logo-design-vector.jpg"
        height={"50px"}
        width={"50px"}
        alt=""
      />
      <ul
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          gap: "7rem",
          listStyle: "none",
        }}
      >
        <li style={{ listStyle: "none" }}>
          <a href="" style={{ color: "white", textDecoration: "none" }}>
            Home
          </a>
        </li>
        <li style={{ listStyle: "none" }}>
          <a href="" style={{ color: "white", textDecoration: "none" }}>
            About
          </a>
        </li>
        <li style={{ listStyle: "none" }}>
          <a href="" style={{ color: "white", textDecoration: "none" }}>
            Contact
          </a>
        </li>
        <li style={{ listStyle: "none" }}>
          <a href="" style={{ color: "white", textDecoration: "none" }}>
            Services
          </a>
        </li>
      </ul>

      <button
        onClick={() => {
          setDarkMode(!darkMode);
        }}
        style={{
          height: "50px",
          width: "100px",
          borderRadius: "35px solid blue",
        }}
      >
        Click Me !
      </button>
    </nav>
  );
};

export default Navbar;
