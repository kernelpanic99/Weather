import React from "react";
import "./WindWidget.css";

export default function WindWidget({
  windSpeed,
  windDirection,
  units,
  ...props
}) {
  function getWindUnits() {
    switch (units) {
      case "metric":
        return "m/s";
      case "imperial":
        return "mph";
      default:
        return "";
    }
  }

  return (
    <div className="wind-widget">
      <div className="wind-widget__gauge">
        <span className="wind-widget__label nord">N</span>
        <span className="wind-widget__label east">E</span>
        <span className="wind-widget__label south">S</span>
        <span className="wind-widget__label west">W</span>
        <div
          className="arrow"
          style={{ transform: `rotate(${windDirection}deg)` }}
        >
          <div className="arrow__top" />
        </div>
      </div>
      <h3 className="wind-widget__speed">
        {windSpeed} {getWindUnits()}
      </h3>
    </div>
  );
}
