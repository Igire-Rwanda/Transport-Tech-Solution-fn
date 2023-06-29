import React, { useEffect, useState } from 'react';
import './log-in.css';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BASE_URL from '../../Api';

const Login = () => {
  const initialValues = { email: '', password: '', role: '' };
  const [formValues, setFormValues] = useState(initialValues);
  const [isSubmit, setIsSubmit] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value }); // Reset isSubmit when input fields change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    sendDataToBackend();
  };

  const validate = (values) => {
    let errors = {};
    
    if (!values.email) {
      errors.email = 'Email is required';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    }
    return errors;
  };

  useEffect(() => {
    console.log('formValues', formValues);
    console.log('formErrors', formErrors);

    if (Object.keys(formErrors).length === 0 && isSubmit) {
   
    }
  }, [formErrors, formValues, isSubmit]);

  const sendDataToBackend = async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/v2/user/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      });

      if (!response.ok) {
        throw new Error('Failed to save data');
        
      }
      toast('Successful login');
      alert('Successful login');
      const token = await response.json("");
      const tokens= await token.token
     
   
      localStorage.setItem('token', tokens);
      
      
      var decoded = jwt_decode(tokens);
      // console.log(decoded);
const roles = await decoded.role
// console.log("roles",roles)
if(roles=="driver" || roles=="Driver"){
  navigate('/booking');
  
}
else if(roles=="user"){
  navigate('/book-here');
  
}
else{

  navigate('/admin');

}
    
    } catch (error) {
      
       console.error('Error saving data:', error);
     
       toast('Invalid credentials');
    }

   
  };

  const handleSignup = () => {
    navigate('/signup');
  };

  console.log('Rendering Login component');

  return (
    <div className="login-center">
      <div className="container-Login" id="Login-fix-fab">
        <div className="forms-container">
          <div className="form-control signin-form">
            <form onSubmit={handleSubmit}>
              <h2>Login</h2>
              <input
                type="email"
                placeholder="Email"
                required
                name="email"
                value={formValues.email}
                onChange={handleChange}
              />
              {formErrors.email && <span className="error">{formErrors.email}</span>}
              <input
                type="password"
                placeholder="Password"
                required
                name="password"
                value={formValues.password}
                onChange={handleChange}
              />
              {formErrors.password && <span className="error">{formErrors.password}</span>}
              <button type="submit">Login</button>
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
              <button id="signin-btn" onClick={handleSignup}> Sign Up.</button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
