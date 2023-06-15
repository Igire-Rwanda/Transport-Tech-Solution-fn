import React from "react";
import {Routes, Route} from 'react-router-dom'
import Admindash from '../../pages/Admindashboard/admindash'
import Admindash2 from "../../pages/Admindashboard/admindash2";
import Admindash3 from "../../pages/Admindashboard/admindash3"
import Admindash4 from '../../pages/Admindashboard/admindash4'
import Admindash5 from '../../pages/Admindashboard/admindash5'
import Home from '../../pages/home/home.jsx';
import Trial from '../trial.jsx'

import Tracking from "../../pages/Tracking/tracking";
import Booking from "../../pages/booking/Booking";

import Destination from "../../pages/Destination/destination";
import Signup from "../../pages/signup";
import Login from "../../pages/login";
import NavBar from "../../pages/navigation/NavigationBar";


const Index = () =>{
    return(
        <Routes>
            <Route path="/trial" element ={<Trial/>}/>
            <Route path="/admin" element={<Admindash/>}/>
            <Route path="/tracking" element={<Tracking/>}/>
            <Route path="/booking" element={<Booking/>}/>
            <Route path="/destination" element={<Destination/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path="/signup" element={<Signup />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/driver" element={<Admindash2/>}/>
            <Route path="/bus" element={<Admindash3/>}/>
            <Route path="/claim" element={<Admindash4/>}/>
            <Route path="/form" element={<Admindash5/>}/>
            <Route path="/navbar" element={<NavBar/>}/>
        </Routes>
    )
}
export default Index;