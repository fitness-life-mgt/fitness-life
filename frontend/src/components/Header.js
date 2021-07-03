import React from 'react';
import Typed from 'react-typed';
import im2 from "./image/im2.jpg";
import im3 from "./image/im3.jpg";
import im4 from "./image/im4.jpg";
import { Container,Row,Col,Figure } from 'react-bootstrap';


const Header = () => {
    return (
        <>
       <div className="header-wrapper">
           <div className="main-info">
               <h1>Let's Do This, Together​!</h1>
               <Typed
               className ="typed-text"
               strings={["Fiteness | gym","workouts | fitnessmotivation","bodybuilding | training","lifestyle | motivation"]}
               typeSpeed ={40}
               backSpeed ={60}
               loop
               />
           </div>
       </div>
       <div className="line"></div>       
       <div className="card1-wrapper">
       <div class="row">
                    <div class="col-md-auto">
                            <div class="b1">
                                    <img src ={im2} alt="Paris" className="imclz" />  
                            </div>
                    </div>
                    <div class="col col-lg-2">
                    <div class="text-block">
                        <h2>Get Started with FitnessLife!</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <button class="button1 " type="button">Join Us Now!</button>

                    </div>
                    </div>                   
           </div>                                      
        </div>
        <div className="line"></div>    
        <div className="card2-wrapper">
                <div class="row">
                    <div class="col col-lg-2">
                        <div class="text-block2">
                            <h2>Workout at home with ease!</h2>
                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                             </p>
                             <button class="button1 " type="button">Join Us Now!</button>

                        </div>
                    </div>  
                    <div class="col-md-auto">
                            <div class="b2">
                                    <img src ={im3} alt="Paris" className="imclz2" />  
                            </div>
                    </div>                 
                </div>                                      
        </div> 
        <div className="line"></div> 
        <div className="card1-wrapper">
            <div class="container">
                <div class="row justify-content-md-center">
                        <div class="col col-lg-4">
                            <div class="sh1">
                                <h2>Shop</h2>
                                <p></p>
                            </div>    
                        </div>
                </div>
                
                <div class="row">
                    <div class="col col-lg-4">
                        <div class="responsive">
                            <div class="gallery">
                                <a target="_blank" href={im2}>
                                <img src={im2} alt="Cinque Terre" width="300px" height="400"/>
                                </a>
                                <div class="desc">
                            <button class="button2 " type="button">Sports Wears</button>
                            </div>
                            </div>
                            </div>
                    </div>
                    <div class="col col-lg-4">  
                    <div class="responsive">
                        <div class="gallery">
                            <a target="_blank" href={im2}>
                            <img src={im2} alt="Cinque Terre" width="300px" height="400"/>
                            </a>
                            <div class="desc">
                            <button class="button2 " type="button">Suppliments</button>
                            </div>
                        </div>
                    </div>
                  </div>
                  <div class="col col-lg-2">
                        <div class="responsive">
                            <div class="gallery">
                                <a target="_blank" href={im2}>
                                <img src={im4} alt="Cinque Terre" width="300px" height="10"/>
                                </a>
                                <div class="desc">
                                    <button class="button2 " type="button">Accessories</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>                         
        </div>
        <div className="line"></div> 


    </>
    )
}

export default Header;
