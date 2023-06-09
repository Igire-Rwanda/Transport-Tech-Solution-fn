
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './component/routes'
// import './App.css'

// import Admin from './pages/Admindashboard/admindash'
// import Home from './pages/home/home'


const App=()=>{

  return (
   <>
     {/* <Home/>  */}
     <Router>
<Routes></Routes>
</Router>
   </>
  )
}
 
export default App
