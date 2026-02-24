import React from "react";

const ProductCard = ({ title, price, description, image, category }) => {
  return (
    <div>
      <img src={image} alt="" />
      <p>{title}</p>
      <p>{price}</p>
      <p>{description}</p>
      <p>{category}</p>
    </div>
  );
};

export default ProductCard;
