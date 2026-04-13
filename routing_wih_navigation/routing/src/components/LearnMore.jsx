import React from 'react'
import analysis from '../assets/analysis.jpg'
import marketing from '../assets/marketing.png'
import exchange from '../assets/exchange.png'
import img1 from '../assets/img-1.jpg'
import img2 from '../assets/img-2.jpg'
import img3 from '../assets/img-3.jpg'
import img4 from '../assets/img-4.jpg'
import { useNavigate } from 'react-router-dom'
const LearnMore = () => {
  const navigate = useNavigate();

  function handleBack(){
    navigate(-2)
  }
  return (
    <div>
        <>
        {/* Section 4 */}
  <section>
  <button className="border border-gray-500 w-21   py-2 rounded-lg hover:bg-blue-200 transition duration-300" onClick={handleBack}>
  Back
</button>

    <div className="main-section4">
      <div className="our-traders">Our-Traders</div>
      <div className="card-container4">
        <div className="main-img1-div">
          <img src={img1} className="img-1" alt="" />
          <p className="john-smith">John Smith</p>
          <p className="s4-trader">Trader</p>
          <p className="s4-lorem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          {/* <div className="s4-icon1">
            <img src={facebook.png} className="s4-facebook" alt="" />
            <img src="./img/twitter.png" className="s4-twiter" alt="" />
            <img src="./img/instragram.jpg" className="s4-instragram" alt="" />
          </div> */}
        </div>

        <div className="main-img2-div">
          <img src={img2} alt="" className="img-2" />
          <p className="sarah">Sarah Palmer</p>
          <p className="s4-trader">Trader</p>
          <p className="s4-lorem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          {/* <div className="s4-icon1">
            <img src="./img/Facebook.png" className="s4-facebook" alt="" />
            <img src="./img/twitter.png" className="s4-twiter" alt="" />
            <img src="./img/instragram.jpg" className="s4-instragram" alt="" />
          </div> */}
        </div>

        <div className="main-img3-div">
          <img src={img3} alt="" className="img-3" />
          <p className="adam">Adam Swift</p>
          <p className="s4-trader">Trader</p>
          <p className="s4-lorem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          {/* <div className="s4-icon1">
            <img src="./img/Facebook.png" className="s4-facebook" alt="" />
            <img src="./img/twitter.png" className="s4-twiter" alt="" />
            <img src="./img/instragram.jpg" className="s4-instragram" alt="" />
          </div> */}
        </div>

        <div className="main-img4-div">
          <img src={img4} alt="" className="img-4" />
          <p className="helen">Helen Smith</p>
          <p className="s4-trader">Trader</p>
          <p className="s4-lorem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          {/* <div className="s4-icon1">
            <img src="./img/Facebook.png" className="s4-facebook" alt="" />
            <img src="./img/twitter.png" className="s4-twiter" alt="" />
            <img src="./img/instragram.jpg" className="s4-instragram" alt="" />
          </div> */}
        </div>
      </div>
    </div>
  </section>
  {/* Section 5 */}
  <section>
    <div className="main-section5">
      <div className="our-skills">Our Skills</div>
      <div className="card-container-s5">
        <div className="s5-div1">
          <p className="s5-analysis">Analysis</p>
          <img src={analysis} className="analysis-img" alt="" />
        </div>
        <div className="s5-div2">
          <p className="s5-exchange">Exchange</p>
          <img src={exchange} className="exchange-img" alt="" />
        </div>
        <div className="s5-div3">
          <p className="marketing">Marketing</p>
          <img src={marketing} className="marketing-img" alt="" />
        </div>
      </div>
      <div className="card-container-s5-2">
        <div className="s5-div2">
          <p className="s5-exchange">Trade</p>
          <img src={exchange} className="exchange-img" alt="" />
        </div>
        <div className="s5-div3">
          <p className="marketing">Processing</p>
          <img src={marketing} className="marketing-img" alt="" />
        </div>
        <div className="s5-div1">
          <p className="s5-analysis">Margin Trade</p>
          <img src={analysis} className="analysis-img" alt="" />
        </div>
      </div>
    </div>
  </section>
  {/* Section-6 */}
  <section>
    <div className="main-section-6">
      <div className="pricing-plan">Pricing Plan</div>
      <div className="card-container-s6">
        <div className="s6-div1">
          <p className="free">Free</p>
          <p className="lorem-s6">Lorem ipsum dolor</p>
          <p className="text-s6">
            <sub>$</sub>0<sub>$/mo</sub>
          </p>
          <ul className="list-s6">
            <li>Walltes</li>
            <li>Trade</li>
            <li>Exchange</li>
            <li>Processing</li>
            <li>Analysis</li>
          </ul>
          <button className="get-s-s6">Get Started</button>
        </div>
        <div className="s6-div1">
          <p className="free">Free</p>
          <p className="lorem-s6">Lorem ipsum dolor</p>
          <p className="text-s6">
            <sub>$</sub>0<sub>$/mo</sub>
          </p>
          <ul className="list-s6">
            <li>Walltes</li>
            <li>Trade</li>
            <li>Exchange</li>
            <li>Processing</li>
            <li>Analysis</li>
          </ul>
          <button className="get-s-s6">Get Started</button>
        </div>
        <div className="s6-div1">
          <p className="free">Free</p>
          <p className="lorem-s6">Lorem ipsum dolor</p>
          <p className="text-s6">
            <sub>$</sub>0<sub>$/mo</sub>
          </p>
          <ul className="list-s6">
            <li>Walltes</li>
            <li>Trade</li>
            <li>Exchange</li>
            <li>Processing</li>
            <li>Analysis</li>
          </ul>
          <button className="get-s-s6">Get Started</button>
        </div>
      </div>
    </div>

  </section>
</>

    </div>
  )
}

export default LearnMore