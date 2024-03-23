import React, { useState } from 'react'
import axios from 'axios';
import {toast} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate =useNavigate();
  let [data,setData] = useState(
    {
      email : '',
      password : ""
    }
  )
  let loginUser = async(e)=>{
    e.preventDefault();
    const {email,password}=data;
   try {
    const {data} = await axios.post('/login' , {
      email,password
    })
    if(data.error){
      toast.error(data.error);
    }else{
      setData({});
      toast.success("Longin successfull, Welcome!")
      navigate('/home')
    }
   } catch (error) {
    
   }
  }
  return (
    <div>
   <form action="#" onSubmit={loginUser}> 
    <input type="email" placeholder='Enter your email' required  value={data.email} onChange={(e)=>{setData({...data, email :e.target.value })}} />
    <input type="password" placeholder='Enter your Password'  required value={data.password} onChange={(e)=>{setData({...data, password :e.target.value })}}/>
    <button type='submit'>Login</button>
   </form>
    </div>
  )
}
