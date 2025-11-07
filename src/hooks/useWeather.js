import { useCoordinatesAPI } from "./useCoordinatesAPI";
import { useMeteoAPI } from "./useMeteoAPI";


export function useWeather(URLForCoordinates){
    let APIData,loadedWeather;
    const [location,URLForMeteo,loadedCoords]=useCoordinatesAPI(URLForCoordinates);
    [APIData,loadedWeather]=useMeteoAPI(URLForMeteo);
    return [APIData,location,APIData&&location]
}