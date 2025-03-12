import React from 'react'
import { Link } from 'react-router-dom'
import image from '../assets/crypto_img.jpg'
import instragram from '../assets/instragram.jpg'
import facebook from '../assets/Facebook.png'
import twitter from '../assets/twitter.png'
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

<footer className="bg-gray-800 text-white py-6 h-12 fixed bottom-0 w-full flex justify-evenly items-center text-center">
  <div className="max-w-7xl mx-auto px-4 w-full flex justify-between items-center">
    <div className="crypto-m5-footer">
      <p className="text-xl font-semibold">Crypto M5</p>
    </div>
    <div className="copyright-footer">
      <p className="text-sm">© Copyright 2025 Mobirise</p>
    </div>
    <div className="icon-footer flex space-x-4  gap-4">
      <img className="footer-instagram w-6 h-6" src={instragram} alt="Instagram" />
      <img className="footer-facebook w-6 h-6" src={facebook} alt="Facebook" />
      <img className="footer-twitter w-6 h-6" src={twitter} alt="Twitter" />
    </div>
  </div>
</footer>






    </>
  )
}

export default Home