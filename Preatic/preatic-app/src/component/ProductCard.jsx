import React from 'react'

const ProductCard = ({category,title,description,id,image,price}) => {
  return (
    <div>
        <img src={image} alt="" width={"100px"} />
        <p>{category}</p>
        <p>Price:{price}</p>
        <p>{title}</p>
        <p>{description}</p>
        <p>{id}</p>
    </div>  
  )
}

export default ProductCard