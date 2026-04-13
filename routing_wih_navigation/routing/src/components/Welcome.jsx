import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <>
           <div>
           <section className="bg-white-600 text-black py-20">
  <div className="max-w-6xl mx-auto text-center px-6">
    <h1 className="text-5xl font-bold">Welcome to Our Website</h1>
    <p className="mt-4 text-lg">
      Building modern, fast, and responsive websites with Tailwind CSS.
    </p>

    <Link to="/home">
      <button className="mt-6 bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-200 transition">
        Get Started
      </button>
    </Link>
  </div>
</section>

      </div>
    </>
  );
};

export default Welcome;
