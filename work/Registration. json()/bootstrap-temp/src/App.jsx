import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignUp from './pages/Signup'
import Navbar from './components/Navbar'
import SignIn from './pages/SignIn'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
 <Navbar/>
      <Routes>
        {/* <Route path='/' element={<Home/>}/> */}
        <Route path='/signin' element={<SignIn/>}/>
        <Route path="/signup"element={<SignUp/>}/>
      </Routes> 
    </div>
  )
}

export default App