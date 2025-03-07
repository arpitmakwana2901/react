import React from 'react'
import { Link } from 'react-router-dom'
import image from '../assets/crypto_img.jpg'
const Home = () => {
  return (
    <>
   
      {/* <Link to={"/"}><div style={{ width: "15%", fontSize: "20px" }}>Home</div></Link>
      <Link to={"/about"}><div style={{ width: "15%", fontSize: "20px" }}>About</div></Link>
      <Link to={"/contact"}><div style={{ width: "15%", fontSize: "20px" }}>Feature</div></Link> */}
<header>
        <nav>   
            <div className="CryptoM5">CryptoM5</div>
                <div className="nav-links">
                    <ul className="link">
                        <Link to={"/home"}><li>Home</li></Link>
                       <Link to={"/about"}> <li>About</li></Link>
                        <Link to={"/features"}><li>Features</li></Link>
                        <Link to={"/contact"}> <li>Contacts</li></Link>
                    </ul>
                        <Link to={"/showproducts"}><button className="get-s">Get Started</button></Link>
                </div>
        </nav>
    </header>


  <section>
  <div className="main-section1">
    <div className="div-left">
      <p className="crypto-platform">crypto platform</p>
      <h2 className="h2_text">
        Crypto Trade <br /> Agency
      </h2>
      <p className="lorem">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod{" "}
        <br /> tempor incididunt labore dolore magna aliqua.
      </p>
      <button className="get-started">
        <a href="">Get Started</a>
      </button>
    </div>
    <div className="main-img">
      <img src={image} alt="" className="crypto-img" />
    </div>
  </div>
</section>


    </>
  )
}

export default Home