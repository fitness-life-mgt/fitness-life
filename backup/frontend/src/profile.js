import React from 'react';
import './profile.css';
import pro from './components/image/pro1.jpg';

import { useState } from "react";
import { useEffect } from "react";
import Axios from "axios";
import { Redirect, useHistory } from 'react-router-dom';
import { instanceOf } from 'prop-types';


export const profile = () => {

    const [info, setInfo] = useState([]);


  // get member information
  const getInfo =()=>{
    Axios.get("http://localhost:8001/profile").then((response)=>{
        setInfo(response.data);
        console.log(response.data);
       
    });
};
useEffect(() => {
    getInfo();
  }, []);

    return (
       <>
    <div className="line2"></div>    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" integrity="sha256-h20CPZ0QyXlBuAw7A+KluUYx/3pK+c7lYEpqLTlxjYQ=" crossOrigin="anonymous" />
    <div class="container">
    <div class="team-single">
        <div class="row">
            <div class="col-lg-4 col-md-5 xs-margin-30px-bottom">
                <div class="team-single-img">
                    <img className="im2"src={pro} alt=""/>
                </div>
                
                <div class="bg-light-gray padding-30px-all md-padding-25px-all sm-padding-20px-all text-center">
                    <h4 class="margin-10px-bottom font-size24 md-font-size22 sm-font-size20 font-weight-600 mm">Beginner</h4>  
                    <p> </p>                  
                    <div class="margin-20px-top team-single-icons">
                        <ul class="no-margin">
                            <li><a href="javascript:void(0)"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href="javascript:void(0)"><i class="fab fa-twitter"></i></a></li>
                            <li><a href="javascript:void(0)"><i class="fab fa-google-plus-g"></i></a></li>
                            <li><a href="javascript:void(0)"><i class="fab fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>   
                <div className="line2"></div> 
                <h5 class="font-size24 sm-font-size22 xs-font-size20">Self Progress</h5>


                       <div class="sm-no-margin">
                        <div class="progress-text">
                            <div class="row">
                                <div class="col-7">Positive Behaviors</div>
                                <div class="col-5 text-right">40%</div>
                            </div>
                        </div>
                        <div class="custom-progress progress">
                            <div role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"  class="animated custom-bar progress-bar slideInLeft bg-sky"></div>
                        </div>
                        <div class="progress-text">
                            <div class="row">
                                <div class="col-7">Teamworking Abilities</div>
                                <div class="col-5 text-right">50%</div>
                            </div>
                        </div>
                        <div class="custom-progress progress">
                            <div role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" class="animated custom-bar progress-bar slideInLeft bg-blue"></div>
                        </div>
                        <div class="progress-text">
                            <div class="row">
                                <div class="col-7">Time Management </div>
                                <div class="col-5 text-right">60%</div>
                            </div>
                        </div>
                        <div class="custom-progress progress">
                            <div role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" class="animated custom-bar progress-bar slideInLeft bg-green"></div>
                        </div>
                        <div class="progress-text">
                            <div class="row">
                                <div class="col-7">Excellent Communication</div>
                                <div class="col-5 text-right">80%</div>
                            </div>
                        </div>
                        <div class="custom-progress progress">
                            <div role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"  class="animated custom-bar progress-bar slideInLeft bg-yellow"></div>
                        </div>
                    </div>           
                
            </div>
            

            <div class="col-lg-8 col-md-7">
           
                <div class="team-single-text padding-50px-left sm-no-padding-left">
                <div class="row">
               
                <div class="col-6"> 
               
                            
                            {info.map((val, key) => {
                                        return (
                                            <h4 class="font-size38 sm-font-size32 xs-font-size30">{val.firstName}  {val.lastName} </h4>                                        
                                        );
                                        })} 
                            
                         
                               
                </div>
                <div class="col-3">  <div className="d-flex justify-content-end form-group2">						                        
                         <a class="button1" role="button" href="/updateprofile">Update profile</a>      
  					</div>
                    </div>     
                    <div class="col-3">   
                     <a class="button1" role="button" href="/Login">Log Out</a>                                                        
                     </div>                 
                    </div>
                    <p> </p>
                
                    <p> </p>
                    <div className="line2"></div> 
                    <div class="contact-info-section margin-40px-tb">
                        <ul class="list-style9 no-margin">
                            <li>
                            <div className="line2"></div> 
                                <div class="row">
                                    <div class="col-md-5 col-5">                                       
                                        <strong class="margin-10px-left text-blue">First Name:</strong>
                                    </div>
                                    <div class="col-md-7 col-7">
                                        
                                    {info.map((val, key) => {
                                        return (
                                            <p className="p3">{val.firstName} </p>                                           
                                        );
                                        })}                                       
                                                                            
                                    </div>
                                </div>

                            </li>
                            <li>

                                <div class="row">
                                    <div class="col-md-5 col-5">
                                      
                                        <strong class="margin-10px-left text-blue">Last Name:</strong>
                                    </div>
                                    <div class="col-md-7 col-7">
                                    {info.map((val, key) => {
                                        return (
                                            <p className="p3">{val.lastName} </p>                                           
                                        );
                                        })}    
                                        </div>
                                </div>

                            </li>
                            <li>

                                <div class="row">
                                    <div class="col-md-5 col-5">
                                       
                                        <strong class="margin-10px-left text-blue">Email:</strong>
                                    </div>
                                    <div class="col-md-7 col-7">
                                        {info.map((val, key) => {
                                        return (
                                            <p className="p3">{val.email} </p>                                           
                                        );
                                        })}                                         
                                        
                                    </div>
                                </div>

                            </li>
                            <li>

                                <div class="row">
                                    <div class="col-md-5 col-5">
                                       
                                        <strong class="margin-10px-left text-blue">Telephone:</strong>
                                    </div>
                                    <div class="col-md-7 col-7">
                                    {info.map((val, key) => {
                                        return (
                                            <p className="p3">{val.telephone}</p>                                           
                                        );
                                        })}  
                                    </div>
                                </div>

                            </li>
                            <li>

                                <div class="row">
                                    <div class="col-md-5 col-5">
                                       
                                        <strong class="margin-10px-left xs-margin-four-left text-blue">Address:</strong>
                                    </div>
                                    <div class="col-md-7 col-7">
                                    {info.map((val, key) => {
                                        return (
                                            <p className="p3">{val.address}</p>                                           
                                        );
                                        })}  
                                    </div>
                                </div>

                            </li>
                            <li>
                                <div class="row">
                                    <div class="col-md-5 col-5">
                                       
                                        <strong class="margin-10px-left xs-margin-four-left text-blue">Age:</strong>
                                    </div>
                                    <div class="col-md-7 col-7">
                                    {info.map((val, key) => {
                                        return (
                                            <p className="p3">{val.age } Years</p>                                           
                                        );
                                        })}  
                                    </div>
                                </div>
                            </li>


                            <li>
                                <div class="row">
                                    <div class="col-md-5 col-5">
                                        
                                        <strong class="margin-10px-left xs-margin-four-left text-blue">Height(Cm):</strong>
                                    </div>
                                    <div class="col-md-7 col-7">
                                    {info.map((val, key) => {
                                        return (
                                            <p className="p3">{val.height} Cm</p>                                           
                                        );
                                        })}  
                                    </div>
                                </div>
                            </li>



                            <li>
                                <div class="row">
                                    <div class="col-md-5 col-5">
                                       
                                        <strong class="margin-10px-left xs-margin-four-left text-blue">Weight(Kg):</strong>
                                    </div>
                                    <div class="col-md-7 col-7">
                                    {info.map((val, key) => {
                                        return (
                                            <p className="p3">{val.weight} Kg</p>                                           
                                        );
                                        })}  
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div class="row">
                                    <div class="col-md-5 col-5">
                                       
                                        <strong class="margin-10px-left xs-margin-four-left text-blue">Member Type:</strong>
                                    </div>
                                    <div class="col-md-7 col-7">
                                        <p className="p3">Virtual Member</p>
                                    </div>
                                </div>
                            </li>
                            </ul>
                            </div>
                    
                    
                </div>
                  
               
            </div>

            <div class="col-md-12">

            </div>
        </div>
    </div>
</div>
<div className="line2"></div> 
       </>
    )
}

export default profile
