import React from 'react'
import { useNavigate } from 'react-router-dom'


const Contact = () => {
    const navigate = useNavigate();

    function handleBack(){
        navigate("/home")
    }
  return (
    <>
    <button className="border border-gray-500 w-21   py-2 rounded-lg hover:bg-blue-200 transition duration-300" onClick={handleBack}>
  Back
</button>
<section>
  <div className="main-section-11">
    <div className="main-card-s11">
      <div className="main-card-left">
        <p className="left-text">Hold or Trade Cryptocurrency</p>
        <p className="lorem-left-s11">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod
          tempor incididunt labore dolore magna aliqua.
        </p>
      </div>
      <div className="main-card-right">
        <div className="form">
          <p className="contact-us-s11">Contact Us</p>
          <p className="lorem-right-s11">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed eiusmod
            temp.
          </p>
          <input
            type="text"
            className="your-name-s11"
            placeholder="Your Name"
          />
          <input type="email" className="email-s11" placeholder="Email" />
          <textarea
            name="Message"
            className="message-s11"
            placeholder="Message"
            id=""
            defaultValue={""}
          />
          <button className="send-msg-s11">Send Message</button>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Contact