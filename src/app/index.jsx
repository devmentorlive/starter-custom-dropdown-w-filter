import React, { useState } from "react";
import countries from "./countries.json";
import Dropdown from "./dropdown";

export default function App() {
  const [value, setValue] = useState(null);
  return (
    <Dropdown
      prompt="Select country"
      value={value}
      onChange={setValue}
      options={countries}
      label="name"
    />
  );
}
