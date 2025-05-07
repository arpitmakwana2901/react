import React, { useState } from 'react';
import AddModel from './AddModel';
import { search } from '../redux/features/productSlice';
import { useDispatch } from 'react-redux';

const Header = () => {
  const [boolean, setBoolean] = useState(false);
  const dispatch = useDispatch();
  
  function handleAdd() {
    console.log("add")
    setBoolean(true);
  }

  function handleClose(){
    setBoolean(false)
  }

  return (
    <>
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg">
        <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo and Title */}
          <div className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-white/90 rounded-lg flex items-center justify-center shadow-sm transition-all duration-300 group-hover:rotate-12">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <div className="absolute inset-0 border-2 border-white/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight">ADMIN PANEL</h3>
          </div>

          {/* Search Bar */}
          <div className="relative flex-1 max-w-md">
            <input 
            onChange={(e)=>{
              dispatch(search(e.target.value))
            }}
              type="text"
              placeholder="Search..."
              className="w-full py-2 px-4 pr-10 rounded-lg bg-white/20 backdrop-blur-sm text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200"
            />
            <div className="absolute right-3 top-2.5 text-blue-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg flex items-center gap-1.5 transition-all duration-200 border border-white/20 hover:border-white/30">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"></path>
              </svg>
              <span>High-Low</span>
            </button>

            <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg flex items-center gap-1.5 transition-all duration-200 border border-white/20 hover:border-white/30">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"></path>
              </svg>
              <span>Low-High</span>
            </button>

            <button onClick={ handleAdd } className="px-4 py-2 bg-white hover:bg-blue-50 text-blue-600 font-medium rounded-lg flex items-center gap-1.5 transition-all duration-200 shadow-sm hover:shadow-md">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
              <span >Add</span>
            </button>
          </div>
          
        </div>
      </header>
      {boolean && <AddModel onClose={handleClose} />}


    </>


  );
};

export default Header;


