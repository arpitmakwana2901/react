import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="shadow-lg bg-white w-full fixed top-0 z-50"
      style={{
        height: "70px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 5%",
      }}
    >
      <div className="text-3xl font-bold font-sans text-indigo-700">
        Elite Threads
      </div>
      
      <div className="flex items-center gap-8">
        <Link to="/" className="text-lg font-medium text-gray-700 hover:text-indigo-600 transition-colors">
          Home
        </Link>
        <Link to="/about" className="text-lg font-medium text-gray-700 hover:text-indigo-600 transition-colors">
          About
        </Link>
        <Link to="/feature" className="text-lg font-medium text-gray-700 hover:text-indigo-600 transition-colors">
          Feature
        </Link>
        <Link to="/contact" className="text-lg font-medium text-gray-700 hover:text-indigo-600 transition-colors">
          Contact
        </Link>
        
        <Link to="/showCart">
          <button className="bg-indigo-600 rounded-full px-6 py-2 text-white hover:bg-indigo-700 hover:shadow-md transition-all flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Show Cart
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;