import React from 'react';
import v1 from "./components/image/v1.mp4";
import  Footer from './Footer';


const About = () => {
    return (
        <>
       <header>
       <div>
             <div class="overlay"></div>
                <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                    <source src={v1} type="video/mp4"/>
                </video>
                <div class="container h-100">
                    <div class="d-flex h-100 text-center align-items-center">
                    <div class="w-100 text-white">
                        <h1 class="display-3">YOU WANT IT. WE’VE GOT IT.</h1>
                        <p></p>
                        <p class="lead mb-0">Every World Gym has broad selection of strength machines to help you get stronger. 
                         With selectorized strength machines, you can target individual areas and muscle groups and attack them 
                         from different angles.  We work with the best manufacturers in the world to make sure you have the best 
                         equipment possible to help you succeed.  Whether you want to get big, get lean or get strong, we have the 
                         options for you.What started out as a single gym filled with homemade equipment has grown into a global 
                         brand on the cutting edge of fitness. 
                         </p>
                         <p>                             
                         </p>
                    </div>
                    </div>
                </div>
        </div>
        </header>       
     <Footer/>   
</>
    )
}

export default About;
