import React, { useState } from 'react'
import ProductCard from './ProductCard'

const ProductCon = () => {
   const [product, setProduct] = useState([])
   
function handleFun(){
  setProduct([
    {
      name:"arpit",
      email:"arpit35@gmail.com",
      password:"45"
    },
    {
      name:"arpit",
      email:"arpit35@gmail.com",
      password:"45"
    },
    {
      name:"arpit",
      email:"arpit35@gmail.com",
      password:"45"
    }
  ])
  
}
  return (
    <>
      <div>
        <button onClick={handleFun}>Click Me !!</button>
        {
          product.map((element,index)=>{
            return(
             <ProductCard
             key={index}
              name={element.name}
              email={element.email}
              password={element.password}
             />
            )
          })
        }
      </div>
    </>
  );
}

export default ProductCon;
