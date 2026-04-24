import { useState, useEffect, useRef, useContext, useCallback } from "react";
import WeatherContext from "./WeatherContext";

function Weather() {
  
  const [city, setCity] = useState("Trivandrum");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);


  const inputRef = useRef();

  
  const theme = useContext(WeatherContext);

  const url = "https://api.openweathermap.org/data/2.5/weather";
  const apiKey = "f00c38e0279b7bc85480c3fe775d518c";

  
  const fetchWeather = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `${url}?q=${city}&appid=${apiKey}&units=metric`
      );
      const result = await res.json();
      setData(result);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }, [city]);

  
  useEffect(() => {
    fetchWeather();
  }, [fetchWeather]);

 
  const handleSearch = () => {
    setCity(inputRef.current.value);
  };

  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: theme === "dark" ? "black" : "white",
        color: theme === "dark" ? "white" : "black",
        height: "100vh"
      }}
    >
      <h2>Weather App</h2>

      <input ref={inputRef} placeholder="Enter city" />
      <button onClick={handleSearch}>Search</button>

      {loading && <p>Loading...</p>}

      {data && data.main && (
        <div>
          <h3>{data.name}</h3>
          <p>Temperature: {data.main.temp} °C</p>
          <p>Humidity: {data.main.humidity}</p>
          <p>Condition: {data.weather[0].main}</p>
        </div>
      )}
    </div>
  );
}

export default Weather;