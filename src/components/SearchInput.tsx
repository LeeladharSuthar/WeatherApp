import { useContext, useEffect, useState } from "react";
import { WeatherApiService } from "../api";
import MyContext from "../context/AppContext";
import useDebounce from "../hooks/useDebounce";
import type { OptionsList } from "../types";
import styles from './SearchInput.module.css';
const SearchInput = () => {
  const api = new WeatherApiService();
  const { city, setCity, setWeatherData, setErrorResponse } = useContext(MyContext);
  const [selectedCity, setSelectedCity] = useState<OptionsList | undefined>(
    undefined
  );
  const [optionsList, setOptionsList] = useState<OptionsList[] | undefined>(
    undefined
  );
  useDebounce(
    () => {
      if (city) {
        api.getLatAndLon(city).then((response) => {
          setOptionsList(response);
        }).catch((error)=>{
          setErrorResponse({cod: "500", message: error.message})
        })
      } else if (city === "") {
        setOptionsList(undefined);
      }
    },
    [city],
    500
  );
  useEffect(() => {
    if (selectedCity) {
      const lat: string = String(selectedCity.lat);
      const lon: string = String(selectedCity.lon);
      api.getWeatherData(lat, lon).then((response) => {
        if(response.message){
          setErrorResponse(response)
        }else{
          setWeatherData(response)
          localStorage.setItem("weatherData", JSON.stringify(response));
          localStorage.setItem("city", city);
        }
      }).catch((error)=>{
        setErrorResponse({cod: "500", message: error.message})
      })
    }
  }, [selectedCity]);

  const formatCoord = (value: number, type: "lat" | "lon") => {
    const abs = Math.abs(value).toFixed(2); // 2 decimal places for dropdown
    const direction =
      type === "lat" ? (value >= 0 ? "N" : "S") : value >= 0 ? "E" : "W";
    return `${abs}° ${direction}`;
  };

  return (
    <>
      <div className={styles.inputWrapper}>
        <input
          type="text"
          placeholder="Search..."
          className={styles.searchInput}
          onChange={(e) => {
            setCity(e.target.value);
          }}
          value={city}
        />
        { localStorage.getItem("city")!==city && optionsList && optionsList.length > 0 && (
          <ul className={styles.dropdown}>
            {optionsList.map((city) => (
              <li
                key={`${city.lat}-${city.lon}`}
                onClick={() => {
                  setSelectedCity(city);
                  setCity(city.name)
                  setOptionsList(undefined)
                }}
              >
                {`${city.name}, ${city.state}, ${city.country}`}
                <small>{`Lat: ${formatCoord(
                  city.lat,
                  "lat"
                )}, Lon: ${formatCoord(city.lon, "lon")}`}</small>
              </li>
            ))}
          </ul>
        )}
        </div>
    </>
  );
};

export { SearchInput };
