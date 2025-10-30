import React from "react";
import InfoBlockCont from "../InfoBlockCont/InfoBlockCont";
import WeatherPanel from "../WeatherPanel/WeatherPanel";
import classes from "../WeatherInfo/WeatherInfo.module.css"


const WeatherInfo=({temperature_2m,weather_code,time,precipitation, humidity, windSpeed, feelsLike,location})=>{
    let date=new Date(time.substring(0,10))
    let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let months=["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sept","Oct","Nov","Dec"];
    return (
    <div className={classes.weatherInfo}>
        <WeatherPanel temperature={Math.round(temperature_2m)} weather={weather_code} location={location} date={days[date.getDay()]+", "+months[date.getMonth()]+" "+date.getDate()+", "+date.getFullYear()}/>
        <InfoBlockCont precipitation={precipitation} humidity={humidity} windSpeed={windSpeed} feelsLike={feelsLike} />
    </div>
    )
}

export default WeatherInfo