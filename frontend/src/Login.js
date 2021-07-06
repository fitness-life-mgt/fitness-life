import React from 'react';
import Footer from './Footer';

const Login = () => {
    return (
		<>
    <div className="login-wrapper"> 
        <div className="container">      
	    <div class="d-flex justify-content-center h-100">
		<div class="card">
            <div class="card-header">
                <h3>Sign In</h3>
                    <div class="d-flex justify-content-end social_icon">
                        <span><i class="fab fa-facebook-square"></i></span>
                        <span><i class="fab fa-google-plus-square"></i></span>
                        <span><i class="fab fa-twitter-square"></i></span>
                     </div>
            </div>
			<div class="card-body">
				<form>
					<div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fas fa-user"></i></span>
						</div>
						<input type="text" class="form-control" placeholder="username"/>
						
					</div>
					<p></p>
					<div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fas fa-key"></i></span>
						</div>
						<input type="password" class="form-control" placeholder="password"/>
					</div>
					<p></p>
					<div class="row align-items-center remember">
						<input type="checkbox"/>Remember Me
					</div>
					<p></p>
					<div class="d-flex justify-content-end form-group2">
						<input type="submit" value="Login" class="button2"/>
					</div>
				</form>

			</div>
			<div class="card-footer">
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
	<Footer/>
	</>
    )
}

export default Login
