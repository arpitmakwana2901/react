import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const About = () => {
    const navigate = useNavigate();

    function handleBack(){
        navigate("/home")
    }
  return (
    <>
        
        <section>
        <button className="border border-gray-500 w-21   py-2 rounded-lg hover:bg-blue-200 transition duration-300" onClick={handleBack}>
  Back
</button>
        <div className="main-section3">
            
            <div className="about-us">About-Us</div>
            <div className="s3-main-div">
                <div className="left-icon">
                    <p className="s3-walltes">Walltes</p>
                    <p className="s3-trade">Trade</p>
                    <p className="s3-exchange">Exchange</p>
                </div>
        
                <div className="s3-lorem">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique maiores labore sed ullam explicabo tenetur accusamus expedita quibusdam architecto praesentium, voluptatum saepe iusto dolorum officiis perferendis corporis nulla ipsam nostrum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ea incidunt magnam veritatis rerum repudiandae aut quo mollitia atque inventore ut consequuntur, qui nesciunt doloremque nisi. Sequi deleniti assumenda nemo?
                    Lorem ipsum dolor sits amet consectetur adipisicing elit.
                </div>
            </div>
                <div  style={{alignItems:"center",textAlign:"center"}}>
                <Link to={"/learnmore"}><button className="get-s" >Learn More</button></Link>
                </div>
        </div>
    </section>

    

    </>
  )
}

export default About