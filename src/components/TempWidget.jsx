import React from "react";
import "./TempWidget.css";

export default function TempWidget({ acutalTemp, feelsLike, units, ...props }) {
  function getTempUnits() {
    switch (units) {
      case "metric":
        return "°C";
      case "imperial":
        return "°F";
      default:
        return "°K";
    }
  }

  return (
    <div className="temp-widget">
      <div>
        <h1 className="temp-widget__view">
          {parseFloat(acutalTemp).toFixed(0)}
          {getTempUnits()}
        </h1>
        <span className="temp-widget__feels-like">
          Feels like:&nbsp;{parseFloat(feelsLike).toFixed(0)}
          {getTempUnits()}
        </span>
      </div>
    </div>
  );
}
