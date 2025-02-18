import React from 'react'

const Nav = () => {
  return (
    <nav style={{height:"75px",width:"100%",backgroundColor:"blue",color:"white"}}>
      <h1>Zudio</h1>
      <ul style={{display:"flex", listStyle:"none",justifyContent:"space-evenly", }}>
        <li><a href="" style={{textDecoration:"none",color:"white"}}>Home</a></li>
        <li><a href="" style={{textDecoration:"none",color:"white"}}>About</a></li>
        <li><a href="" style={{textDecoration:"none",color:"white"}}>Services</a></li>
        <li><a href="" style={{textDecoration:"none",color:"white"}}>Contact</a></li>
      </ul>
    </nav>
  )
}

export default Nav