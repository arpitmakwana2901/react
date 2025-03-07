import React from 'react'
import nicholas from '../assets/nicholas.jpg'
import greer from '../assets/greer.jpg'
import claude from '../assets/claude.jpg'
import gayle from '../assets/gayle.jpg'
import { useNavigate } from 'react-router-dom'

const OurFeatures = () => {
    const navigate = useNavigate();


    function handleBack(){
        navigate("/home")
    }   
  return (
    <>
        <section>
        <button className="border border-gray-600 w-24 -4 px-4 py-2 rounded-lg bg-white text-gray-700 font-semibold shadow-md hover:bg-blue-500 hover:text-white hover:shadow-lg transition duration-300 ease-in-out active:scale-95" onClick={handleBack}>
  Back
</button>


        <div className="main-section-7">
            <div className="top-traders">Top Traders</div>
                <div className="main-container-s7">

                    
                    <div className="main-card-container-s7">
                        <div className="card-container-s7">
                            <div className="div-1-s7">
                                <div className="image-container-s7">
                                    <img src={nicholas}  className="image-s7" alt="" />
                             
                                </div>
                                    <div className="lorem-1-s7">
                                        <p className="nicholas">Nicholas Daniels</p>
                                        <p className="btc-3-5">3.5 btc</p>
                                    </div>
                            </div>

                            <div className="div-1-s7">
                                <div className="image-container-s7">
                                    <img src={nicholas} className="image-s7" alt=""/>
                                    
                                </div>
                                    <div className="lorem-1-s7">
                                        <p className="nicholas">Nicholas Daniels</p>
                                        <p className="btc-3-5">3.5 btc</p>
                                    </div>
                            </div>

                            <div className="div-1-s7">
                                <div className="image-container-s7">
                                    <img src={nicholas}  className="image-s7" alt=""/>
                                    
                                </div>
                                    <div className="lorem-1-s7">
                                        <p className="nicholas">Nicholas Daniels</p>
                                        <p className="btc-3-5">3.5 btc</p>
                                    </div>
                            </div>

                        </div>
                         
                    </div>

                    <div className="main-card-container2-s7">
                        <div className="card-container-s7">
                            <div className="div-1-s7">
                                <div className="image-container-s7">
                                    <img src={claude} className="image-s7" alt=""/>
                                   
                                </div>
                                    <div className="lorem-1-s7">
                                        <p className="nicholas">Nicholas Daniels</p>
                                        <p className="btc-3-5">3.5 btc</p>
                                    </div>
                            </div>

                            <div className="div-1-s7">
                                <div className="image-container-s7">
                                    <img src={claude}  className="image-s7" alt=""/>
                                    
                                </div>
                                    <div className="lorem-1-s7">
                                        <p className="nicholas">Nicholas Daniels</p>
                                        <p className="btc-3-5">3.5 btc</p>
                                    </div>
                            </div>

                            <div className="div-1-s7">
                                <div className="image-container-s7">
                                    <img src={claude} className="image-s7" alt=""/>
                                   
                                </div>
                                    <div className="lorem-1-s7">
                                        <p className="nicholas">Nicholas Daniels</p>
                                        <p className="btc-3-5">3.5 btc</p>
                                    </div>
                            </div>

                        </div>
                         
                    </div>

        
                    <div className="main-card-container3-s7">
                        <div className="card-container-s7">
                            <div className="div-1-s7">
                                <div className="image-container-s7">
                                    <img src={gayle}  className="image-s7" alt=""/>
                                   
                                </div>
                                    <div className="lorem-1-s7">
                                        <p className="nicholas">Nicholas Daniels</p>
                                        <p className="btc-3-5">3.5 btc</p>
                                    </div>
                            </div>

                            <div className="div-1-s7">
                                <div className="image-container-s7">
                                    <img src={gayle}  className="image-s7" alt=""/>
                                   
                                </div>
                                    <div className="lorem-1-s7">
                                        <p className="nicholas">Nicholas Daniels</p>
                                        <p className="btc-3-5">3.5 btc</p>
                                    </div>
                            </div>

                            <div className="div-1-s7">
                                <div className="image-container-s7">
                                    <img src={gayle}  className="image-s7" alt=""/>
                                   
                                </div>
                                    <div className="lorem-1-s7">
                                        <p className="nicholas">Nicholas Daniels</p>
                                        <p className="btc-3-5">3.5 btc</p>
                                    </div>
                            </div>

                        </div>
                         
                    </div>

                    
                    <div className="main-card-container4-s7">
                        <div className="card-container-s7">
                            <div className="div-1-s7">
                                <div className="image-container-s7">
                                    <img src={greer} className="image-s7" alt=""/>
                                    
                                </div>
                                    <div className="lorem-1-s7">
                                        <p className="nicholas">Nicholas Daniels</p>
                                        <p className="btc-3-5">3.5 btc</p>
                                    </div>
                            </div>

                            <div className="div-1-s7">
                                <div className="image-container-s7">
                                    <img src={greer}  className="image-s7" alt=""/>
                                  
                                </div>
                                    <div className="lorem-1-s7">
                                        <p className="nicholas">Nicholas Daniels</p>
                                        <p className="btc-3-5">3.5 btc</p>
                                    </div>
                            </div>

                            <div className="div-1-s7">
                                <div className="image-container-s7">
                                    <img src={greer}  className="image-s7" alt=""/>
                                 
                                </div>
                                    <div className="lorem-1-s7">
                                        <p className="nicholas">Nicholas Daniels</p>
                                        <p className="btc-3-5">3.5 btc</p>
                                    </div>
                            </div>

                        </div>
                         
                    </div>
                </div>
        </div>
      </section>
        
    </>
  )
}

export default OurFeatures