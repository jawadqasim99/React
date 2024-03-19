import { useState } from "react";

export default function Counter(){
    const [count,setcount]=useState(0);
    function incriment() {
        setcount(count+1);
        
    }
    return(
        <>
        <p>Count : {count}</p>
        <button onClick={incriment}>Incriment</button>
        </>
    );
}