import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo and Title */}
        <div className="flex items-center gap-2">
          <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7h18M3 12h18M3 17h18"></path>
          </svg>
          <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:max-w-sm">
          <input
            type="text"
            placeholder="Search..."
            className="w-full py-2 pl-4 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"
          />
          <div className="absolute inset-y-0 right-3 flex items-center text-gray-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 text-sm text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition">
            New Item
          </button>
          <button className="px-4 py-2 text-sm border border-gray-300 hover:bg-gray-100 rounded-lg transition text-gray-700">
            Settings
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
