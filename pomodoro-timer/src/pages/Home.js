import React, { useState, useEffect } from "react";

// import components
import ControlBar from "../Components/ControlBar";
import Timer from "../Components/Timer";
// import Navbar from "./Components/Navbar";

const Home = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [startTime, setStartTime] = useState(() => 45 * 60);
  const [time, setTime] = useState(() => startTime);
  // const [interval, setSInterval] = useState(null);

  useEffect(() => {
    let interval = null;
    if (isStarted) {
      interval = setInterval(() => {
        setTime((time) => time - 1);
        // console.log(seconds);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isStarted]);

  const setTimer = (se) => {
    // setTime(hours * 60 * 60 + minutes * 60, seconds * 60);
    setStartTime(se);
    console.log(`se: ${se}`);
    resetTimer();
    // setIsStarted(false);
  };

  const startTimer = () => {
    // console.log(isStarted);
    if (!isStarted) {
      console.log("timer started");
      setIsStarted(true);
    }
  };

  const stopTimer = () => {
    //   console.log(isStarted);
    if (isStarted) {
      console.log("timer stopped");
      setIsStarted(false);
    }
  };

  const resetTimer = () => {
    console.log("timer reset");
    setTime(startTime);
    setIsStarted(false);
  };

  return (
    <main>
      <Timer
        time={time}
        isStarted={isStarted}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        setTimer={setTimer}

        // seconds={seconds}
      />
      <ControlBar
        startTimer={startTimer}
        stopTimer={stopTimer}
        resetTimer={resetTimer}
        setTimer={setTimer}
      />
    </main>
  );
};

export default Home;
