import { useEffect, useState } from "react";

function AnalogClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const seconds = time.getSeconds() * 6;
  const minutes = time.getMinutes() * 6;
  const hours = time.getHours() * 30;

  return (
    <div className="clock">
      <div className="hand hour" style={{ transform: `rotate(${hours}deg)` }} />
      <div className="hand minute" style={{ transform: `rotate(${minutes}deg)` }} />
      <div className="hand second" style={{ transform: `rotate(${seconds}deg)` }} />
    </div>
  );
}

export default AnalogClock;
