import React from 'react';
import im3 from "./components/image/im12.jpg";
import im2 from "./components/image/im11.jpg";
import im1 from "./components/image/im10.png";
import v1 from "./components/image/v1.mp4";
import Footer from './Footer';

import Axios from 'axios';

const Workouts = () => {

    const enrollbeginer =()=>{

        Axios.post("http://localhost:8001/workouts/beginner",{

		  },{headers:{
			'Content-Type': 'application/json',
		 }} ).then((response) =>{
			if(!response.data.error){
				alert(response.data);
				
				
			}else{
				console.log("Error!");
			}
			    
			}).catch((error)=>{
				console.log("The response:",error);
				//alert(error);				
				//alert(error.response.data);
			});
 
    };

    const enrollintermediate =()=>{

        Axios.post("http://localhost:8001/workouts/intermediate",{

		  },{headers:{
			'Content-Type': 'application/json',
		 }} ).then((response) =>{
			if(!response.data.error){
				alert(response.data);
				
				
			}else{
				console.log("Error!");
			}
			    
			}).catch((error)=>{
				console.log("The response:",error);
				//alert(error);				
				//alert(error.response.data);
			});
 
    };


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
                         <h1 class="display-3">SERIOUSLY FUN FITNESS</h1>
                         <p></p>
                         <p></p>
                         <p class="lead mb-0">Self-motivation is a great but a team to support you is even better.
                          When you work out at World Gym, you’re surrounded by friends and champions who share your 
                          passion, and who raise each other to greatness. At World Gym, you’ll find a positive, 
                          encouraging atmosphere. Train with us, and you’ll not only be part of the team, you’ll be
                           part of the family.
                          </p>
                          <p>                             
                          </p>
                     </div>
                     </div>
                 </div>
         </div>
         </header>   
     
    <section class="details-card">
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <div class="card-content">
                    <div class="card-img">
                        <img src={im1} alt=""/>
                        
                    </div>
                    <div class="card-desc">
                        <h3>Beginner Workouts  Rs.1200/=(Monthly)</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, voluptatum! Dolor quo, perspiciatis
                            voluptas totam</p>
                            <div className="d-flex justify-content-end form-group2">						                        
                                    <button 
                                        className='button10'
                                        onClick={enrollbeginer}>Enroll</button>    
                            </div>
                             
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card-content">
                    <div class="card-img">
                        <img src={im2} alt=""/>
                        
                    </div>
                    <div class="card-desc">
                        <h3>Intermediate Workouts Rs.1500/=(Monthly)</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, voluptatum! Dolor quo, perspiciatis
                            voluptas totam</p>
                            <div className="d-flex justify-content-end form-group2">						                        
                                    <button 
                                        className='button10'
                                        >Enroll</button>    
                            </div>                           
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card-content">
                    <div class="card-img">
                        <img src={im3} alt=""/>
                        
                    </div>
                    <div class="card-desc">
                        <h3>Advanced Workouts  Rs.2000/=(Monthly)</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, voluptatum! Dolor quo, perspiciatis
                            voluptas totam</p>
                            <div className="d-flex justify-content-end form-group2">						                        
                                    <button 
                                        className='button10'
                                        >Enroll</button>    
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

export default Workouts;
