import React, { useState } from "react";
import searchIcon from "../../Assets/images/icon-search.svg";
import classes from "./SearchForm.module.css"



const SearchForm=({setCoordinates})=>{
    const [myInput,setMyInput]=useState("");
    const getLocation=()=>{
    setCoordinates("https://nominatim.openstreetmap.org/search?format=json&q="+encodeURI(myInput));
    setMyInput("");
    }
    return(
        <div className={classes.searchForm}>
            <div>
                <img src={searchIcon} alt="search-icon"/>
                <input id="locationInput" type="text" value={myInput} placeholder="Search for a place..." onChange={(e) => setMyInput(e.target.value)}/>
            </div>
            <button type="button" onClick={getLocation}>Search</button>
        </div>
    )
}

export default SearchForm
