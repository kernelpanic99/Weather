import React, { useState } from "react";
import "./Header.css";
import RadioGroup from "./RadioGroup";

/**
 * @param {string} city
 * @param {string} country
 * @param {Date} date
 */
export default function Header({
  city,
  country,
  date,
  locationSetter,
  units,
  unitsSetter,
  ...props
}) {
  const [showInput, setShowInput] = useState(false);

  function commitLocation(event) {
    if (event.key === "Enter" || event.keyCode === 13) {
      locationSetter(event.target.value);
      setShowInput(false);
    } else if (event.keyCode === 27 || event.key === "Escape") {
      setShowInput(false);
    }
  }

  function locationView() {
    if (showInput) {
      return (
        <input
          autoFocus
          type="text"
          className="location-input"
          placeholder={city}
          onKeyUp={commitLocation}
          onBlur={(e) => {
            setShowInput(false);
          }}
        />
      );
    } else {
      return (
        <span className="header__location" onClick={() => setShowInput(true)}>
          {city}, {country}
        </span>
      );
    }
  }

  return (
    <header className="header" {...props}>
      <div className="header__layout">
        {locationView()}
        <span className="header__date">{date.toLocaleString()}</span>
      </div>
      <RadioGroup
        name="units"
        values={["metric", "imperial"]}
        def={units}
        changeHandler={(event) => {
          unitsSetter(event.target.value);
        }}
      />
    </header>
  );
}
