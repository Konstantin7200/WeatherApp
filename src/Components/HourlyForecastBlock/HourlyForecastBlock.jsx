import { getWeather } from "../../Utils/GetWeather";
import classes from "./HourlyForecastBlock.module.css"


const HourlyForecastBlock=({time,temperature,weather})=>{
    return(
        <div className={classes.hourlyForecastBlock}>
            <div>
            <img src={getWeather(weather)} alt="weather-icon"/>
            <p>{time}</p>
            </div>
            <p>{temperature}°</p>
        </div>
    )
}

export default HourlyForecastBlock
