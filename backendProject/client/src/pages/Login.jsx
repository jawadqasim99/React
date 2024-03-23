import React, { useState } from 'react'
import axios from 'axios'

export default function Login() {
    const [data , setData ] = useState({
        email : '',
        password : ''
    });
    let loginForm = (e) =>{
        e.preventDefault();
        axios.get('/');
        
    }
    let loginHandler = (e)=>{
        setData({...data , [e.target.name] : e.target.value});

    }
  return (
    <div>
   <form action="#" onSubmit={loginForm}>
    <input type="email" placeholder='Enter Email'  value={data.email} onChange={loginHandler} name='email' />
    <input type="password" name="password" placeholder='Password' value={data.password}  onChange={loginHandler}   />
    <button type='submit'>Login</button>
   </form>
    </div>
  )
}
