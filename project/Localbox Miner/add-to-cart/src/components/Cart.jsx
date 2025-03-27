import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cart, removeFromCart, buyNow }) => {
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="max-w-2xl mx-auto p-4 mt-20">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-light tracking-wide">Your Cart</h1>
        <span className="text-sm text-gray-500">{cart.length} {cart.length === 1 ? 'item' : 'items'}</span>
      </div>

      {cart.length === 0 ? (
        <div className="text-center py-16">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-700 mb-2">Your cart is empty</h3>
          <p className="text-gray-500 mb-6">Looks like you haven't added anything to your cart yet</p>
          <Link
            to="/"
            className="inline-block px-8 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors text-sm font-medium"
          >
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="w-16 h-16 bg-gray-100 rounded-md overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 text-sm">${item.price.toFixed(2)}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item)}
                  className="text-gray-400 hover:text-red-500 transition-colors"
                  aria-label="Remove item"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-200 pt-6">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium">${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="text-gray-600">Shipping</span>
              <span className="font-medium">Free</span>
            </div>
            <div className="flex justify-between text-lg font-medium py-4 border-t border-gray-200">
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>

            <div className="flex flex-col space-y-3 pt-4">
              <button
                onClick={buyNow}
                
                className="w-full py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors font-medium"
              >
                Checkout
              </button>
              <Link
                to="/"
                className="w-full py-2 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 transition-colors text-center text-sm font-medium"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;