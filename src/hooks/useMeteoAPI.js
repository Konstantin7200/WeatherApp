import { useEffect, useState } from "react"


export function useMeteoAPI(URLForMeteo){
    const[APIData,setAPIData]=useState(0);
    const[loaded,setLoaded]=useState(false);
    
    useEffect(()=>{
        if(URLForMeteo)
        fetch(URLForMeteo).then(response => response.json()).then((data) => {setAPIData(data);setLoaded(true)})
    },[URLForMeteo])
    
    return [APIData,loaded];
}