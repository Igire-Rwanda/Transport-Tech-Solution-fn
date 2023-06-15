import React from 'react'
 import './footer.css'

import  { AiFillLinkedin } from "react-icons/ai"; 
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram} from "react-icons/ai";
import { FaTwitter} from "react-icons/fa";


import { HiLocationMarker } from "react-icons/hi";;
import{MdCall} from "react-icons/md";
import{MdEmail} from "react-icons/md";
import{TbWorldWww} from "react-icons/tb";

function Footer(){
  return(
     
    <>
    <div className='all-footer'>
    <div className='nav-footer'>
        <ul className='footer-1'>
        <li><a href='ABOUT-US'>ABOUT-US</a></li>
        <li><a href='QUICK-LINK'>QUICK-LINK</a></li>
        <li><a href='LET-US HELP'>LET-US HELP</a></li>
        <li><a href='CONTACT'>CONTACT</a></li>
        </ul>
    </div>
<div className="footer-line">

</div>
    <div className='para-footer'>
      <div class="para-1">
        <p>Welcome all members to<br/>
           join us here we provide <br/>
           Best services to everyone<br/>
          And this bus transport goes<br/>
           On time, for peaple who join<br/>
          We get more benefit to save<br/>
           More money and save time  </p>
      </div>
      <div className='footer-one'>
       <li>Home</li><br/>
       <li>Blogs</li><br/>
       <li>Contact-us</li><br/>
       <li>About-us</li>
      </div>
      <div className='footer-two'>
        <li>Your account</li><br/>
        <li>Your Location</li><br/>
        <li>Your Price</li><br/>
        <li>Manage Time</li>
        <li>help</li>
      </div>
      <div className='footer-left'>
    
  <div class="footer-four">
    <li> < HiLocationMarker />  Location</li><br/>
    <li><MdCall/> (+250 798 687 989)</li><br/>
    <li><MdEmail/> transport-sln@gmail.com</li><br/>
    <li><TbWorldWww/> www.transport-sln.com</li>
  </div>
      </div>


    {/* </div> */}
  
 </div>
 {/* </div> */}
 <div className='footer-line'>
  
 </div>
 <div className='footer-down'>
  
  <div className='footer-copy'>
    <p>copy @ 2020 All right reserved by:Bus link</p>
  </div>
  <div className='footer-icons'>
  <AiFillLinkedin />
 <AiFillFacebook />
<AiFillInstagram/>
< FaTwitter/>
      </div>

    </div>
</div>
  </>
  )
}
export default Footer;