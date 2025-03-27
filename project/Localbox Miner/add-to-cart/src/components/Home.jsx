import React from 'react'

const Home = ({ products, handleAdd }) => {

    return (
        <>
            <div className="min-h-screen bg-gray-100 mt-13 py-10">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {products.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-48 object-contain p-4 bg-gray-50"
                                />
                                <div className="p-4">
                                    <h3 className="mt-1 text-lg font-medium text-gray-900">{item.title}</h3>
                                    <p className="mt-2 text-lg font-semibold text-indigo-700">${item.price}</p>
                                    <button
                                        onClick={() => handleAdd(item)}
                                        className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors"
                                    >
                                        Add to Cart
                                    </button>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home