import React from 'react';
import Typed from 'react-typed';
import im2 from "./components/image/im2.jpg";
import im3 from "./components/image/im3.jpg";
import im4 from "./components/image/im4.jpg";
import im5 from "./components/image/im5.jpg";
import im6 from "./components/image/im6.jpg";
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
                        <p>If you’re serious about improving your fitness, there is no better way to make a
                             commitment than by scheduling a session with our world-class coaching staff.  
                             With rigorous training and certifications, our staff will create a customized 
                             fitness program to help you be your best self.  Our staff will evaluate your body
                              composition, strength, mobility, stamina, speed and nutrition and help you develop 
                              goals to improve each of them.  The first step is just deciding to start.
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
                             <p>Looking to work up a sweat?  Cardio machines are among the most popular amenities at our gyms.
                                   With elliptical machines, treadmills, stationary bikes, stair climbers and more, we have the 
                                   tools to get your heart rate up and keep it there.   Some of our members use cardio to warm up 
                                   and others use it to build endurance. Whatever your fitness goals, we’ll help you step it up on 
                                   top-of-the-line machines.
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
                                <a target="_blank" href={im6}>
                                <img src={im6} alt="Cinque Terre" width="300px" height="400"/>
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
                            <a target="_blank" href={im5}>
                            <img src={im5} alt="Cinque Terre" width="300px" height="400"/>
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
