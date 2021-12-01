import React, { useState } from "react";
// import PropTypes from "prop-types";

const ControlBar = ({
  startTimer,
  stopTimer,
  resetTimer,
  isAlarm,
  cancelAlarm,
  breakTime,
  setBreakTime,
  startBreak,
}) => {
  const [mins, setMins] = useState(breakTime);

  const stopAlarm = () => {
    cancelAlarm(false);
    resetTimer();
  };
  const beginBreak = () => {
    cancelAlarm(false);
    startBreak();
  };
  const setBTime = (e) => {
    e.preventDefault();
    console.log("set break time");
    console.log("minutes ====== " + mins);
    setBreakTime(mins);
  };
  return (
    <div className="control-bar">
      {isAlarm ? (
        <>
          <button onClick={stopAlarm}>Stop</button>
          <button onClick={beginBreak}>Start Break</button>
        </>
      ) : (
        <>
          <h2>controls</h2>
          <button onClick={startTimer}>Start</button>
          <button onClick={stopTimer}>Pause</button>
          <button onClick={resetTimer}>Restart</button>
          {/* <p>Study Time: </p> */}
          <form className="break-input" onSubmit={setBTime}>
            <label for="fminutes">Break Time: </label>
            <input
              type="numbers"
              name="minutes"
              id="fminutes"
              onChange={(e) => setMins(e.target.value.replace(/\D/, ""))}
              value={mins}
              className="minutes-input"
            ></input>
            <input type="submit" value="Set Break" className="btn" />
          </form>
        </>
      )}
    </div>
  );
};

// ControlBar.propTypes = {};

export default ControlBar;
