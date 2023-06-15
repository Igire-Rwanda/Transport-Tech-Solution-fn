import './NavigationBar.css';
import { FiMenu } from 'react-icons/fi';
import { FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import Logo from '../image/Logo.png'


let NavBar = () =>{

    let [visible, SetVisible] = useState(true);
    return(
    
        <div className='container'>
          <nav>
            <a href='#' id='logo'>
                 {/* <img src={Logo}></img> */}
            </a>
            <div>
                <ul id='navbar'>
                 <li className='navbar-list'><a id='navbar-a' className='active' href='#'><Link to="/" >Home</Link></a></li>
                 <li className='navbar-list'><a id='navbar-a' href='#'>Book here</a></li>
                 <li className='navbar-list'><a id='navbar-a' href='#'>Manage Booking</a></li>
                 <li className='navbar-list'><a id='navbar-a' href='#'>Contact</a></li>
                 <li className='navbar-list'><a id='navbar-a' href='#'><Link to="/Signup" >Sign in</Link></a></li>   
                </ul>
            </div>
            <div className='mobile'>
            {visible &&<FiMenu className='menuBar' onClick={() =>{SetVisible(false)}}/>}
        
            {!visible &&<FaTimes className='menuTimes' onClick={() =>{SetVisible(true)}} />}
            
            
                {!visible && <ul id='forMobile'>
                <li><a className='active' href='#'>Home</a></li>
                 <li><a href='#'>Book here</a></li>
                 <li><a href='#'>Manage Booking</a></li>
                 <li><a href='#'>Contact</a></li>
                 <li><a href='#'>Sign in</a></li>   
                    </ul>}
                </div>
        </nav>
        </div>
      

    
    
    );
}
export default NavBar;