import React, { useEffect, useState } from "react";
import "./App.css";
import fetchWeather from "./api/OpenWeatherMapApi";
import weatherAdapter from "./data/OpenWeatherAdapter";
import * as storage from "./storage/WeatherStorage";

import Header from "./components/Header";
import TempWidget from "./components/TempWidget";
import WindWidget from "./components/WindWidget";

export default function App() {
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState("imperial");
  const [city, setCity] = useState("Odessa");

  useEffect(() => {
    if (
      storage.isFresh() &&
      !storage.isDifferentLocation(city) &&
      !storage.isDifferentUnits(units)
    ) {
      setWeather(storage.fetch());
    } else {
      fetchWeather(weatherAdapter, city, units).then((res) => {
        setWeather(res);
        storage.store(res);
      });
    }
  }, [city, units]);

  if (weather) {
    return (
      <div className="App">
        <main>
          <Header
            country={weather.location.country}
            city={weather.location.city}
            date={new Date().toLocaleString()}
            locationSetter={setCity}
            units={units}
            unitsSetter={setUnits}
          />
          <div>
            <span className="condition">
              {weather.condition.map((cond, index) => {
                if (index !== weather.condition.length - 1)
                  return cond.description + ", ";
                else return cond.description + ".";
              })}
            </span>
            <hr />
            <div className="widget-layout">
              <TempWidget
                acutalTemp={weather.temp}
                feelsLike={weather.feelsLike}
                units={units}
              />
              <div className="weather-data">
                <span className="label">Humidity: {weather.humidity}%</span>
                <span className="label">Pressure: {weather.pressure} hPa</span>
                <span className="label">
                  Visibility: {weather.visibility} km
                </span>
                <span className="label">
                  Cloudiness: {weather.cloudiness} %
                </span>
              </div>
              <WindWidget
                windDirection={weather.wind.direction}
                units={units}
                windSpeed={weather.wind.speed}
              />
            </div>
            <hr />
          </div>
        </main>
      </div>
    );
  } else {
    return <h1>No data</h1>;
  }
}
