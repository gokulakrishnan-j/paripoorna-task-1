import React from "react";
import "./Button.css";

function Button({ rest }) {
  return (
    <div>
      {/* Submit button*/}
      <button className="button" type={rest.type}>
        {rest.value}
      </button>
    </div>
  );
}

export default Button;
