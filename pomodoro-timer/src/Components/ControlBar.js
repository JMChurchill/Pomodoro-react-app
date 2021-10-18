import React from "react";
import PropTypes from "prop-types";

const ControlBar = (props) => {
  return (
    <div className="control-bar">
      <h2>controls</h2>
      <button>Start</button>
      <button>Pause</button>
      <button>Restart</button>
    </div>
  );
};

ControlBar.propTypes = {};

export default ControlBar;
