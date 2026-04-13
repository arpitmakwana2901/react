import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ShowProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((res) => setProducts(res.data))
            .catch((err) => console.error("Error fetching products:", err));
    }, []);

    return (
        <div className="flex mt-10">
            <div className="grid grid-cols-4 gap-5">
                {products.map((item) => (
                    <div key={item.id} className="mx-auto max-w-sm rounded-xl p-6 shadow-lg">
                        <p className="text-3xl">{item.id}</p>
                        <p className="text-blue-600 uppercase">{item.category}</p>
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <p className="line-clamp-2">{item.description}</p>
                        <img src={item.image} alt={item.title} className="w-full h-50 object-contain" />
                        <p className="text-lg font-semibold text-green-600">
                            <strong>Price: </strong>${item.price}
                        </p>
                        <Link to={`/addpro/${item.id}`}>
                            <button className="w-20 border border-gray-500 py-2 rounded-lg hover:bg-blue-200 transition duration-300 bg-red-100">
                                ADD
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShowProducts;
