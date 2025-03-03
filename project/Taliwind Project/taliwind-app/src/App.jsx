import React, { useEffect, useState } from "react";

const App = () => {
  const [product, setProduct] = useState([]);

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
    <div className="">
      <h1 className="text-center text-4xl font-[1000] text-red-500 p-10 ">
        Product List
      </h1>
      <div className="grid grid-cols-4 grid-rows gap-15  border-5 border-solid p-10 ">
        {product.map((item) => (
          <div className="mx-auto  max-w-sm items-center gap-x-4 rounded-xl p-6 shadow-lg ">
              <div
            key={item.id}
            className="border-2 rounded-md border-none hover:rounded-lg"
          >
            <p className="text-black-1200  text-4xl">{item.id}</p>
            <p className=" text-2xl text-blue-600 uppercase">{item.category}</p>
            <h3 className="text-1xl text-black font-[600] ">
              {item.title}
            </h3>
            <p className="line-clamp-4">{item.description}</p>
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-50 object-contain"
            />
            <p className="text-lg font-semibold text-green-600">
              <strong>Price: </strong>${item.price}
            </p>
            {/* <hr className="" /> */}
          </div>
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default App;
