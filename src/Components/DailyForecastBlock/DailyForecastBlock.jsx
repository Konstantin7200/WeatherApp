import { getWeather } from "../../Utils/GetWeather"
import classes from "./DailyForecastBlock.module.css"


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