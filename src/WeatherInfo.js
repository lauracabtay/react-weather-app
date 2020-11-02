import React from "react";
import FormatDate from "./FormatDate";
import "./WeatherInfo.css";



export default function WeatherInfo(props) {
   return (<div className="WeatherInfo Currentweather row current-weather">
         <div className="col-5">
        <h1>{props.data.city}</h1>
        <h2 className="current-day">
          <FormatDate currentDate={props.data.date} /></h2>
        <h2 className="current-weather">{props.data.description}</h2>
      </div>
      <div className="col-1 current-weather">
        <img
          src={props.data.icon}
          alt={props.data.description}
          className="weather-icon"
        />
      </div>
      <div className="col-2 current-info">
        <p className="temperature">{Math.round(props.data.temperature)}</p>
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
            <p className="p-humidity-large">{props.data.humidity}%</p>
          </span>
        </div>
        <div className="row-wind">
          <i className="fas fa-wind img-wind img-wind-large"></i>
          <span>
            <p className="p-wind-large">{Math.round(props.data.wind)} mph</p>
          </span>
        </div>
      </div>
    </div>
   )
}