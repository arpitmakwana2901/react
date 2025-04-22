import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUser, getUsers } from '../features/userDetailSlice';

const Create = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [gender, setGender] = useState('Male');

  const dispatch = useDispatch();

  // ✅ Correctly select data from Redux store
  const { users, loading, error } = useSelector((state) => state.app);

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = { name, email, password };
    dispatch(createUser(post)).then(() => dispatch(getUsers()));
    setName('');
    setBody('');
    setAuthor('');
    setGender('Male');
  };

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-50 rounded-xl shadow-md">
    <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Create a New User</h2>
    
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-sm">
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name:</label>
        <input 
          id="name"
          type="text" 
          required 
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email:</label>
        <input
          id="email"
          type="email"
          required 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    
      <div className="mb-4">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password:</label>
        <input 
          id="password"
          type="password" 
          required 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    
      {/* <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Gender:</label>
        <div className="flex space-x-4">
          <label className="inline-flex items-center">
            <input 
              type="radio" 
              value="Male" 
              checked={gender === 'Male'} 
              onChange={(e) => setGender(e.target.value)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500"
            />
            <span className="ml-2 text-gray-700">Male</span>
          </label>
          <label className="inline-flex items-center">
            <input 
              type="radio" 
              value="Female" 
              checked={gender === 'Female'} 
              onChange={(e) => setGender(e.target.value)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500"
            />
            <span className="ml-2 text-gray-700">Female</span>
          </label>
        </div>
      </div> */}
    
      <button 
        type="submit" 
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Submit
      </button>
    </form>
    
    <hr className="my-6 border-gray-200" />
    
    <h2 className="text-xl font-bold text-gray-800 mb-4">User List</h2>
    {loading && <p className="text-gray-500">Loading...</p>}
    {error && <p className="text-red-500">{error}</p>}
    
    <ul className="space-y-2">
      {users.map((user, index) => (
        <li key={index} className="bg-white p-3 rounded-lg shadow-sm border border-gray-100">
          <strong className="text-gray-800">{user.name}</strong> 
          <span className="text-gray-600"> - {user.email} - {user.password} - </span>
          {/* <span className={`px-2 py-1 text-xs rounded-full ${user.gender === 'Male' ? 'bg-blue-100 text-blue-800' : 'bg-pink-100 text-pink-800'}`}>
            {user.gender}
          </span> */}
        </li>
      ))}
    </ul>
  </div>
  
  );
};

export default Create;
