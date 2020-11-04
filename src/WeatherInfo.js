import React from "react";
import FormatDate from "./FormatDate";
import "./WeatherInfo.css";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";



export default function WeatherInfo(props) {
   return (<div className="WeatherInfo Currentweather row current-weather">
         <div className="col-4.5">
        <h1>{props.data.city}</h1>
        <h2 className="current-day">
          <FormatDate currentDate={props.data.date} /></h2>
        <h2 className="current-weather">{props.data.description}</h2>
      </div>
      <div className="col-1 current-weather-icon">
        <WeatherIcon code={props.data.icon}/>
      </div>
 
        <WeatherTemperature celsius={props.data.temperature} />
      <div className="col-2 humidity-wind">
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