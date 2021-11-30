import React, { useState } from "react";

const Timer = ({
  time,
  isEditing,
  setIsEditing,
  setTimer,
  setIsStarted,
  setIsAlarmSound,
  completeTimers,
  startTime,
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
    // console.log("start" + startTime);
    let per = time / startTime;
    let rotate = 360 - per * 360;
    // console.log("percentage gone: " + per + "\nrotate: " + rotate);
    const halfCircles = document.querySelectorAll(".half-circle");
    const halfCircleTop = document.querySelector(".half-circle-top");
    // console.log(halfCircles);
    halfCircles.forEach((cir) => {
      cir.style.transform = `rotate(${rotate}deg)`;
      console.log(rotate);
      if (rotate >= 180) {
        console.log("> = 180");
        halfCircles[0].style.transform = `rotate(180deg)`;
        halfCircleTop.style.opacity = "0";
      } else {
        halfCircleTop.style.opacity = "1";
      }
    });

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
    const halfCircles = document.querySelectorAll(".half-circle");
    const halfCircleTop = document.querySelector(".half-circle-top");
    console.log(startTime);
    halfCircles.forEach((cir) => {
      cir.style.transform = `rotate(0deg)`;
    });
    halfCircleTop.style.opacity = "0";
  };

  return (
    <section className="timer-section">
      {/* <p className="completed-timers">Completed: {completeTimers}</p> */}
      <div className="outer-circle">
        <div className="half-circle"></div>
        <div className="half-circle"></div>
        <div className="half-circle-top"></div>
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
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 100 100"
        // width="100"
        // height="100"
        width="2000"
        height="2000"
      >
        <defs>
          <linearGradient id="GradientColor">
            <stop offset="0%" stop-color="#e91e63" />
            <stop offset="100%" stop-color="#673ab7" />
          </linearGradient>
        </defs>
        <circle cx="80" cy="80" r="70" stroke-linecap="round" />
      </svg> */}
    </section>
  );
};

export default Timer;
