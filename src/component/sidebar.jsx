import React from "react";
import { useState, useEffect } from "react";
import './sidebar.css'
import {Link} from 'react-router-dom'
import {AiOutlineMenu} from 'react-icons/ai'
import {AiOutlineClose} from 'react-icons/ai'
import { color } from "framer-motion";
const Side =()=>{
    const [clicked, setClicked] = useState(false);
    const [visible, setvisible]=useState(false)
    const handleClick = () => {
      setClicked(true);
    };
    const linkStyle = {
        textDecoration: 'none',
        color: clicked ? 'black' : 'white',
        backgroundColor: clicked ? '#009AC7' : '#2A4966'
    };

    const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    setIsDarkMode(theme === "dark");
  }, []);
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", isDarkMode ? "dark" : "light");
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };
    return(
      <div className="aside">
        <div className="admin-sidebar">
        <div className='icons-res'>
          {!visible && <AiOutlineMenu onClick={() => setvisible(true)}/>}
          {visible && <AiOutlineClose onClick={() => setvisible(false)}/>}
          </div>
           
        <div className="admnin-sidebar">
        <div className="admin-fix">
        <div className="logo-admin">
  <h1>
  <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
      Bus<span style={{ color: "#009AC7" }}>link</span>
    </Link>
  </h1>
</div>

            <div className="list-items-admin">
                <ul>
                <li><i className='bx bxs-dashboard'></i><Link to="/admin" style={linkStyle} onClick={handleClick}>Dashboard</Link></li>
                <li><i className='bx bxs-id-card'></i><Link to="/driver"style={linkStyle} onClick={handleClick}>Drivers</Link></li>
                <li ><i className='bx bx-bus'></i> <Link to="/bus"style={linkStyle} onClick={handleClick}>Bus manage</Link></li>
                <li> <i className='bx bxs-book-content'></i> <Link to ="/form"style={linkStyle} onClick={handleClick}>Form</Link></li>
                </ul>
            </div>
            <div className="line-admin"></div>
            <div className="list-items-admin">
                <ul>
                <li><i className='bx bx-comment-dots'></i> <Link to="/claim"style={linkStyle} onClick={handleClick}>Claims & <br/>feedback  </Link></li>
                <li><i className='bx bx-cog'></i> Settings </li>
                <li><i className='bx bx-phone-call' ></i> Help center </li>
                </ul>
                </div>
                <label className="switch">
          <input type="checkbox" id="themeToggle" checked={isDarkMode} onChange={handleThemeToggle} />
          <span className="slider round"></span>
        </label>
        </div>
        </div>
         
        </div>
        </div>
    )
}

export default Side