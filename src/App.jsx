import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './component/routes'
// import './App.css'

// import Home from './pages/home/home'
import NavigationBar from '../src/pages/Navigation/NavigationBar'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <NavigationBar/>
      <Router>
    <Routes></Routes>
   </Router>
    </>
  )
}

export default App
