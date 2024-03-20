import { useState } from "react";

export default function Object(){
    let [obj , setObj] = useState({a : 0 , b : 0 , c : 0 , d : 0});
    let incrementBlue=()=> setObj({...obj , a : obj.a +1}) ;
    let incrementPink=()=> setObj({...obj , b : obj.b +1}) ;
    let incrementGreen=()=> setObj({...obj , c : obj.c +1}) ;
    let incrementYellow=()=> setObj({...obj , d : obj.d +1}) ;
   
    return(
        <>
        <h3>Loudo Game ❤️</h3>
<p>First Player 🧑‍🦱</p>
<p>Total Secure = {obj.a}</p>
<button onClick={incrementBlue} style={{backgroundColor:"blue"}}>+1</button>
<p>Second Player 👱</p>
<p>Total Secure = {obj.b}</p>
<button  onClick={incrementPink} style={{backgroundColor:"pink"}}> +1</button>
 <p>Third Player 🧑‍🦰</p> 
 <p>Total Secure = {obj.c}</p>
 <button onClick={incrementGreen}  style={{backgroundColor:"green"}}>+1</button>
<p>Fourth Player 🧑‍🦱</p>
<p>Total Secure = {obj.d}</p>
<button  onClick={incrementYellow} style={{backgroundColor:"yellow"}}>+1</button> 

        </>
    );
}