import React from "react";
import "../style/switch-toggle.scss";

function SwitchToggle({ checked }) {
  return (
    <div className="toggle-wrap mt-4 mt-lg-0">
      <input
        name="switch"
        id="switch"
        type="checkbox"
        role="switch"
        checked={checked}
      />
      <label htmlFor="switch"></label>
    </div>
  );
}

export default SwitchToggle;
