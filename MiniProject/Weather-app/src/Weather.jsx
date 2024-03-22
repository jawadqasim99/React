import TextField from '@mui/material/TextField';
import './Weather.css'
import Button from '@mui/material/Button';
import { useState } from 'react';
import Info from './InfoWeather.jsx';
export default function Weather({updateInfo}){
    const [city , setCity] = useState("");
    const [err , setErr]=useState(false);
    let API_URL= "https://api.openweathermap.org/data/2.5/weather";
    let API_KEY= "e20ce9df72dd15b441842cfaa4c638d3";
   
    let weatherInfoApi = async()=>{
        try {
            let request = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let weatherReq = await request.json();
        console.log(weatherReq);
        let result = {
         feels_like : weatherReq.main.feels_like,
         humidity : weatherReq.main.humidity,
         pressure:weatherReq.main.pressure,
         temp : weatherReq.main.temp,
         temp_max : weatherReq.main.temp_max,
         temp_min:weatherReq.main.temp_min,
         name:weatherReq.name,
         description: weatherReq.weather[0].description
 
        }
        return result;
        } catch (error) {
            throw error;
        }
    }
    let inputHandler = (eve)=>{
        setCity(eve.target.value);
    } 

    let submitForm = async(e)=>{
       try {
        e.preventDefault();
        setCity("");
      let updateApi = await  weatherInfoApi();
      updateInfo(updateApi);
       } catch (error) {
        setErr(true);
       }
      

    }
    
    return(
        <>
        <div >
            <form action="#" className='container' onSubmit={submitForm}>
            <h1>Weather App 🌦️</h1>
        <TextField id="text " label="City Name" variant="outlined" value={city}  onChange={inputHandler} required/>
        <br /><br />
        <Button variant="contained" type='submit'>Search</Button> <br /><br />
        {err && <p style={{color:"red" , fontWeight : "bold"}}>Such no Place Exist!</p> }
            </form>
           
        </div>
        </>
    );

}