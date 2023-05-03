import React from "react";
import "./Select.css";

function Selects({ rest }) {
  return (
    <div>
      {/* Branch field*/}
      <select
        name={rest.name}
        onChange={rest.handleChange}
        onBlur={rest.handleBlur}
        className="dropdown"
        value={rest.value[rest.name]}
      >
        {rest.options.map((b, i) => (
          <option key={i} value={b === "-- Select --" ? "" : b}>
            {b}
          </option>
        ))}
      </select>
      <p className="error">
        {rest.errors[rest.name] && rest.touched[rest.name]
          ? rest.errors[rest.name]
          : null}
      </p>
    </div>
  );
}

export default Selects;
