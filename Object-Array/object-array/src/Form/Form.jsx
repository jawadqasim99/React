import { useEffect, useState } from "react";

export default function Form(){

    const [formData , setFormData] = useState({
        userName : "",
        email : "",
        password: ""
    })
let inputHandler = (event)=>{
    return setFormData({...formData, [event.target.name] : event.target.value})

}

useEffect(function change(){
    alert("Welcome Back!!")
},[])


    return(
        <>
      <form action="#">
      <input type="text" placeholder="Enter User Name" style={{width : '15rem' , height: "2rem" , borderRadius: "1rem" , padding: "0.5rem"}} value={formData.userName} name="userName" onChange={inputHandler}/>
      <br /><br />
        <input type="email" placeholder="Enter Your Email" style={{width : '15rem' , height: "2rem" , borderRadius: "1rem" , padding: "0.5rem"}} value={formData.email} name="email" onChange={inputHandler}/>
        <br /><br />
        <input type="password" placeholder="Enter Password" style={{width : '15rem' , height: "2rem" , borderRadius: "1rem" , padding: "0.5rem"}}  value={formData.password}  name="password" onChange={inputHandler}/>
        <br /><br />
        <button>Submit</button>
      </form>

        </>
    );
}