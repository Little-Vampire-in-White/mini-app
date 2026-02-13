function WorldClock() {
  const cities = [
    { name: "New York", zone: "America/New_York" },
    { name: "London", zone: "Europe/London" },
    { name: "Tokyo", zone: "Asia/Tokyo" },
    { name: "Manila", zone: "Asia/Manila" }
  ];

  return (
    <div>
      <h3>World Clock</h3>
      {cities.map((city) => (
        <p key={city.name}>
          {city.name}:{" "}
          {new Date().toLocaleTimeString("en-US", {
            timeZone: city.zone,
          })}
        </p>
      ))}
    </div>
  );
}

export default WorldClock;
