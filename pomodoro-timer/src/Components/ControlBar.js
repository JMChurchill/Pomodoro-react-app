import React from "react";
// import PropTypes from "prop-types";

const ControlBar = ({ startTimer, stopTimer, resetTimer }) => {
  return (
    <div className="control-bar">
      <h2>controls</h2>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Pause</button>
      <button onClick={resetTimer}>Restart</button>
    </div>
  );
};

// ControlBar.propTypes = {};

export default ControlBar;
