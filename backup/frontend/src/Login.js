import React ,{ Fragment }from 'react';
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

		Axios.post("http://localhost:8001/login",{

			email:email,
			password:password,

		  },{headers:{
			'Content-Type': 'application/json',
		 }} ).then((response) =>{
			if(!response.data.error){
				alert("Successfully Logged In!")
				history.push("/profile");
				
			}else{
				console.log("Error!");
			}
			    
			}).catch((error)=>{
				console.log("The response:",error);
				//alert(error);				
				//alert(error.response.data);
			});
		  };

		  //when we refresh the page we need to know we are logged or not 
		  useEffect(()=>{
			  Axios.get("http://localhost:8001/login").then((response)=>{
				  if(response.data.loggedIn == true){
					  setLoginStatus(response.data.member[0].email);
				  }
			  })
		  },[])

    return (
		<>
    <div className="login-wrapper"> 
        <div className="container">      
	    <div className="d-flex justify-content-center h-100">
		<div className="logincard">
            <div className="logincard-header">
                <h3>Sign In</h3>
                    <div className="d-flex justify-content-end social_icon">
                        <span><i className="fab fa-facebook-square"></i></span>
                        <span><i className="fab fa-google-plus-square"></i></span>
                        <span><i className="fab fa-twitter-square"></i></span>
                     </div>
            </div>
			<div className="logincard-body">
				<form onSubmit={(e)=>{memberLogged(e)}} method ="POST">
					<div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><i className="fas fa-user"></i></span>
						</div>
						<input type="email" 
						name ="email"
						className="form-control" 
						placeholder="Enter Email"
						required
						onChange={(e)=>{setemail(e.target.value);}}/>
						
					</div>
					<p></p>
					<div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><i className="fas fa-key"></i></span>
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
					<div className="row align-items-center remember">
						<input type="checkbox"/>Remember Me
					</div>
					<p></p>
					<div className="d-flex justify-content-end form-group2">
						<input 
						type="submit" 
						value="Login" 
						className="button2"/>
					</div>
				</form>

			</div>
			<div className="logincard-footer">
				<div className="d-flex justify-content-center links">
					Don't have an account?<a href="/Signup">Sign Up</a>
				</div>
				<div className="d-flex justify-content-center">
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
