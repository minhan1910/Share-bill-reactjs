/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function Button({  customPadding, textColor, bgColor, onClick, children }) {
  return (
    <button
      className="btn"
      style={{
        color: textColor,
        backgroundColor: bgColor,
        padding: customPadding 
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
