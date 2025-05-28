export class WeatherApiService {
  private readonly key: string;
  constructor() {
    this.key = import.meta.env.VITE_API_KEY;
  }
  async getLatAndLon(location: string) {
    const baseUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=${this.key}`;
    try {
      const data = await fetch(baseUrl);
      const response = await data.json();
      return response;
    } catch (error) {
      throw Error("Can't get latitude and longitude")
    }
  }

  async getWeatherData(lat: string, lon: string) {
    const baseUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}6&lon=${lon}&exclude=minutely,hourly,&appid=${this.key}`;
    try {
      const data = await fetch(baseUrl);
      const response = await data.json();
      return response;
    } catch (error) {
      throw Error("Error while fetching weather data")
    }
  }
}
