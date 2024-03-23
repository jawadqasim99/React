import React, { useState } from 'react'

export default function Register() {
    const [datar , setDatar ] = useState({
        name:'',
        email : '',
        password : ''
    });
    let registerForm = (e) =>{
        e.preventDefault();
    }
    let registerHandler = (e)=>{
        setDatar({...datar , [e.target.name] : e.target.value});
    }
  return (<>
    <div>
      
   <form action="#" onSubmit={registerForm}>
   <input type="text" placeholder='Enter Email'  value={datar.name} onChange={registerHandler} name='name' />
    <input type="email" placeholder='Enter Email'  value={datar.email} onChange={registerHandler} name='email' />
    <input type="password" name="password" placeholder='Password' value={datar.password}  onChange={registerHandler}   />
    <button type='submit'>Register</button>
   </form>
    </div>
    </>
  
  )
}
