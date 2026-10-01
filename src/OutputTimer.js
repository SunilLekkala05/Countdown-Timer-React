import React from "react";

const OutputTimer = ({
  hours,
  minutes,
  seconds,
  isPaused,
  handlePause,
  handleReset,
  handleResume,
}) => {
  return (
    <>
      <div className="show-contaienr">
        <div className="timer-box">
          <div className="timer-div">{hours < 10 ? `0${hours}` : hours}</div>
          <span>:</span>
          <div className="timer-div">
            {minutes < 10 ? `0${minutes}` : minutes}
          </div>
          <span>:</span>
          <div className="timer-div">
            {seconds < 10 ? `0${seconds}` : seconds}
          </div>
        </div>
        <div className="action-box">
          {!isPaused && (
            <button className="timer-button" onClick={handlePause}>
              Pause
            </button>
          )}
          {isPaused && (
            <button className="timer-button" onClick={handleResume}>
              Resume
            </button>
          )}
          <button className="timer-button" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default OutputTimer;
