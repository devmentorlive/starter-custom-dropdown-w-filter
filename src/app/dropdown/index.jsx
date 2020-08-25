import React, { useState, useEffect, useRef } from "react";

import "./styles.css";

export default function Dropdown({
  value,
  onChange,
  options,
  label,
}) {
  const [open, setOpen] = useState(false);
  const ddRef = useRef(null);

  useEffect(() => {
    addClickHandlers();
    return () => removeClickHandlers();
  }, []);

  function addClickHandlers() {
    ["click", "touchend"].map((e) =>
      document.addEventListener(e, toggle, false)
    );
  }

  function removeClickHandlers() {
    ["click", "touchend"].map((e) =>
      document.addEventListener(e, toggle, false)
    );
  }

  function toggle(e) {
    setOpen(e && e.target === ddRef.current);
  }

  return (
    <div style={{ width: "200px" }}>
      <div className="dropdown">
        <div className="control">
          <div
            className="selected-value"
            ref={ddRef}
            onClick={toggle}
          >
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
                toggle();
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
