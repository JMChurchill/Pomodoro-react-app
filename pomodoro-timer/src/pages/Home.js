import React, { useState } from "react";

// import components
import ControlBar from "../Components/ControlBar";
import Timer from "../Components/Timer";
// import Navbar from "./Components/Navbar";

const Home = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [time, setTime] = useState(null);
  const [interval, setSInterval] = useState(null);
  let clock, offset;

  const myTimer = () => {
    console.log(isStarted);
    console.log("timeUpdate");
    setTime(() => new Date());
    console.log(time);
  };
  // // default options
  // var options = options || {};
  // options.delay = options.delay || 1;

  const startTimer = () => {
    // console.log(isStarted);
    if (!isStarted) {
      setSInterval(setInterval(myTimer, 1000));
      console.log(`interval: ${interval}`);

      console.log("timer started");
      setIsStarted(true);
      console.log(isStarted);
    }
  };

  const stopTimer = () => {
    if (isStarted) {
      console.log("timer stopped");
      console.log(interval);
      setSInterval(clearInterval(interval));
      // clearInterval(interval);
      console.log(interval);
      setIsStarted(false);
      //   console.log(isStarted);
    }
  };

  const resetTimer = () => {
    console.log("timer reset");
    setSInterval(clearInterval(interval));
    setTime(null);
    setIsStarted(false);
  };

  React.useEffect(() => {
    // setTime(() => Date.now());
    // setTime(time - new Date());
    // clock / 1000;
    // interval = setInterval(myTimer, 1000);
    // console.log(time);
  }, []);

  return (
    <main>
      <Timer time={time} />
      <ControlBar
        startTimer={startTimer}
        stopTimer={stopTimer}
        resetTimer={resetTimer}
      />
    </main>
  );
};

export default Home;
