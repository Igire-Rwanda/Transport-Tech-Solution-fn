import { useState } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Routes from "./component/routes";
// import './App.css'

// import Admin from "./pages/Admindashboard/admindash";
import Booking from "./pages/Booking/booking";

function App() {
  return (
   <>
     {/* <Home/>  */}
     <Router>
<Routes></Routes>
</Router>
   </>
  )
}

export default App;
