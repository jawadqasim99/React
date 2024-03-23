
import './App.css'
import { Routes , Route } from 'react-router-dom'
import Navbar from './compenonts/Navbar'
import Footer from './compenonts/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import axios from 'axios';
axios.defaults.baseURL='http://localhost:8000';
axios.defaults.withCredentials=true;
function App() {
 

  return (
    <>
    <Navbar/>
  <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/register' element={<Register/>}/>
  </Routes>
  <Footer/>
    </>
    
  )
}

export default App
