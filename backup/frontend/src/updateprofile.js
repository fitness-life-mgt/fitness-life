import React from 'react';
import './profile.css';
import pro from './components/image/pro1.jpg';

import { useState } from "react";
import { useEffect } from "react";
import Axios from "axios";
import { Redirect, useHistory } from 'react-router-dom';

const updateprofile = () => {

    let history =useHistory();
    
	const [telephone,settelephone] = useState ('')
	const [address,setaddress] = useState ('')
	const [age,setage] = useState ('')
    const [weight,setweight] = useState ('')
    const [height,setheight] = useState ('')
    
    const updatepro =()=>{

       Axios.post("http://localhost:8001/updateprofile",{
           
           telephone:telephone,           
           address:address,
           age:age,
           weight:weight,
           height:height,
       },{headers:{
            'Content-Type': 'application/json',
        }}).then((response) => {
            if(!response.data.error)		
           {
               alert("successfully Updated!");
               history.push("/profile");		
               

           }else{
               console.log("Error!");
           }

       }).catch(error=>{
           alert(error);
       })

    };
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
                
            
             </div>
             
 
             <div class="col-lg-8 col-md-7">
                 <div class="team-single-text padding-50px-left sm-no-padding-left">
                 <div class="row">
                 <div class="col-6"> 
                 
                     <h4 class="font-size38 sm-font-size32 xs-font-size30">Rusiru Wijemanna</h4>
                                
                 </div>
                 
                 <div class="col-3"> 
                     </div>     
                     <div class="col-3">   
                     <a class="button1" role="button" href="/Login">Log Out</a>                                                        
                     </div>                  
                     </div>
                     <p> </p>
                 
                     <p> </p>
                    <form>
                        <div class="contact-info-section margin-40px-tb">
                            <ul class="list-style9 no-margin">
                            
                
                                <li>
    
                                    <div class="row">
                                        <div class="col-md-5 col-5">
                                            
                                            <strong class="margin-10px-left text-blue">Telephone:</strong>
                                        </div>
                                        <div class="col-md-7 col-7">
                                        
                                                <p className="p3">
                                                    <input type="text" 
                                                    name ="telephone"
                                                    className="form-control" 
                                                    placeholder="Update Telephone"
                                                
                                                    onChange={(e)=>{settelephone(e.target.value);}}/>
                                                 </p>                                           
                                        
                                        </div>
                                    </div>
    
                                </li>
                                <li>
    
                                    <div class="row">
                                        <div class="col-md-5 col-5">
                                            
                                            <strong class="margin-10px-left xs-margin-four-left text-blue">Address:</strong>
                                        </div>
                                        <div class="col-md-7 col-7">
                                        
                                                <p className="p3">
                                                    <input type="text" 
                                                    name ="address"
                                                    className="form-control" 
                                                    placeholder="Update Address"
                                                    required
                                                    onChange={(e)=>{setaddress(e.target.value);}}/>
                                                    </p>                                           
                                            
                                        </div>
                                    </div>
    
                                </li>
                                <li>
                                    <div class="row">
                                        <div class="col-md-5 col-5">
                                            
                                            <strong class="margin-10px-left xs-margin-four-left text-blue">Age:</strong>
                                        </div>
                                        <div class="col-md-7 col-7">
                                        
                                                <p className="p3"> 
                                                    <input type="text" 
                                                    name ="age"
                                                    className="form-control" 
                                                    placeholder="Update Age"
                                                   
                                                    onChange={(e)=>{setage(e.target.value);}}/>
                                                </p>                                           
                                            
                                        </div>
                                    </div>
                                </li>
    
    
                                <li>
                                    <div class="row">
                                        <div class="col-md-5 col-5">
                                            
                                            <strong class="margin-10px-left xs-margin-four-left text-blue">Height(Cm):</strong>
                                        </div>
                                        <div class="col-md-7 col-7">
                                        
                                        <p className="p3"> 
                                                    <input type="text" 
                                                    name ="height"
                                                    className="form-control" 
                                                    placeholder="Update Height"
                                                    
                                                    onChange={(e)=>{setheight(e.target.value);}}/>
                                                </p>                                             
                                            
                                        </div>
                                    </div>
                                </li>
    
    
    
                                <li>
                                    <div class="row">
                                        <div class="col-md-5 col-5">
                                            
                                            <strong class="margin-10px-left xs-margin-four-left text-blue">Weight(Kg):</strong>
                                        </div>
                                        <div class="col-md-7 col-7">
                                    
                                        <p className="p3"> 
                                                    <input type="text" 
                                                    name ="weight"
                                                    className="form-control" 
                                                    placeholder="Update Weight"
                                                    
                                                    onChange={(e)=>{setweight(e.target.value);}}/>
                                                </p>                                         
                                        
                                        </div>
                                    </div>
                                </li>
    
                                <li>
                                <div className="d-flex justify-content-end form-group2">						                        
                                    <button 
                                        className='button1'
                                        onClick={updatepro} >Update</button>    
                                    </div>
                                </li>
                                </ul>
                                </div>
                             </form>
                     
                     
                 </div>
             </div>
 
             <div class="col-md-12">
 
             </div>
         </div>
     </div>
 </div>
 <div className="line2"></div> 
        </>
     );
}

export default updateprofile
