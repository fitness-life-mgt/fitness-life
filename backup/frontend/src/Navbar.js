import React from 'react';
import logo from './components/image/logo.JPG';
/*react font awesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg  ">
            <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo..."/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} style={{color:"#F9AB55"}}/>
            </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">Home <span className="sr-only"></span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/About">About<span className="sr-only"></span>                  
                  </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Workouts">Workout plans</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/SportsWears">shop</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Contact">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Login">Sign- in</a>
              </li>

              <li className="navbtn">
              <a class="button1" role="button" href="/Signup">Become a Member
              </a>
              </li>

              <li className="navbtn">
              <a className="nav-link"  href="/Cart"><i class="fas fa-shopping-cart fa-2x"></i></a>
              </li>
              
              <li className="navbtn">
              <a className="nav-link"  href="/profile"><i class="fas fa-user-circle fa-2x" ></i></a>
              </li>
              
            </ul>
          
          </div>
    </nav>
        </>
    );
}

export default Navbar;
