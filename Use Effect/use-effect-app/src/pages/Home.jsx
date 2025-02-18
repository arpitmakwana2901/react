import React, { useState } from 'react'
import Navbar from '../comonent/Navbar'
import Section from '../comonent/Section'
import Footer from '../comonent/Footer'

const Home = () => {
    const[count,setCount] = useState(0);

    function handleInc(){
        setCount(count+1)
    }
    console.log("rendering...")
    
  return (
    <div>
        <Navbar/>
        <Section count={count}/>
        <button onClick={handleInc}>Increment</button>
        <button disabled={count===0} onClick={()=>{
            setCount(count-1);
        }}>Decrement</button>
        <Footer/>
    </div>
  )
}

export default Home