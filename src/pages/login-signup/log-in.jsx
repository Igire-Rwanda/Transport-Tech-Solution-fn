import React from 'react';
import "./log-in.css";
import { useNavigate } from 'react-router';

const Login = () => {
    const navigate =useNavigate();
    const Submit =()=>{
        navigate('/signup')
    }
    return (
        <div className='login-center'>
            <div className="container-Login" id='Login-fix-fab'>
                <div className="forms-container">
                    <div className="form-control signin-form">
                        <form action="#">
                            <h2>Login</h2>
                            <input type="email" placeholder="Email" required />
                            <input type="password" placeholder="Password" required />
                            <button>Login</button>
                        </form>
                        <span>or signin with</span>
                        <div className="socials">
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-google-plus-g"></i>
                            <i className="fab fa-linkedin-in"></i>
                        </div>
                    </div>
                </div>
                <div className="intros-container">
                    <div className="intro-control signin-intro">
                        <div className="intro-control__inner">
                            <h2>Welcome Back!</h2>
                            <p>
                                We are so excited to have you here. If you haven't already, create an account to get access to exclusive offers, rewards, and discounts.
                            </p>
                            <button id="signin-btn" onClick={Submit}>Don't have an account? Sign Up.</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

};
export default Login;