import React from "react";
import classes from "./InfoBlockCont.module.css"
import InfoBlock from "../InfoBlock/InfoBlock";

const InfoBlockCont=({precipitation, humidity, windSpeed, feelsLike})=>{
    return(
        <div className={classes.infoBlockCont}>
            <InfoBlock name={"Feels Like"} info={feelsLike+"°"}/>
            <InfoBlock name={"Humidity"} info={humidity+"%"}/>
            <InfoBlock name={"Wind"} info={windSpeed+"kmh"}/>
            <InfoBlock name={"Precipitation"} info={precipitation+"in"}/>
        </div>
    )
}

export default InfoBlockCont