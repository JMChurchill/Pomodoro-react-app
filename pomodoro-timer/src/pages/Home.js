import React, { useState, useEffect } from "react";

// import components
import ControlBar from "../Components/ControlBar";
import Timer from "../Components/Timer";
//import alarm sound
import alarm from "../Alarm.mp3";
// import Navbar from "./Components/Navbar";

const Home = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [startTime, setStartTime] = useState(() => 5);
  const [time, setTime] = useState(() => startTime);
  const [isAlarm, setIsAlarm] = useState(false);
  const [completeTimers, setCompleteTimers] = useState(0);
  const [breakTime, setBreakTime] = useState(6);
  const [isBreakTimer, setIsBreakTimer] = useState(false);
  const [studyCount, setStudyCount] = useState(0);
  // const [interval, setSInterval] = useState(null);
  const audio = new Audio(alarm);

  useEffect(() => {
    let interval = null;
    if (isStarted) {
      interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    } else {
      if (isAlarm) {
        soundAlarm();
      }
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isStarted, isAlarm]);

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
    setIsAlarm(false);
  };

  const soundAlarm = () => {
    audio.play();
  };

  const cancelAlarm = () => {
    audio.pause();
    audio.currentTime = 0;
    setIsAlarm(() => !isAlarm);
    console.log(isAlarm);
    if (isBreakTimer) {
      setIsBreakTimer(false);
    } else {
      setStudyCount((studyCount) => studyCount + 1);
    }
  };

  const startBreak = () => {
    console.log("beakTime---====" + breakTime);
    setTime(breakTime);
    setIsBreakTimer(true);
    setIsStarted(true);
  };

  return (
    <main>
      {!isBreakTimer ? <h1>Study Timer</h1> : <h1>Break Timer</h1>}
      <h2> Study Count {studyCount}</h2>
      <Timer
        time={time}
        isStarted={isStarted}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        setTimer={setTimer}
        setIsStarted={setIsStarted}
        setIsAlarmSound={setIsAlarm}
        completeTimers={completeTimers}
        startTime={startTime}
        // seconds={seconds}
        isBreakTimer={isBreakTimer}
        breakTime={breakTime}
      />
      <ControlBar
        startTimer={startTimer}
        stopTimer={stopTimer}
        resetTimer={resetTimer}
        // setTier={setTimer}
        isAlarm={isAlarm}
        cancelAlarm={cancelAlarm}
        breakTime={breakTime}
        setBreakTime={setBreakTime}
        startBreak={startBreak}
      />
    </main>
  );
};

export default Home;
