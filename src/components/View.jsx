import React from "react";

import "./View.css";

const View = ({ value }) => {
  return (
    <div className="component-display">
      <div>{value}</div>
    </div>
  );
};

export default View;
