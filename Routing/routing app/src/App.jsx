import React from 'react'
import Registration from './components/Registration'
import Login from './components/Login'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'

const App = () => {

  return (
    <>
    <nav className='flex justify-evenly text-center justify-center  h-75 w-100% '>
        <ul>
          <Link to={"/"}>Home</Link>
        </ul>
        <ul>
          <Link to={"/login"}>Login</Link>
        </ul>
        <ul>
          <Link to={"/registration"}>Registration</Link>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App