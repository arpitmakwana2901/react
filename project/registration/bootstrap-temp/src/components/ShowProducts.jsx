import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ShowProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-purple-50 to-teal-50 py-16 px-8">
      <h1 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-teal-600 mb-16 tracking-wide animate-fade-in-down">
        Discover Our Exquisite Collection
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {products.map((item) => (
          <div 
            key={item.id} 
            className="relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-3 hover:scale-105 border border-rose-100 hover:border-teal-200 overflow-hidden"
          >
            {/* Decorative corner ribbon */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-rose-500 to-teal-500 rounded-bl-full transform rotate-45 translate-x-8 -translate-y-8">
              <span className="absolute text-white text-xs font-bold top-2 right-2">#{item.id}</span>
            </div>
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-48 object-contain mb-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-110" 
            />
            <p className="text-xs text-teal-600 font-semibold uppercase tracking-widest mb-2">
              {item.category}
            </p>
            <h3 className="text-xl font-bold text-gray-900 line-clamp-1 hover:text-rose-600 transition-colors duration-300">
              {item.title}
            </h3>
            <p className="text-sm text-gray-500 mt-2 line-clamp-2 italic">
              {item.description}
            </p>
            <p className="text-2xl font-extrabold text-teal-600 mt-4 bg-gradient-to-r from-rose-500 to-teal-500 bg-clip-text text-transparent">
              ${item.price}
            </p>
            <button className="w-full mt-6 px-6 py-2 bg-gradient-to-r from-rose-600 to-teal-600 text-white rounded-full font-semibold tracking-wide shadow-md hover:from-rose-700 hover:to-teal-700 focus:outline-none focus:ring-4 focus:ring-rose-300 focus:ring-opacity-50 transition-all duration-300 transform hover:scale-105">
              Explore Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowProducts;