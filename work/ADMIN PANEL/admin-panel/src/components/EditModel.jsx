import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { closeEditmodal } from "../redux/features/editSlice";
import { updateData } from "../redux/features/productSlice";

const EditModal = () => {
  const id = useSelector((state) => state.edit.id);
  const dispatch = useDispatch();

  const [newProduct, setNewProduct] = useState({
    name: "",
    url: "",
    category: "",
    price: "",
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/product/${id}`);
        setNewProduct({
          id: res.data.id,
          name: res.data.name,
          url: res.data.url,
          category: res.data.category,
          price: res.data.price,
        });
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    if (id) fetchProduct();
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (
      newProduct.name === "" ||
      newProduct.url === "" ||
      newProduct.category === "" ||
      newProduct.price === ""
    ) {
      alert("Please fill in all fields");
      return;
    }

    dispatch(updateData(newProduct));
    dispatch(closeEditmodal());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-60 backdrop-blur-sm">
      <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-lg transform transition-all">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-t-xl p-4 flex items-center justify-between">
          <h3 className="text-lg font-bold text-white">Edit Product</h3>
          <button
            onClick={() => dispatch(closeEditmodal())}
            className="text-white hover:bg-white/20 rounded-full p-1 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          <div className="space-y-4">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={newProduct.name}
                onChange={handleChange}
                className="mt-1 w-full p-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                required
              />
            </div>

            {/* Price */}
            <div>
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Price
              </label>
              <input
                type="number"
                name="price"
                id="price"
                value={newProduct.price}
                onChange={handleChange}
                className="mt-1 w-full p-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                required
              />
            </div>

            {/* Category */}
            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Category
              </label>
              <input
                type="text"
                name="category"
                id="category"
                value={newProduct.category}
                onChange={handleChange}
                className="mt-1 w-full p-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                required
              />
            </div>

            {/* Image URL */}
            <div>
              <label
                htmlFor="url"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Image URL
              </label>
              <textarea
                name="url"
                id="url"
                rows="2"
                value={newProduct.url}
                onChange={handleChange}
                className="mt-1 w-full p-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                required
              ></textarea>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={() => dispatch(closeEditmodal())}
              className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-gray-200 dark:bg-gray-600 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Update Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;