import React from "react";
import "./Currentweather.css";

export default function Currentweather() {
  let weatherData = {
    city: "London",
    date: "Thursday, 20:05",
    description: "Rainy",
    image: "https://openweathermap.org/img/wn/10d@2x.png",
    temperature: "17",
    humidity: "70",
    wind: "30"
  };
  return (
    <div className="Currentweather row current-weather">
      <div className="col-5">
        <h1>{weatherData.city}</h1>
        <h2 className="current-day">{weatherData.date}</h2>
        <h2 className="current-weather">{weatherData.description}</h2>
      </div>
      <div className="col-1 current-weather">
        <img
          src={weatherData.image}
          alt={weatherData.description}
          className="weather-icon"
        />
      </div>
      <div className="col-2 current-info">
        <p className="temperature">{weatherData.temperature}</p>
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
            <p className="p-humidity-large">{weatherData.humidity}%</p>
          </span>
        </div>
        <div className="row-wind">
          <i className="fas fa-wind img-wind img-wind-large"></i>
          <span>
            <p className="p-wind-large">{weatherData.wind} mph</p>
          </span>
        </div>
      </div>
    </div>
  );
}
