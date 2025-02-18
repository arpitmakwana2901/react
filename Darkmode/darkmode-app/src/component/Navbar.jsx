import React, { useState } from 'react';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <nav style={{
        
        border: "1px solid black",
        
        color: darkMode ? "white" : "black",
        height: "75px",
        width: "100%",
        display: "flex",
        backgroundColor: darkMode ? "purple" : "orange",
        background:"blue",
        justifyContent: "space-around"
      }}>
        <h1>Zudio</h1>
        <ul style={{ display: "flex", alignItems: "center", listStyle: "none", justifyContent: "space-evenly", gap: "5rem" }}>
          <li><a href="" style={{ textDecoration: "none", color: darkMode ? "white" : "black" }}>Home</a></li>
          <li><a href="" style={{ textDecoration: "none", color: darkMode ? "white" : "black" }}>About</a></li>
          <li><a href="" style={{ textDecoration: "none", color: darkMode ? "white" : "black" }}>Services</a></li>
          <li><a href="" style={{ textDecoration: "none", color: darkMode ? "white" : "black" }}>Contact</a></li>
        </ul>
      </nav>

      <button onClick={() => setDarkMode(!darkMode)}>CHANGE MODE</button>
    </>
  );
}

export default Navbar;
