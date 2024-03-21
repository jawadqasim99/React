import TextField from '@mui/material/TextField';
import './Weather.css'
import Button from '@mui/material/Button';
import { useState } from 'react';
export default function Weather(){
    const [city , setCity] = useState("");
    let inputHandler = (eve)=>{
        setCity(eve.target.value);
    }

    let submitForm = (e)=>{
        e.preventDefault();
       setCity("");
    }
    
    return(
        <>
        <div >
            <form action="#" className='container' onSubmit={submitForm}>
            <h1>Weather App 🌦️</h1>
        <TextField id="text " label="City Name" variant="outlined" value={city}  onChange={inputHandler}/>
        <br /><br />
        <Button variant="contained" type='submit'>Search</Button>

            </form>
        </div>
        </>
    );

}