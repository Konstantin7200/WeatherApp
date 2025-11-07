import {useEffect, useState} from "react"
export function useCoordinatesAPI(URLForCoordinates) 
{
    let [URLForMeteo,setURLForMeteo]=useState("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=temperature_2m_max,temperature_2m_min,weather_code&hourly=temperature_2m,weather_code&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m,precipitation,apparent_temperature&timezone=auto&forecast_hours=12")
    const[data,setData]=useState(null);
    const[loaded,setLoaded]=useState(false);
    useEffect(()=>{
        if(URLForCoordinates)
        fetch(URLForCoordinates,{headers:{'Accept-language':'en'}}).then(response=>response.json()).then((result)=>
    {
        setLoaded(true)
        if(Array.isArray(result))
            result=result[0]
        if(result)
            {
                setLocation(result.display_name)
                setURLForMeteo(`https://api.open-meteo.com/v1/forecast?latitude=${result.lat}&longitude=${result.lon}&daily=temperature_2m_max,temperature_2m_min,weather_code&hourly=temperature_2m,weather_code&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m,precipitation,apparent_temperature&timezone=auto&forecast_hours=12`);
            }
        setData(result);
    })
    },[URLForCoordinates])
    
    const[location,setLocation]=useState("London, UK")

    
    return [location,URLForMeteo,loaded]
}
