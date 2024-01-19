import React, { useState, useEffect } from "react";

function Clock({ city, timeZone }) {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timerId);
  }, []);

  const formattedTime = date.toLocaleTimeString("sv-SE", {
    timeZone,
    hour12: false,
  });

  return (
    <div id="clock">
      <h1>{formattedTime} <br />
       </h1>
      <h2>{city}</h2>
    </div>
  );
}

export default Clock;
