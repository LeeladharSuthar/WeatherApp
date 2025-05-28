import { useContext, useState } from "react";
import MyContext from "../context/AppContext";
import styles from "./WeatherInfo.module.css";

const WeatherInfo = () => {
  const { weatherData, city } = useContext(MyContext);
  const [unit, setUnit] = useState<string>("K");

  const toggleUnit = () => {
    setUnit((prev) => (prev === "K" ? "C" : "K"));
  };

  if (!weatherData) return null;

  return (
    <div className={styles.weatherContainer}>
      <h3 className={styles.cityName}>{city}</h3>

      <p className={styles.timeInfo}>
        {new Date(weatherData.current.dt * 1000).toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })}
      </p>

      <p className={styles.tempToggle} onClick={toggleUnit}>
        {unit === "K"
          ? `${weatherData.current.temp} ${unit}`
          : `${(weatherData.current.temp - 273.15).toFixed(2)}°${unit}`}
      </p>

      <div className={styles.weatherDetails}>
        <p>Humidity: {weatherData.current.humidity}%</p>
        <p>Wind Speed: {weatherData.current.wind_speed} m/s</p>
        <p>{weatherData.current.weather[0].description}</p>
      </div>

      <img
        className={styles.weatherIcon}
        src={`https://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png`}
        alt="weather icon"
      />

      <div className={styles.dailyForecast}>
        {weatherData.daily.map((daily, index) => (
          <div
            key={index}
            title={daily.summary || ""}
            className={styles.dailyCard}
          >
            <p>
              {new Date(daily.dt * 1000).toLocaleDateString("en-IN", {
                timeZone: "Asia/Kolkata",
                weekday: "short",
                day: "2-digit",
                month: "short",
              })}
            </p>
            <img
              src={`https://openweathermap.org/img/wn/${daily.weather[0].icon}@2x.png`}
              alt="forecast icon"
            />
            <p>
              {unit === "K"
                ? `${daily.temp.day} ${unit}`
                : `${(daily.temp.day - 273.15).toFixed(2)}°${unit}`}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export { WeatherInfo };
