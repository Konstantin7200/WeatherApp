import { getWeather } from "../../Utils/GetWeather";
import classes from "../WeatherPanel/WeatherPanel.module.css"

const WeatherPanel = ({ location, date, weather, temperature }) => {
  let locationArray=location.split(',');
  if(locationArray.length==1)
    location=location;
  else location=locationArray[0]+','+locationArray[locationArray.length-1]
  return (
    <div className={classes.weatherPanel}>
      <div>
        <p className={classes.location}>{location}</p>
        <p>{date}</p>
      </div>
      <div className={classes.horizontalCont}>
        <img src={getWeather(weather)} alt="weather-icon"/>
        <p>{temperature}°</p>
      </div>
    </div>
  );
};

export default WeatherPanel;
