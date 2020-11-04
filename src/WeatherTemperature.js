import React, {useState} from "react";

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState("celsius");

function convertToF(event) {
event.preventDefault();
setUnit("fahrenheit");
    }

function convertToC(event) {
        event.preventDefault();
        setUnit("celsius");
    }

function fahrenheit() {
        return (props.celsius *9 / 5 + 32);
    }

if (unit === "celsius") {
return(
<div className="WeatherTemperature col-1 current-info">
    <p className="temperature">{Math.round(props.celsius)}</p>
<span className="unit col-3">
            °C  | { " " }
            <a href="/" onClick={convertToF}>
            °F
            </a>
    </span>
</div>
)
} else {
    return ( <div className="WeatherTemperature col-1 current-info">
    <p className="temperature">{Math.round(fahrenheit())}</p>
    <span className="unit col-3">
            <a href="/" onClick={convertToC}>
            °C</a> | { " " }
            °F
            </span>
    </div>
    )
}
}