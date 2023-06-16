import React from 'react';
import './sign-up.css';
import { useNavigate } from 'react-router';



const Signup = () => {
    const navigate =useNavigate();
    const Submit =()=>{
        navigate('/login')
    }
  return (
    <div className='login-signup-center'>
      <div className="container-signup" id='signup-fix-error'>
        <div className="forms-container">
          <div className="form-control signup-form">
            <form action="#">
              <h2>Create Account</h2>
              <input type="text" placeholder="Username" required />
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <input type="password" placeholder="Confirm password" required />
              <button >Signup</button>
            </form>
            <span>or signup with</span>
            <div className="socials">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-google-plus-g"></i>
              <i className="fab fa-linkedin-in"></i>
            </div>
          </div>
        </div>
        <div className="intros-container">
          <div className="intro-control signup-intro">
            <div className="intro-control__inner">
              <h2>Welcome Back!</h2>
              <p>
                We are so excited to have you here. If you haven't already, create an account to get access to exclusive
                offers, rewards, and discounts.
              </p>
              <button id="signin-btn" onClick={Submit} ><a href="">Already have an account? Signin.</a></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
