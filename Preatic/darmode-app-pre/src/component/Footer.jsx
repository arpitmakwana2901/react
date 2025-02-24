import React from "react";

const Footer = ({ darkMode }) => {
  return (
    <footer
      style={{
        backgroundColor: darkMode ? "orange" : "black",
        color: darkMode ? "white" : "red",
        height: "75px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 20px",
      }}
    >
      <p style={{ color: "white" }}>copyright</p>
    </footer>
  );
};

export default Footer;
