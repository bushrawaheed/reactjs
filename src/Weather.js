import React from "react";
import "./App.css";

export default function Weather() {
  let weatherData = {
    city: "Munich",
    temperature: 19,
    date: "Tuesday 10:00",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 80,
    wind: 10,
    Temp_min: 20,
    Temp_max: 25
  };
  return (
    <div className="container">
      <div class="weather-widget">
        <div className="weather">
          <form className="mb-4">
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Search a city..."
                  className="form-control"
                  autocomplete="off"
                />
              </div>
              <div className="col-3">
                <button type="submit" className="btn btn-primary">
                  Search
                </button>
              </div>
            </div>
          </form>
          <div className="overview">
            <h1>{weatherData.city}</h1>
            <ul>
              <li className="current-date">Last updated:{weatherData.date}</li>
              <li className="description">{weatherData.description}</li>
            </ul>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="imagefix weather-temperature">
                <img
                  src={weatherData.imgUrl}
                  alt={weatherData.description}
                  id="icon"
                />
                <strong>{weatherData.temperature}</strong>
                <span className="units">
                  <a href="/" class="active">
                    °C|
                  </a>
                  <a href="/">°F</a>
                </span>
              </div>
            </div>
            <div className="col-6">
              <ul className="weather-description">
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {weatherData.wind} km/h</li>
                <li>Temp_min: {weatherData.Temp_min}</li>
                <li>Temp_max: {weatherData.Temp_max}</li>
              </ul>
            </div>
          </div>

          <small>
            <a
              href="https://github.com/bushrawaheed/Weather-Forecast-app"
              target="blank"
              className="git-link"
            >
              Open source code,
            </a>
            <em>by Bushra Waheed</em>
          </small>
        </div>
      </div>
    </div>
  );
}
