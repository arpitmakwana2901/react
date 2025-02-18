import React, { useState } from 'react'

const App = () => {
  const [ product,setProduct] = useState([]);

  setProduct(
                {
                  title: "abibas",
                  price: "120",
                  description: "lorem ipsum dolor sit amet",
                },
    
                {
                  title: "product 2",
                  price: "150",
                  description: "lorem ipsum dolor sit amet",
                },
                {
                  title: "product 3",
                  price: "200",
                  description: "lorem ipsum dolor sit amet",
                },
                {
                  title: "product 4",
                  price: "250",
                  description: "lorem ipsum dolor sit amet",
                },
                {
                  title: "product 5",
                  price: "300",
                  description: "lorem ipsum dolor sit amet",
                }
              );
  return (
    <>
      <div className="main-container">
          {product.map((product,index)=>{
            return(
              <div key={index} className="product-card">
                <h1>{product.title}</h1>
                <p>{product.price}</p>
                <p>{product.description}</p>
                {/* <button onClick={()=>{
                  handleClick(index);
                }}>Click Me</button> */}
                
                <hr />  
                
              </div>
            )
          })}
      </div>
    </>
  )
}

export default App