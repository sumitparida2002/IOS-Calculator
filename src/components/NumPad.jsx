import React from "react";

import "./NumPad.css";
import Button from "./Button";

const NumPad = ({ handleClick }) => {
  return (
    <div className="grid-container">
      <Button name="AC" grey handleClick={handleClick} />
      <Button name="+/-" grey handleClick={handleClick} />
      <Button name="%" grey handleClick={handleClick} />
      <Button name="÷" orange handleClick={handleClick} />
      <Button name="7" handleClick={handleClick} />
      <Button name="8" handleClick={handleClick} />
      <Button name="9" handleClick={handleClick} />
      <Button name="x" orange handleClick={handleClick} />
      <Button name="4" handleClick={handleClick} />
      <Button name="5" handleClick={handleClick} />
      <Button name="6" handleClick={handleClick} />
      <Button name="-" orange handleClick={handleClick} />
      <Button name="1" handleClick={handleClick} />
      <Button name="2" handleClick={handleClick} />
      <Button name="3" handleClick={handleClick} />
      <Button name="+" orange handleClick={handleClick} />
      <div className="wide">
        <Button name="0" handleClick={handleClick} />
      </div>
      <Button name="." handleClick={handleClick} />
      <Button name="=" orange handleClick={handleClick} />
    </div>
  );
};

export default NumPad;
