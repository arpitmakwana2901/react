import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showData } from '../redux/features/productSlice';
import axios from 'axios';

const ProductPage = () => {

    const [page,setPage]= useState(1);
    const[maxLength,setLength] = useState([]);

  const dispatch = useDispatch();
  const product = useSelector((state) => state.data.value);

  useEffect(() => {
    axios.get("http://localhost:3003/pro")
      .then((res) => {
        dispatch(showData(page));
        setLength(res.data.length);
        console.log(res.data.length);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, [dispatch]);

  const handleRemove = (id) => {
    axios.delete(`http://localhost:3003/pro/${id}`)
      .then(() => {
        // Refetch products after deletion
        axios.get("http://localhost:3003/pro")
          .then((res) => dispatch(showData(res.data)))
          .catch((err) => console.error("Error refetching products:", err));
      })
      .catch((err) => console.error("Error deleting product:", err));
  };

  const handleEdit = (product) => {
    // Placeholder for edit functionality (e.g., open a modal or navigate to edit page)
    alert(`Editing product: ${product.name}`);
    // You can implement a modal or redirect to an edit form here
  };

  return (
<>
<div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-10">
          Product Catalog
        </h1>
        
        {product?.length === 0 ? (
          <div className="text-center text-gray-500">Loading products...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {product &&product?.map((e, id) => (
              <div
                key={e.id || id}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="relative">
                  <img
                    src={e.url}
                    alt={e.name}
                    className="w-full h-48 object-cover"
                  />
                  <span className="absolute top-2 left-2 bg-indigo-600 text-white text-xs font-semibold px-2 py-1 rounded">
                    {e.category}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 truncate">
                    {e.name}
                  </h3>
                  <p className="text-gray-600 mt-1 text-sm">
                    {e.description?.slice(0, 60) || "Premium quality product"}...
                  </p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-xl font-bold text-indigo-600">
                      ${e.price}
                    </span>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEdit(e)}
                        className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition duration-200 text-sm"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleRemove(e.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition duration-200 text-sm"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>

    <div className="flex justify-end mt-6 mb-[50px] pr-4">
  <div className="flex items-center space-x-3 text-sm">
  <button disabled={page===1} onClick={()=>{setPage-1}} className="px-4 py-1.5 bg-indigo-500 text-white text-sm font-medium rounded-lg hover:bg-indigo-600 shadow hover:shadow-md transition duration-300">
            Prev
          </button>

    <span className="text-gray-600 font-medium">
      Page <span className="text-indigo-600 font-semibold">{page}</span> of <span className="text-indigo-600 font-semibold">{Math.ceil(maxLength/4)}</span>
    </span>

    <button disabled={page === Math.ceil(maxLength/4)} onClick={()=>{setPage+1}} className="px-4 py-1.5 bg-indigo-500 text-white text-sm font-medium rounded-lg hover:bg-indigo-600 shadow hover:shadow-md transition duration-300">
            Next
          </button>
  </div>            
</div>
</>


  );
};

export default ProductPage;