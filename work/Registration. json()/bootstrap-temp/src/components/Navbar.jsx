import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
       
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 2L2 12h3v8h6v-6h2v6h6v-8h3L12 2z"
            />
          </svg>
          <span className="text-xl font-semibold text-gray-800">
            Arpit Makwana
          </span>
        </div>

        <nav className="hidden md:flex space-x-6">
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="text-gray-600 hover:text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-600 hover:text-blue-500">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-gray-600 hover:text-blue-500">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-600 hover:text-blue-500">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <Link to="/signup">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Sign Up
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
