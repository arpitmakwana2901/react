import React from "react";
import ProductCard from "./ProductCard";
import iphone from "../images/iphone.jpg";

const Section = ({ darkMode }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          backgroundColor: "blue",
          height: "500px",
          width: "100%",
          color: "white",
          alignItems: "center",
          backgroundColor: darkMode ? "blue" : "black",
          color: darkMode ? "white" : "white",
        }}
      >
        <ProductCard
          title="Apple iPhone 13"
          price="45000"
          image="https://m.media-amazon.com/images/I/71gm8v4uPBL._SX679_.jpg"
          category="Mobile"
        />

        <ProductCard
          title="Apple iPhone 13"
          price="45000"
          image={iphone}
          category="Mobile"
        />

        <ProductCard
          title="Apple iPhone 13"
          price="45000"
          image={iphone}
          category="Mobile"
        />
      </div>
    </>
  );
};

export default Section;
