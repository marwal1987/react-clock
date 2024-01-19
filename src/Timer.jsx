import React, { useState, useEffect } from "react";

function Timer({ startingTime, title }) {
  const [time, setTime] = useState(startingTime);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let timerId;

    if (!isPaused) {
      timerId = setInterval(() => {
        setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
    }

    return () => clearInterval(timerId);
  }, [isPaused]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const handleStartPauseClick = () => {
    setIsPaused((prevIsPaused) => !prevIsPaused);
  };

  return (
    <div id="timer">
      <h1>{`${minutes}:${seconds < 10 ? "0" : ""}${seconds}`}
      </h1>
      
      <h2>{title}</h2>
      <button onClick={handleStartPauseClick}>
        {isPaused ? "Resume" : "Pause"}
      </button>
    </div>
  );
}

export default Timer;
