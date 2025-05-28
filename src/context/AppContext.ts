import { createContext } from "react";
import type { ErrorResponse, WeatherData } from "../types";

type ContextType = {
  city: string;
  setCity: (location: string) => void;
  weatherData: WeatherData | undefined;
  setWeatherData: (data: WeatherData | undefined) => void;
  errorResponse: ErrorResponse | undefined;
  setErrorResponse: (data: ErrorResponse | undefined) => void;
};
const MyContext = createContext<ContextType>({
  city: "",
  setCity: () => {},
  weatherData: undefined,
  setWeatherData: () => {},
  errorResponse: undefined,
  setErrorResponse: () => {},
});

export default MyContext;
