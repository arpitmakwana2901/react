import React from "react";


const ProductCard = ({ darkMode, title, price, desc, image, category }) => {
  console.log(darkMode, "product");
  return (
    <>
      <div
        className={ darkMode ? "dark-mode" : "light-mode"}
        
        style={{
          height: "380px",
          width: "250px",
          border: "1px solid black",
          borderRadius: "10px",
        }}
      >
        <h3>{title}</h3>
        <p>{price}</p>
        <p>{desc}</p>
        <img
          style={{ width: "100%", height: "150px", objectFit: "contain" }}
          src={image}
          alt={title}
        />
        <p>{category}</p>
      </div>
    </>
  );
};

export default ProductCard;
