import React, { useEffect, useState } from "react";
import "./styles/styles.css";
import HourlyForecast from "./Components/HourlyForecast/HourlyForecast";
import WeatherInfo from "./Components/WeatherInfo/WeatherInfo";
import DailyForecast from "./Components/DailyForecast/DailyForecast";
import SearchForm from "./Components/SearchForm/SearchForm";
import { useCoordinatesAPI } from "./hooks/useCoordinatesAPI";
import { useMeteoAPI } from "./hooks/useMeteoAPI";
import { useWeather } from "./hooks/useWeather";


function App() {
  const [URLForCoordinates,setCoordinates]=useState("https://nominatim.openstreetmap.org/search?format=json&q=London")
  let defaultData={hourly:{temperature_2m:[1,2,3,4,5,6,7,8],
    time:["2025-10-27T23:00","2025-10-28T00:00","2025-10-28T01:00","2025-10-28T02:00","2025-10-28T03:00","2025-10-28T04:00","2025-10-28T05:00","2025-10-28T06:00","2025-10-28T07:00","2025-10-28T08:00","2025-10-28T09:00","2025-10-28T10:00"],
  weather_code:[1,1,1,1,1,1,1,1]},
  daily:{temperature_2m_max:[1,2,3,4,5,6,7],temperature_2m_min:[1,2,3,4,5,6,7],time:["2025-10-28"],weather_code:[1,1,1,1,1,1,1,1]},
current:{precipitation:"0in",relative_humidity_2m:"78", temperature_2m:"1",weather_code:"61",wind_speed_10m:"1",time:"2025-10-28T13:15",apparent_temperature:"1"}
};
  const defaultLocation="London, UK"
  const [data,loc,loaded]=useWeather(URLForCoordinates);
  let APIData=defaultData
  let location=defaultLocation
  if(loaded)
  {
    APIData=data
    location=loc
  }
  if (!loaded || !data || !data.current) {
    return <div className="App">Loading...</div>;
  }
  
  return (
    <div className="App">
      <SearchForm setCoordinates={setCoordinates}/>
      <div className="mainPart">
        <div className="weatherInfo">
          <WeatherInfo temperature_2m={APIData.current.temperature_2m} time={APIData.current.time} weather_code={APIData.current.weather_code} precipitation={APIData.current.precipitation} humidity={APIData.current.relative_humidity_2m} windSpeed={APIData.current.wind_speed_10m} feelsLike={APIData.current.apparent_temperature} location={location}/>
        </div>
        <div className="dailyForecast">
          <DailyForecast day={new Date(APIData.daily.time[0]).getDay()} minTemperatures={APIData.daily.temperature_2m_min} maxTemperatures={APIData.daily.temperature_2m_max} weather={APIData.daily.weather_code}/>
        </div>
        <div className="hourlyForecast">
          <HourlyForecast times={APIData.hourly.time} temperatures={APIData.hourly.temperature_2m} weather={APIData.hourly.weather_code}/>
        </div>
      </div>
    </div>
  );
}


export default App;
