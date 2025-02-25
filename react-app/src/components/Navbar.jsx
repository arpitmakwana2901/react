import React from 'react'

const Navbar = () => {
  return (
    <nav style={{height:"75px",width:"100%",backgroundColor:"red",color:"black",position:"fixed",display:"flex",alignItems:"center",justifyContent:'space-around',textAlign:"center",top:"0"}}>
      <h1>CryptoM5</h1>
      <ul style={{display:"flex", listStyle:"none",gap:"2rem",justifyContent:"center",textAlign:"center"}}>
        <li style={{}}><a href="" style={{textDecoration:"none",color:"black",textAlign:"center"}}>Home</a></li>
        <li><a href="" style={{textDecoration:"none",color:"black",textAlign:"center"}}>About</a></li>
        <li><a href="" style={{textDecoration:"none",color:"black"}}>Features</a></li>
        <li><a href="" style={{textDecoration:"none",color:"black"}}>Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar