import React, { useEffect } from "react";
import "./RadioGroup.css";

export default function RadioGroup({
  name,
  values,
  def,
  changeHandler,
  ...props
}) {
  function radioContainer(value) {
    let label, val;

    if (typeof value === "object") {
      label = value.label;
      val = value.value;
    } else if (typeof value === "string") {
      val = value;
    }

    return (
      <label className="radio__container" key={val}>
        <input
          type="radio"
          name={name}
          value={val}
          checked={val === def}
          onChange={changeHandler}
        />
        <span className="radio__button">{val}</span>
      </label>
    );
  }

  return (
    <div className="radio">{values.map((val) => radioContainer(val))}</div>
  );
}
