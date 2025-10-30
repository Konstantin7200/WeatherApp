import React from "react";
import Image1 from "../../Assets/images/icon-sunny.webp";
import classes from "../WeatherPanel/WeatherPanel.module.css"

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

const WeatherPanel = ({ location, date, weather, temperature }) => {
  let locationArray=location.split(',');
  if(locationArray.length==1)
    location=location;
  else location=locationArray[0]+','+locationArray[locationArray.length-1]
  return (
    <div className={classes.weatherPanel}>
      <div>
        <p>{location}</p>
        <p>{date}</p>
      </div>
      <div className={classes.horizontalCont}>
        <img src={getWeather(weather)} alt="weather-icon" style={{width:4+"rem"}}/>
        <p>{temperature}°</p>
      </div>
    </div>
  );
};

export default WeatherPanel;
