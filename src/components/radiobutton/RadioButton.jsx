import React from "react";
import "./Radiobutton.css";

function RadioButton({ rest }) {
  return (
    <div>
      {/* Gender field*/}
      <label className="label">{rest.label}</label>
      {rest.genders.map((g, i) => (
        <span key={i}>
          <label>{g}</label>
          <input
            value={g}
            type={rest.type}
            checked={rest.value[rest.name] === g ? true : false}
            name={rest.name}
            onChange={rest.handleChange}
            onBlur={rest.handleBlur}
          />
        </span>
      ))}

      <p className="error">
        {rest.errors[rest.name] && rest.touched[rest.name]
          ? rest.errors[rest.name]
          : null}
      </p>
    </div>
  );
}

export default RadioButton;
