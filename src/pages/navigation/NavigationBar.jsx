import './NavigationBar.css';
import { FiMenu } from 'react-icons/fi';
import { FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import Logo from '../image/Logo.png'


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
                 <li><Link to='/book-here'>Book here</Link> </li>
                 <li><Link to='/cancel-ticket'> Manage Booking</Link></li>
                 <li><Link to='/contact'>Contact</Link> </li>
                 <li><Link to='/login'>Sign in</Link> </li>   
 
                </ul>
            </div>
            <div className='mobile'>
            {visible &&<FiMenu className='menuBar' onClick={() =>{SetVisible(false)}}/>}
        
            {!visible &&<FaTimes className='menuTimes' onClick={() =>{SetVisible(true)}} />}
            
            
                {!visible && <ul id='forMobile'>
                <li><Link to='/'>Home</Link> </li>
                 <li><Link to='/bookingform'>Book here</Link> </li>
                 <li><Link to='/cancel-ticket'> Manage Booking</Link></li>
                 <li><Link to='/contact'>Contact</Link> </li>
                 <li><Link to='/login'>Sign in</Link> </li>    
                    </ul>}
                </div>
        </nav>
        </div>
 
    );
}
export default NavBar;