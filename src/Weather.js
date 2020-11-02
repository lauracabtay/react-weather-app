import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FormatDate from "./FormatDate";

export default function Weather() {
function showWeather(response) {
    setWeather({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt *1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
  }

  let [weather, setWeather] = useState({ loaded: false});
  let [city, setCity] = useState("");


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

  function updateInput(event) {
    event.preventDefault();
    let updateInput = event.target.value;
    setCity(updateInput);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "528c21b30b50eb31aa5276a8d38b3d22";
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(showWeather);
  }

if (weather.ready) {
  return (
    <div className="Weather">
      {form}
       <div className="Currentweather row current-weather">
         <div className="col-5">
        <h1>{weather.city}</h1>
        <h2 className="current-day">
          <FormatDate currentDate={weather.date} /></h2>
        <h2 className="current-weather">{weather.description}</h2>
      </div>
      <div className="col-1 current-weather">
        <img
          src={weather.icon}
          alt={weather.description}
          className="weather-icon"
        />
      </div>
      <div className="col-2 current-info">
        <p className="temperature">{Math.round(weather.temperature)}</p>
        <div
          className="btn-group degree-button"
          role="group"
          aria-label="Basic example"
        >
          <button type="button" className="btn btn-primary button-c">
            °C
          </button>
          <button type="button" className="btn btn-dark button-f">
            °F
          </button>
        </div>
      </div>
      <div className="col-3">
        <div className="row-humidity">
          <i className="fas fa-cloud-rain img-humidity img-humidity-large"></i>
          <span>
            <p className="p-humidity-large">{weather.humidity}%</p>
          </span>
        </div>
        <div className="row-wind">
          <i className="fas fa-wind img-wind img-wind-large"></i>
          <span>
            <p className="p-wind-large">{Math.round(weather.wind)} mph</p>
          </span>
        </div>
      </div>
    </div>
    </div>
  );
} else {
  return (
    <div>
    {form}
    Loading...
    </div>
  )
}
}
