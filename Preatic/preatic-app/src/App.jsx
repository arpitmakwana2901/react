import React, { useEffect, useState } from 'react'
import ProductCard from './component/ProductCard';

const App = () => {
  const[productData,setProductdata] = useState([]);
  const[count,setCount] = useState(0);

  function incrementBtn(){
    setCount(count +1)
  }

  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then((responce)=>responce.json())
    .then((res)=>{
      setProductdata(res)
      console.log(res)
    }
    )
  },[])
  return (
    <>
      <h1>Product Data</h1>
      <div>
        <h2>{count}</h2>
        <button  onClick={incrementBtn}>Increment</button>
        <button disabled={count === 0} onClick={(()=>{
          setCount(count - 1)
        })}>Decrement</button>
      </div>
      {
        productData.map((product)=>{
          return(
              <ProductCard
                key={product.id}
                title={product.title}
                category={product.category}
                price={product.price}
                description={product.description}
                image={product.image}
              />
          )
        })
      }
    </>
  )
}

export default App