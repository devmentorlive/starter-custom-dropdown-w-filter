import React, { useState } from "react";

import "./styles.css";

export default function Dropdown({
  value,
  onChange,
  options,
  label,
}) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ width: "200px" }}>
      <div className="dropdown">
        <div className="control" onClick={() => setOpen(!open)}>
          <div className="selected-value">
            {value ? value[label] : "Select country"}
          </div>
          <div className={`arrow ${open ? "open" : ""}`} />
        </div>
        <div className={`options ${open ? "open" : ""}`}>
          {options.map((option) => (
            <div
              className={`option ${
                value === option ? "selected" : ""
              }`}
              onClick={() => {
                onChange(option);
                setOpen(false);
              }}
            >
              {option[label]}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
