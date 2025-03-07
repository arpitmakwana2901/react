import React from 'react'
import Home from './components/Home'
import Create from './components/Create'
import { Route, Routes} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/createProduct' element={<Create/>}/>
      </Routes>

  
    </div>
  )
}

export default App