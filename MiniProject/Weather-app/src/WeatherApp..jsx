import { Info } from "@mui/icons-material";
import Weather from "./Weather";
import InfoWeather from "./InfoWeather";
import "./Weather.css"
import { useState } from "react";

export default function WeatherApp(){
 
    const [weatherState , setWeatherState] = useState({
    })
let updatefunc= (result)=>{
    setWeatherState(result);
}

    return(<>
   <div className="pcard">
   <Weather updateInfo={updatefunc}/>
    <InfoWeather info={weatherState}/>
   </div>
    </>);
}