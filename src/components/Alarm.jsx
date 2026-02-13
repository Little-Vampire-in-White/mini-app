import { useState, useEffect } from "react";

function Alarm() {
  const [alarmTime, setAlarmTime] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formatted = now.toTimeString().slice(0,5);
      setCurrentTime(formatted);

      if (formatted === alarmTime) {
        alert("⏰ Alarm Ringing!");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [alarmTime]);

  return (
    <div>
      <h3>Set Alarm</h3>
      <input
        type="time"
        onChange={(e) => setAlarmTime(e.target.value)}
      />
      <p>Current Time: {currentTime}</p>
    </div>
  );
}

export default Alarm;
