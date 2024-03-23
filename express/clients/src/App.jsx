
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from "./components/Navbar.jsx";
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Footer from './components/Footer.jsx';
import axios from 'axios';
import {Toaster} from "react-hot-toast"


axios.defaults.baseURL='http://localhost:8080';
axios.defaults.withCredentials=true;

function App() {
 

  return (
    <>
    <Navbar/>
    <Toaster position='bottom-right' toastOptions={{duration:2000}}/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
