import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const AddPage = () => {
    const [singleData, setSingleData] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((res) => setSingleData(res.data))
            .catch((err) => console.error("Error fetching product:", err));
    }, [id]); 

    return (
        <>
            {singleData && (
                <div>
                    <p>Title: {singleData.title}</p>
                    <img src={singleData.image} alt={singleData.title} className="h-60" />
                    <p>Price: ${singleData.price}</p>
                    <p>Description: {singleData.description.slice(0, 24)}</p>
                    <button>Buy Now</button>
                </div>
            )}
        </>
    );
};

export default AddPage;
