import React, { useState } from "react";
import "./App.css";


const FULL_NAME = "Neo Diaz";
const SECTION = "BSIT-DA3A";
const SUBJECT_CODE = "C-PCIT9";


const TITLE = "10 Things That Require Zero Talent";


const MESSAGES = {
  "1": "Being On Time",
  "2": "Making An Effort",
  "3": "Being High Energy",
  "4": "Having A Positive Attitude",
  "5": "Being Passionate",
  "6": "Using Good Body Language",
  "7": "Being Coachable",
  "8": "Doing A Little Extra",
  "9": "Being Prepared",
  "0": "Having A Strong Work Ethic",
  NAME: FULL_NAME.toUpperCase(),
  SUBJ: SUBJECT_CODE.toUpperCase(),
};


function Display({ value }) {
  return (
    <input
      className="display"
      type="text"
      value={value}
      disabled
    />
  );
}


function Button({ label, className = "", onClick }) {
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
}


export default function App() {
  const [display, setDisplay] = useState(TITLE);


  const handleClick = (key) => setDisplay(MESSAGES[key]);


  const keys = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "NAME", "0", "SUBJ"];


  return (
    <div className="container">
      <div className="calculator">
        <h1 className="header">
          {FULL_NAME.toUpperCase()} - {SECTION.toUpperCase()}
        </h1>
        <Display value={display} />
        <div className="buttons">
          {keys.map((k) => (
            <Button key={k} label={k} onClick={() => handleClick(k)} />
          ))}
        </div>
      </div>
    </div>
  );
}