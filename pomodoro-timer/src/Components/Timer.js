import React, { useState } from "react";

const Timer = ({
  time,
  isEditing,
  setIsEditing,
  setTimer,
  setIsStarted,
  setIsAlarmSound,
  completeTimers,
}) => {
  // const theT = time;
  // console.log(time);
  // const { hours, minutes, seconds } = time;
  const [secs, setSecs] = useState(0);
  const [mins, setMins] = useState(0);
  const [ho, setHo] = useState(0);

  if (time <= 0) {
    setIsStarted(false);
    setIsAlarmSound(true);
  }

  const secondsToHms = (value) => {
    // console.log(value);
    const sec = parseInt(value, 10); // convert value to number if it's string
    let hours = Math.floor(sec / 3600); // get hours
    let minutes = Math.floor((sec - hours * 3600) / 60); // get minutes
    let seconds = sec - hours * 3600 - minutes * 60; //  get seconds
    // add 0 if value < 10; Example: 2 => 02
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    return hours + ":" + minutes + ":" + seconds; // Return is HH : MM : SS
  };

  let formattedTime;
  if (time !== null) {
    console.log(time);
    formattedTime = secondsToHms(time);
    // formattedTime = `${hours}:${minutes}:${seconds}`;
  }
  const hmsToSeconds = () => {
    console.log(ho, mins, secs);
    return ho * 60 * 60 + mins * 60 + secs;
  };
  const newTimeSubmit = (e) => {
    e.preventDefault();
    console.log("updating timer");
    // setTimer();
    // console.log(hmsToSeconds());
    let totalS = hmsToSeconds();
    // console.log(totalS);
    setTimer(totalS);
    // setTimer();
    setIsEditing(false);
  };

  return (
    <section className="timer-section">
      {/* <p className="completed-timers">Completed: {completeTimers}</p> */}
      <div className="outer-circle">
        <div className="inner-circle">
          <div className="timer">
            {/* <p>{time.toLocaleTimeString()}</p> */}
            {isEditing ? (
              <form className="time-input" onSubmit={newTimeSubmit}>
                {/* <form onSubmit={newTimeSubmit}> */}
                <input
                  type="numbers"
                  name="hours"
                  id="hours"
                  onChange={(e) => setHo(e.target.value.replace(/\D/, ""))}
                  value={ho}
                  className="hours-input"
                ></input>
                <p className="colon">:</p>
                <input
                  type="numbers"
                  name="minutes"
                  id="minutes"
                  onChange={(e) => {
                    setMins(e.target.value.replace(/\D/, ""));
                  }}
                  value={mins}
                  className="minutes-input"
                ></input>
                <p className="colon">:</p>
                <input
                  type="numbers"
                  name="seconds"
                  id="seconds"
                  onChange={(e) => setSecs(e.target.value.replace(/\D/, ""))}
                  value={secs}
                  className="seconds-input"
                />
                <input type="submit" className="hidden-submit" />
              </form>
            ) : (
              // </div>
              <p onClick={() => setIsEditing(!isEditing)}>
                {formattedTime == null ? `00:00:00` : `${formattedTime}`}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timer;
