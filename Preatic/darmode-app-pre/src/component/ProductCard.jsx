import React from "react";

const ProductCard = ({ title, price, image, category }) => {
  return (
    <>
      <div>
        <h1>{title}</h1>
        <p>{price}</p>
        <img src={image} alt="" height={"200px"} width={"200px"} />
        <p>{category}</p>
      </div>
    </>
  );
};

export default ProductCard;
