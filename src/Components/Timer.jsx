import React, { useState, useEffect, useCallback } from "react";

function CountdownTimer({ targetDate }) {
  const calculateTimePassed = useCallback(() => {
    const now = new Date();
    const timeDifference = now - targetDate;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }, [targetDate]);

  const [countup, setCountup] = useState(calculateTimePassed);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountup(calculateTimePassed);
    }, 1000);

    return () => clearInterval(interval);
  }, [calculateTimePassed]);

  return (
    <div className="bg-nav-black p-[17px] text-center font-bold text-white font-abril-fatface font-rubik">
      {`The last fight was: 
        ${countup.days > 0 ? `${countup.days} days,` : ""} 
        ${countup.hours > 0 ? `${countup.hours} hours,` : ""} 
        ${countup.minutes > 0 ? `${countup.minutes} minutes,` : ""} 
        ${countup.seconds} seconds ago`}
    </div>
  );
}

export default CountdownTimer;
