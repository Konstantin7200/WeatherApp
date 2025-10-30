import React from "react";
import Image1 from "../../Assets/images/icon-sunny.webp";
import classes from "../DailyForecastBlock/DailyForecastBlock.module.css"
import sunny from "../../Assets/images/icon-sunny.webp"
import snow from "../../Assets/images/icon-snow.webp"
import rain from "../../Assets/images/icon-rain.webp"
import drizzle from"../../Assets/images/icon-drizzle.webp"
import overcast from"../../Assets/images/icon-overcast.webp"
import cloudy from "../../Assets/images/icon-partly-cloudy.webp"
import fog from "../../Assets/images/icon-fog.webp"
import storm from "../../Assets/images/icon-storm.webp"

function getWeather(weatherCode){
    if(weatherCode<2)
        return sunny;
    if(weatherCode<3)
        return cloudy ;
    if(weatherCode<45)
        return overcast;
    if(weatherCode<55)
        return fog;
    if(weatherCode<63)
        return drizzle;
    if(weatherCode<73)
        return rain;
    if(weatherCode<95)
        return snow;
    else return storm;
}



const DailyForecastBlock=({day,temperature1,temperature2,weather})=>{
    return(
        <div className={classes.dailyForecastBlock}>
            <p>{day}</p>
            <img src={getWeather(weather)} alt="weather-icon"/>
            <div className={classes.horizontalCont}>
            <p>{Math.round(temperature1)}°</p>
            <p>{Math.round(temperature2)}°</p>
            </div>
        </div>
    )
}

export default DailyForecastBlock