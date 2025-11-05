import React, { useEffect, useState } from "react";
import "./styles/styles.css";
import HourlyForecast from "./Components/HourlyForecast/HourlyForecast";
import WeatherInfo from "./Components/WeatherInfo/WeatherInfo";
import DailyForecast from "./Components/DailyForecast/DailyForecast";
import SearchForm from "./Components/SearchForm/SearchForm";



function App() {
  const getTimeZoneByCoordinates = (lon) => {
    const timeZoneOffset = Math.round(lon / 15);
    const timeZones = {
        '-12': 'Etc/GMT+12', '-11': 'Pacific/Midway', '-10': 'Pacific/Honolulu',
        '-9': 'America/Anchorage', '-8': 'America/Los_Angeles', '-7': 'America/Denver',
        '-6': 'America/Chicago', '-5': 'America/New_York', '-4': 'America/Halifax',
        '-3': 'America/Sao_Paulo', '-2': 'America/Noronha', '-1': 'Atlantic/Azores',
        '0': 'Europe/London', '1': 'Europe/Paris', '2': 'Europe/Helsinki',
        '3': 'Europe/Moscow', '4': 'Asia/Dubai', '5': 'Asia/Karachi',
        '6': 'Asia/Dhaka', '7': 'Asia/Bangkok', '8': 'Asia/Shanghai',
        '9': 'Asia/Tokyo', '10': 'Australia/Sydney', '11': 'Pacific/Noumea',
        '12': 'Pacific/Auckland'
    };
    
    return timeZones[timeZoneOffset.toString()] || 'UTC';
}
  let [URLForMeteo,setURLForMeteo]=useState("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=temperature_2m_max,temperature_2m_min,weather_code&hourly=temperature_2m,weather_code&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m,precipitation,apparent_temperature&timezone=auto&forecast_hours=12")
  const [URLForCoordinates,setCoordinates]=useState("https://nominatim.openstreetmap.org/search?format=json&q=London")
  let [APIData,setAPIData]=useState({hourly:{temperature_2m:[1,2,3,4,5,6,7,8],
    time:["2025-10-27T23:00","2025-10-28T00:00","2025-10-28T01:00","2025-10-28T02:00","2025-10-28T03:00","2025-10-28T04:00","2025-10-28T05:00","2025-10-28T06:00","2025-10-28T07:00","2025-10-28T08:00","2025-10-28T09:00","2025-10-28T10:00"],
  weather_code:[1,1,1,1,1,1,1,1]},
  daily:{temperature_2m_max:[1,2,3,4,5,6,7],temperature_2m_min:[1,2,3,4,5,6,7],time:["2025-10-28"],weather_code:[1,1,1,1,1,1,1,1]},
current:{precipitation:"0in",relative_humidity_2m:"78", temperature_2m:"1",weather_code:"61",wind_speed_10m:"1",time:"2025-10-28T13:15",apparent_temperature:"1"}
});
  const[location,setLocation]=useState("London, UK")
useEffect(()=>{
  fetch(URLForCoordinates,{headers:{'Accept-language':'en'}})
  .then(response=>response.json())
  .then(data=>
    {
      if(Array.isArray(data))
        data=data[0];
      setLocation(data.display_name)
      setURLForMeteo(`https://api.open-meteo.com/v1/forecast?latitude=${data.lat}&longitude=${data.lon}&daily=temperature_2m_max,temperature_2m_min,weather_code&hourly=temperature_2m,weather_code&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m,precipitation,apparent_temperature&timezone=auto&forecast_hours=12`);
    })
},[URLForCoordinates])
useEffect(()=>{
    fetch(URLForMeteo)
  .then(response => response.json())
  .then(data => {
    setAPIData(data)
  })
},[URLForMeteo]);

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
