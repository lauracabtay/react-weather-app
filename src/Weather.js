import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [weather, setWeather] = useState({ loaded: false});
  const [city, setCity] = useState(props.defaultCity);

function showWeather(response) {
    setWeather({
      loaded: true,
      city: response.data.name,
      date: new Date(response.data.dt *1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
    });
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <div className="row search-bar-row">
        <div className="col-11 search-bar">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter a town or city"
              autoComplete="off"
              onChange={updateInput} 
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary search"
                type="submit"
              >
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="col-1 current-location">
          <div className="input-group-prepend">
            <button type="button" className="btn btn-light location">
              <i className="fas fa-location-arrow"></i>
            </button>
          </div>
        </div>
      </div>
    </form>
  )
  
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  
  function updateInput(event) {
    let updateInput = event.target.value;
    setCity(updateInput);
  }
  

          function search() {
          const apiKey = "528c21b30b50eb31aa5276a8d38b3d22";
          let unit = "metric";
          let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
          axios.get(apiUrl).then(showWeather);
            }

if (weather.loaded) {
  return (
    <div className="Weather">
      {form}
       <WeatherInfo data={weather}/>
    </div>
  );
} else {
    search();
    return "Loading...";
}
}
