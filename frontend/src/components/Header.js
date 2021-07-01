import React from 'react';
import Typed from 'react-typed';

const Header = () => {
    return (
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

    )
}

export default Header;
