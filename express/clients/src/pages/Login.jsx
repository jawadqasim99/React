import React, { useState } from 'react'
import axios from 'axios';

export default function Login() {
  let [data,setData] = useState(
    {
      name : '',
      password : ""
    }
  )
  let loginUser =(e)=>{
    e.preventDefault();
    axios.get('/')
  }
  return (
    <div>
   <form action="#" onSubmit={loginUser}> 
    <input type="email" placeholder='Enter your email' required  value={data.name} onChange={(e)=>{setData({...data, name :e.target.value })}} />
    <input type="password" placeholder='Enter your Password'  required value={data.password} onChange={(e)=>{setData({...data, password :e.target.value })}}/>
    <button type='submit'>Login</button>
   </form>
    </div>
  )
}
