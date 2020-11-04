import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastPreview from "./WeatherForecastPreview";

export default function WeatherForecast(props) {
const [loaded, setLoaded] = useState(false);
const [forecast, setForecast] = useState(null);

    function handleForecastResponse(response){
setForecast(response.data);
setLoaded(true);
    }

    if (loaded && props.city === forecast.city.name) {
    return (
        <div className="WeatherForecast row">
            {forecast.list.slice(0,6).map(function (forecastItem) {
                return <WeatherForecastPreview data={forecastItem} />;
            })}
        </div>
    )
    } else {
        let apiKey = "528c21b30b50eb31aa5276a8d38b3d22";
        let unit = "metric";
        let apiUrl =`https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=${unit}`;
        axios.get(apiUrl).then(handleForecastResponse);
    return null;
    }
}