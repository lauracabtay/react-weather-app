import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Weather from "./Weather";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card c-main">
          <div className="card-body cb-main">
            <Weather defaultCity="London"/>
          </div>
          <Forecast />
        </div>
      </div>
      <Footer />
      <script src="src/script.js"></script>
    </div>
  );
}
