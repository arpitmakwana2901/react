import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
<>

<header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-blue-500 transform transition duration-300 hover:scale-110"
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
          <span className="text-xl font-semibold text-gray-800 hover:text-blue-500 transition">
            Arpit Makwana
          </span>
        </div>

        <nav className="hidden md:flex space-x-6">
          <ul className="flex space-x-6">
            {["Home", "About", "Services", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="text-gray-600 hover:text-blue-500 transition duration-300"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex space-x-4">
          <Link to={"/signup"}>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Sign Up
            </button>
          </Link>

          <Link to={"/signin"}>
            <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition">
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </header>
</>
    
  );
};

export default Navbar;
