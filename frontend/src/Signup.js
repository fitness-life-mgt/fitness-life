import React,{useState} from 'react';
import  Footer from './Footer';


import Axios from 'axios';

const Signup = () => {

	const [firstName,setfirstName] = useState ('')
	const [lastName,setlastName] = useState ('')
	const [email,setemail] = useState ('')
	const [password,setpassword] = useState ('')
	const [cpassword,setcpassword] = useState ('')
  
	const signupmember =()=>{

	Axios.post("http://localhost:8001/signup/create", {
		fName: firstName,
		lName: lastName,
		email: email,
		password: password,
		cpassword: cpassword,		
		},{headers:{
			'Content-Type': 'application/json',
		 }}).then((response) => {
			 if(!response.data.error)		
			{
				alert("successfully inserted!");		
				

			}else{
				console.log("Error!");
			}

		}).catch(error=>{
			alert(error);
		})
  
	};
	
    return (
        <>
           <div className="workout-wrapper">
           <div className="container">      
	    <div className="d-flex justify-content-center h-100">
		<div className="logincard">
            <div className="logincard-header">
                <h3>Sign Up</h3>
                    <div className="d-flex justify-content-end social_icon">
                        <span><i className="fab fa-facebook-square"></i></span>
                        <span><i className="fab fa-google-plus-square"></i></span>
                        <span><i className="fab fa-twitter-square"></i></span>
                     </div>
            </div>
			<div className="logincard-body">
				
					<div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><i className="fas fa-user"></i></span>
						</div>
						<input 
						type="text" 
						className="form-control" 
						placeholder="First Name"
						name="firstName"
						onChange={(e)=>{
							setfirstName(e.target.value)
						  }}/>
						
					</div>
					<p></p>
                    <div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><i className="far fa-user"></i></span>
						</div>
						<input 
						type="text" 
						name="lastName"
						className="form-control" 
						placeholder="Last Name"
						onChange={(e)=>{
							setlastName(e.target.value)
						  }}/>
						
					</div>
					<p></p>
                    <div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><i className="fas fa-envelope-open-text"></i></span>
						</div>
						<input 
						type="text" 
						name="email"
						className="form-control" 
						placeholder="Email"
						onChange={(e)=>{
							setemail(e.target.value)
						  }}
						/>
						
					</div>                    
					<p></p>
					<div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><i className="fas fa-key"></i></span>
						</div>
						<input 
						type="password" 
						name="password"
						className="form-control" 
						placeholder="Password"
						onChange={(e)=>{
							setpassword(e.target.value)
						  }}
						/>
					</div>
					<p></p>
                    <div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><i className="fas fa-unlock-alt"></i></span>
						</div>
						<input 
						type="password" 
						className="form-control" 
						placeholder="Confirm Password"
						name="cpassword"
						onChange={(e)=>{
							setcpassword(e.target.value)
						  }}
						/>
					</div>
					<p></p>
					<div className="row align-items-center remember">
						<input type="checkbox"/>Remember Me
					</div>
					<p></p>
					<div className="d-flex justify-content-end form-group2">
						<button 
						className='button1'
						onClick={signupmember} >Sign up</button>
					</div>
				

			</div>
			<div className="logincard-footer">
				<div className="d-flex justify-content-center links">
					Already have an account?<a href="/Login">Sign In</a>
				</div>
				</div>
		</div>
	</div> 
</div>   
               
            </div> 
   
 </>
    )
}

export default Signup

