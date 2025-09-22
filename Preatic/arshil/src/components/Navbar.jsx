import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.name) {
      setUser(storedUser);

      const showUser = storedUser.name
        .split(" ")
        .map((word) => word[0].toUpperCase())
        .join(" ");
      setUserName(showUser);
    }
  }, []);

  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-white shadow-md">
      {/* Left - Logo/Icon */}
      <div className="text-2xl font-bold text-indigo-600">🌐 Logo</div>

      {/* Center - Navigation Links */}
      <ul className="flex space-x-8 text-lg font-medium">
        <li className="cursor-pointer hover:text-indigo-500">Home</li>
        <li className="cursor-pointer hover:text-indigo-500">About</li>
        <li className="cursor-pointer hover:text-indigo-500">Contact</li>
        <li className="cursor-pointer hover:text-indigo-500">Features</li>
      </ul>

      {/* Right - User Info */}
      <div className="flex items-center space-x-3">
        {user ? (
          <>
            <span className="text-gray-700 font-medium">{user.name}</span>
            <div className="w-10 h-10 flex items-center justify-center bg-indigo-500 text-white rounded-full font-bold">
              {userName}
            </div>
          </>
        ) : (
          <span className="text-gray-500">Guest</span>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
