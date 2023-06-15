import { Route, BrowserRouter as Router } from "react-router-dom";
import Routes from "./component/routes";
// import './App.css'

// import Admin from "./pages/Admindashboard/admindash";


import { useState } from 'react'
import Footer from '../src/component/footer.jsx';

import Booking from './pages/booking/Booking';


function App() {
  return (
   <>
     <Router>
<Routes></Routes>
</Router>
   </>

  )
}

export default App;
