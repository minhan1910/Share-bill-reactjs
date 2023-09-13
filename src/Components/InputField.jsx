/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function InputField({
  type = "text",  
  value,
  onChange,
  children,
  width = '',
  customClass,
  disabled = false
}) {
  return (
    <div className="input-field flex justify-between gap-2">
      {children}
      <input        
        className={`aligns-start ${customClass}`}
        style={{ width }}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
      />
    </div>
  );
}

export default InputField;
