import { useState } from "react";
import "./App.css";
import DigitalClock from "./components/DigitalClock";
import AnalogClock from "./components/AnalogClock";
import Alarm from "./components/Alarm";
import WorldClock from "./components/WorldClock";
import Navbar from "./components/Navbar";

function App() {
  const [activeTab, setActiveTab] = useState("clock");
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app ${darkMode ? "dark" : "light"}`}>
      <h1>WORLD CLOCK</h1>

      <Navbar setActiveTab={setActiveTab} toggleTheme={toggleTheme} />

      <div className="card">
        {activeTab === "clock" && (
          <>
            <DigitalClock />
            <AnalogClock />
          </>
        )}

        {activeTab === "alarm" && <Alarm />}

        {activeTab === "world" && <WorldClock />}
      </div>
    </div>
  );
}

export default App;
