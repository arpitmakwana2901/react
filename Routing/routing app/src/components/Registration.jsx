import React from "react";

const Registration = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-semibold text-center mb-4">Sign Up</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="fname" className="block text-gray-700">First Name:</label>
            <input
              type="text"
              id="fname"
              placeholder="First Name"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label htmlFor="lname" className="block text-gray-700">Last Name:</label>
            <input
              type="text"
              id="lname"
              placeholder="Last Name"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-gray-700">Email Address:</label>
            <input
              type="email"
              id="email"
              placeholder="Enter Email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-gray-700">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Enter Password"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
            >
              CREATE ACCOUNT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
