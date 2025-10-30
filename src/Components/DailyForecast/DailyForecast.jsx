import React from "react";
import DailyForecastBlock from "../DailyForecastBlock/DailyForecastBlock";
import classes from "./DailyForecast.module.css"




let days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
const DailyForecast=({day,maxTemperatures,minTemperatures,weather})=>{
    
    return (
        <div>
            <p>Daily forecast</p>
            <div className={classes.dailyForecast}>
                {days.map((val,index)=>
                    (
                        <DailyForecastBlock key={Math.random()} day={days[(index+day)%7]} weather={weather[index]} temperature1={maxTemperatures[index]} temperature2={minTemperatures[index]}/>
                    )
                )}
                
            </div>
        </div>
    )
}

export default DailyForecast