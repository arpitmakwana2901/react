import React, { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";

const App = () => {
  const [productData, setProductData] = useState([]);

  async function fetchData() {
    let responce = await fetch("https://fakestoreapi.com/products");
    let data = await responce.json();
    setProductData(data);
  }

  useEffect(() => {x
    fetchData();
  }, []);

  return (
    <div>
      {productData.map((element, i) => {
        return (
          <ProductCard
            key={i}
            title={element.title}
            price={element.price}
            description={element.description}
            category={element.category}
          />
        );
      })}
    </div>
  );
};

export default App;
