/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function SelectField({ width, value, onChange, options, children }) {
  return (
    <div className="input-field flex justify-between gap-2">
      {children}
      <select
        className="aligns-start"
        style={{ width }}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options?.map((option) => (
          <option key={option.name} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectField;
