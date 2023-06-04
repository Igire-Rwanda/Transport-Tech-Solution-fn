import react from 'react';
import '../component/login.css'
const Login = () => {
    return (
        <>
        <div className='all'>
            <div className='box'>
                <div className='blue'>
                    <h1>Welcome Back <span>!</span></h1>
                    <p>To keep connected with us please <br></br>
                          login with your personal info.
                    </p>
                    <button>LOG IN</button>
                </div>
                <div className='right'>
                    <form>
                    <h1>Create Account</h1>
                    <label>username</label>
                    <input type='text' id="usrename" value={password}/>
                    <label>Email</label>
                    <input type='email' id="email" value={email}/>
                    <label>Password</label>
                    <input type='password' id="password" value={password}/>
                    <label>confirm password </label>
                    <input type='password' id="password" value={password}/>
                    <button type="submit">signup</button>
                    </form>                    
                </div>
                </div>
                <div className='left'>
                <div className='red'>
                    <h1>Welcome Back <span>!</span></h1>
                    <p>To keep connected with us please <br></br>
                          login with your personal info.
                    </p>
                    <button>SIGN UP</button>
                </div>
                <form>
                    <h1>Create Account</h1>
                    <label>username</label>
                    <input type='text' id="usrename" value={password}/>
                    <label>Email</label>
                    <input type='email' id="email" value={email}/>
                    <label>Password</label>
                    <input type='password' id="password" value={password}/>
                    <label>confirm password </label>
                    <input type='password' id="password" value={password}/>
                    <button type="submit">signup</button>
                    </form> 
                </div>
            

        </div>
        
        
        </>
    )

};
export default Login;