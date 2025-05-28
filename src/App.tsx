import { useEffect, useState } from "react";
import { DisplayError } from "./components/DisplayError";
import { SearchInput } from "./components/SearchInput";
import { WeatherInfo } from "./components/WeatherInfo";
import MyContext from "./context/AppContext";
import type { ErrorResponse, WeatherData } from "./types";

function App() {
  const [city, setCity] = useState<string>("");
  const [weatherData, setWeatherData] = useState<WeatherData>();
  const [errorResponse, setErrorResponse] = useState<ErrorResponse>();

  useEffect(() => {
    const storedWeatherData = localStorage.getItem("weatherData");
    const storedCity = localStorage.getItem("city");
    if (storedWeatherData && storedCity) {
      const parsedWeatherData = JSON.parse(storedWeatherData);
      setWeatherData(parsedWeatherData);
      setCity(storedCity);
    }
  }, []);
  return (
    <>
      <MyContext.Provider
        value={{
          city,
          setCity,
          weatherData,
          setWeatherData,
          errorResponse,
          setErrorResponse,
        }}
      >
        <div
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            overflowY: "hidden",
          }}
        >
          <SearchInput />
          <DisplayError />
          <WeatherInfo />
        </div>
      </MyContext.Provider>
    </>
  );
}

export default App;
