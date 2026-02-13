function Navbar({ setActiveTab, toggleTheme }) {
  return (
    <div className="navbar">
      <button onClick={() => setActiveTab("clock")}>Clock</button>
      <button onClick={() => setActiveTab("alarm")}>Alarm</button>
      <button onClick={() => setActiveTab("world")}>World Clock</button>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default Navbar;
