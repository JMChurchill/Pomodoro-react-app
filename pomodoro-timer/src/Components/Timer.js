import React from "react";

const Timer = ({ time }) => {
  // const theT = time;
  let formattedTime;
  if (time !== null) {
    formattedTime = time.toLocaleTimeString();
  }
  return (
    <section className="timer-section">
      <div className="outer-circle">
        <div className="inner-circle">
          <div className="timer">
            {/* <p>{time.toLocaleTimeString()}</p> */}
            <p>{formattedTime == null ? "00:00" : `${formattedTime}`}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timer;
