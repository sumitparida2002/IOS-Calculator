import React from "react";

import "./Button.css";

const Button = ({ name, orange, grey, handleClick }) => {
  const className = [
    "component-button",
    orange ? "orange" : "",
    grey ? "grey" : "",
  ];
  return (
    <div className={className.join(" ").trim()}>
      <button onClick={() => handleClick(name)}>{name}</button>
    </div>
  );
};

export default Button;
