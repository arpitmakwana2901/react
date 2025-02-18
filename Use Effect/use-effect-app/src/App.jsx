import React, { useEffect, useState } from 'react'
import Home from './pages/Home'


const App = () => {
  const[product,setProduct] = useState([]);
  console.log(product); 

  console.log("1");

  // Side Effect
  useEffect(()=>{
    fetch("https://fakestoreapi.com/products").then((responce)=>responce.json()).then((res)=>{
      setProduct(res);
       console.log(product)
    })
    .catch((err)=>{
      console.log(err)
    })
    .finally(()=>{
      console.log("Finally")
    });
  },[]);

  console.log("2");

  return (
  <>
    { <Home/> }
      {product.map((item)=>{  
        return(
          <div>
            <p>{item.id}</p>
            <p style={{}}>{item.category}</p>
            <h3><i>{item.title}</i></h3>
            <p>{item.description}</p>
            <img src={item.image} height={"100px"} />
            <p><strong>Rate:</strong>{item.price}</p>
            <hr />
          </div>
        )
      })}
  </>
  )
}

export default App