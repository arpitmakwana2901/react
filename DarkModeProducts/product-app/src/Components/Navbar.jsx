import React  from 'react';
import Home from '../Pages/Home';


const Navbar = ({darkMode,setDarkMode}) => {
  console.log(darkMode,"navbar")
 
  return (
    <>
      <nav style={{
         background: darkMode ? "Blue" : "aqua",
         color: darkMode ? "black" : "white",
          border: "1px solid black",
          height: "75px",
          width: "100%",
          display: "flex",
          
          justifyContent: "space-around"
      }}>
          <h1 style={{color:"white"}}>Hello</h1>
          <ul style={{ display: "flex", alignItems: "center", listStyle: "none", justifyContent: "space-evenly", gap: "5rem"}}>
            <li><a href="" style={{ textDecoration: "none" , color:"white"}}>Home</a></li> 
            <li><a href="" style={{ textDecoration: "none" ,color:"white"}}>About</a></li>
            <li><a href="" style={{ textDecoration: "none" , color:"white"}}>Services</a></li>
            <li><a href="" style={{ textDecoration: "none" , color:"white"}}>Contact</a></li>
            <button onClick={()=>{
               setDarkMode(!darkMode)
            }}

            style={{
              // background: darkMode ? "gray" : "lightgray",
              // border: "none",
              // color: darkMode ? "white" : "black",
              // padding: "10px",
              // cursor: "pointer",
              
            }}
            >Click</button>  
          </ul>
          
      </nav>
          
    </>
  );
}

export default Navbar;
