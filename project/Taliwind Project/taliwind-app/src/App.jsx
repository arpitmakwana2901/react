import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

const App = () => {
  const [product, setProduct] = useState([]);
  // const[boolean,setBoolean] = (false);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((res) => {
        setProduct(res);
      })

      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        console.log("Finally");
      });
  }, []);

  return (
    
   <>
    <Navbar/>
   
    <div className="flex mt-[60px]">
      
     
      <div className="grid grid-cols-[repeat(3,1fr)] gap-y-[20px] gap-x-[20px] ">
        {product.map((item) => (
          <div className="mx-auto  max-w-sm items-center gap-x-4 rounded-xl p-6 shadow-lg ">
              <div
            key={item.id}
            className="border-2 rounded-md border-none hover:rounded-lg"
          >
            <p className="text-black-1200  text-3xl">{item.id}</p>
            <p className=" text-1xl text-blue-600 uppercase">{item.category}</p>
            <h3 className="text-1xl text-black font-[600] ">
              {item.title}
            </h3>
            
            <p className="line-clamp-2">{item.description}</p>
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-50 object-contain"
            />
            <p className="text-lg font-semibold text-green-600">
              <strong>Price: </strong>${item.price}
            </p>
          
          </div>
          <button className="w-35 bg-red-100">ADD TO CART</button>
          </div>
          
        ))}
        
      </div>
      
      <div className="w-[300px] h-screen border-1 border-solid fixed right-0 ">
       
      </div>
    </div>

   
   </>
    
  );
};

export default App;
