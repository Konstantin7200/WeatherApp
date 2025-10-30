import React from "react";
import HourlyForecastBlock from "../HourlyForecastBlock/HourlyForecastBlock";
import classes from "./HourlyForecast.module.css"




//Add some dropdown thing
const HourlyForecast=({times,temperatures,weather})=>{
    let hourlyForecastList=[]
    for(let i=0;i<8;i++)
    {
        hourlyForecastList[i]=<HourlyForecastBlock key={Math.random()} time={times[i].substring(11,13)} weather={weather[i]} temperature={temperatures[i]}/>;
    }


    return(
        <div className={classes.hourlyForecast}>
        <div>
            <p>Hourly forecast</p>
        


        </div>
            {hourlyForecastList}
        </div>
    )
}
export default HourlyForecast;
