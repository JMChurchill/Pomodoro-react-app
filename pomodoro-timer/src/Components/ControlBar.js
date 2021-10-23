import React from "react";
// import PropTypes from "prop-types";

const ControlBar = ({
  startTimer,
  stopTimer,
  resetTimer,
  isAlarm,
  cancelAlarm,
}) => {
  const stopAlarm = () => {
    cancelAlarm(false);
    resetTimer();
  };
  return (
    <div className="control-bar">
      {isAlarm ? (
        <button onClick={stopAlarm}>Stop</button>
      ) : (
        <>
          <h2>controls</h2>
          <button onClick={startTimer}>Start</button>
          <button onClick={stopTimer}>Pause</button>
          <button onClick={resetTimer}>Restart</button>
        </>
      )}
    </div>
  );
};

// ControlBar.propTypes = {};

export default ControlBar;
