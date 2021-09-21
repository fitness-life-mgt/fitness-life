import React from 'react';
import Footer from './Footer';

import { useState } from "react";
import { useEffect } from "react";
import Axios from "axios";
import { Redirect, useHistory } from 'react-router-dom';


const Login = () => {

	let history =useHistory();
	
	const [email, setemail] = useState([]);
	const [password, setpassword] = useState([]);
	//const [memberLogError, setmemberLogError] = useState("");
	
	const[loginStatus,setLoginStatus]=useState([]);

	Axios.defaults.withCredentials=true;

	const memberLogged =(e)=>{
		e.preventDefault();
		//console.log(process.env.REACT_APP_BASE_URL);

		Axios.post("https://fitness-life-server.herokuapp.com/login",{

			email:email,
			password:password,

		  },{headers:{
			'Content-Type': 'application/json',
		 }} ).then((response) =>{
			if(!response.data.error){
				alert("Successfully Logged In!")
			}else{
				console.log("Error!");
			}
			    
			}).catch((error)=>{
				console.log("The response:",error);
				//alert(error);
				alert(error.response.data);
			});
		  };

		  //when we refresh the page we need to know we are logged or not 
		  useEffect(()=>{
			  Axios.get("https://fitness-life-server.herokuapp.com/login").then((response)=>{
				  console.log(response);
			  })
		  },[])

    return (
		<>
    <div className="login-wrapper"> 
        <div className="container">      
	    <div class="d-flex justify-content-center h-100">
		<div class="logincard">
            <div class="logincard-header">
                <h3>Sign In</h3>
                    <div class="d-flex justify-content-end social_icon">
                        <span><i class="fab fa-facebook-square"></i></span>
                        <span><i class="fab fa-google-plus-square"></i></span>
                        <span><i class="fab fa-twitter-square"></i></span>
                     </div>
            </div>
			<div class="logincard-body">
				<form onSubmit={(e)=>{memberLogged(e)}} method ="POST">
					<div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fas fa-user"></i></span>
						</div>
						<input type="email" 
						name ="email"
						className="form-control" 
						placeholder="Enter Email"
						required
						onChange={(e)=>{setemail(e.target.value);}}/>
						
					</div>
					<p></p>
					<div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fas fa-key"></i></span>
						</div>
						<input 
						type="password" 
						className="form-control" 
						placeholder="Enter Password"
						required
						onChange={(e)=>{setpassword(e.target.value);}}
						/>

					</div>
					<p></p>
					<div class="row align-items-center remember">
						<input type="checkbox"/>Remember Me
					</div>
					<p></p>
					<div class="d-flex justify-content-end form-group2">
						<input 
						type="submit" 
						value="Login" 
						class="button2"/>
					</div>
				</form>

			</div>
			<div class="logincard-footer">
				<div class="d-flex justify-content-center links">
					Don't have an account?<a href="/Signup">Sign Up</a>
				</div>
				<div class="d-flex justify-content-center">
					<a href="#">Forgot your password?</a>
				</div>
			</div>
		</div>
	</div> 
</div>
    </div>
	
	</>
    )
}

export default Login
