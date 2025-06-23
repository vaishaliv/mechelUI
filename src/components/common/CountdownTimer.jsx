import React, { useState, useEffect } from "react";

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date();
    const difference = new Date(targetDate) - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      return null; // Time has elapsed
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup on component unmount
  }, [targetDate]);

  if (!timeLeft) {
    return <div>Event has started or time has elapsed!</div>;
  }

  return (
    <div>
      <p>
        {timeLeft.days} Days, {timeLeft.hours} Hours, {timeLeft.minutes}{" "}
        Minutes, {timeLeft.seconds} Seconds
      </p>
    </div>
  );
};

export default CountdownTimer;
