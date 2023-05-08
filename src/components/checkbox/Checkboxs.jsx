import React from "react";
import "./Checkbox.css";

function Checkboxs({ rest }) {
  return (
    <div>
      <div className="checkBox">
        {/* Department field*/}
        <label htmlFor={rest.name}>{rest.label}</label>
        <div className="checkBoxDetail">
          {rest.department.map((d, i) => (
            <div key={i}>
              <label htmlFor={rest.name}>{d}</label>
              <input
                className="checkboxInput"
                id={rest.name}
                type={rest.type}
                name={rest.name}
                onChange={rest.handleChange}
                onBlur={rest.handleBlur}
                checked={
                  rest.value[rest.name].includes(d)
                    ? rest.value[rest.name].length <= 2
                      ? true
                      : rest.value[rest.name].shift()
                    : false
                }
                value={d}
              />
            </div>
          ))}
        </div>
      </div>
      {/* Error field*/}
      <p className="checkBoxError">
        {rest.errors[rest.name] && rest.touched[rest.name]
          ? rest.errors[rest.name]
          : null}
      </p>
    </div>
  );
}

export default Checkboxs;
