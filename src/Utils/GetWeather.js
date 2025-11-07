import React from "react";
import sunny from "../Assets/images/icon-sunny.webp"
import snow from "../Assets/images/icon-snow.webp"
import rain from "../Assets/images/icon-rain.webp"
import drizzle from"../Assets/images/icon-drizzle.webp"
import overcast from"../Assets/images/icon-overcast.webp"
import cloudy from "../Assets/images/icon-partly-cloudy.webp"
import fog from "../Assets/images/icon-fog.webp"
import storm from "../Assets/images/icon-storm.webp"

export function getWeather(weatherCode){
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