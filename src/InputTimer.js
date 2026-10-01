import React from "react";

const InputTimer = ({ handleInput, handleStart }) => {
  return (
    <>
      <div className="input-container">
        <div className="input-box">
          <input onChange={handleInput} id="hours" placeholder="HH" />
          <input onChange={handleInput} id="minutes" placeholder="MM" />
          <input onChange={handleInput} id="seconds" placeholder="SS" />
        </div>
        <div className="start-butoon">
          <button onClick={handleStart} className="timer-butoon">
            Start
          </button>
        </div>
      </div>
    </>
  );
};

export default InputTimer;
