import './NavigationBar.css';
import { FiMenu } from 'react-icons/fi';
import { FaTimes } from 'react-icons/fa';
import { useState } from 'react';
// import Logo from '../image/Logo.png'
import { Link } from 'react-router-dom';


let NavBar = () =>{

    let [visible, SetVisible] = useState(true);
    return(
    
        <div className='navcontainer'>
          <nav className='nav'>
            <a href='#' id='logo'>
                 {/* <img src={Logo}></img> */}
            </a>
            <div>
 
                <ul id='navnavbar'>
                <li><Link to='/'>Home</Link> </li>
                 <li><Link to='/bookingform'>Book here</Link> </li>
                 <li><Link to='/bookingform'> Manage Booking</Link></li>
                 <li><Link to='/contact'>Contact</Link> </li>
                 <li><Link to='/login'>Sign in</Link> </li>   
 
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