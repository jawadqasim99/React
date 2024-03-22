import axios from 'axios';
import React, { useState } from 'react'
import {toast} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate =useNavigate();
  const [data , setData] =useState({
    name:'',
    email:'',
    password : ''
  })
  let registerUser =async (e)=>{
    e.preventDefault();
    const {name,email,password}=data
    try {
      const {data} =await axios.post('/register',{
        name,email,password
      })
      if(data.error){
        toast.error(data.error);
      }else{
        setData({});
        toast.success("Longin successfull, Welcome!")
        navigate('/login')
      }
    } catch (error) {
      console.log(error);
    }
  }
  let inputHandler = (e)=>{
    setData({...data, [e.target.name] : e.target.value});
  }

  return (
    <div>
      <form action="#" onSubmit={registerUser}> 
      <input type="text" placeholder='Enter your Username'  value={data.name} onChange={inputHandler} name='name'/>
    <input type="email" placeholder='Enter your email'  value={data.email} onChange={inputHandler} name='email'/>
    <input type="password" placeholder='Enter your Password'   value={data.password} onChange={inputHandler}  name='password'/>
    <button type='submit'>Register</button>
   </form>
    </div>
  )
}
