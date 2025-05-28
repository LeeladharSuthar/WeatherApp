# 🌤 Weather Forecast App

A modern React + Vite weather application using OpenWeatherMap APIs. It includes real-time location search with debounce, current weather details, 7-day forecast, and beautiful dropdown UI—all styled with CSS Modules.

---

## 🚀 Features

- 🌍 Search cities with live suggestions
- 📍 Displays city coordinates (lat/lon) in formatted direction
- 🌤 Shows current weather and a 7-day forecast
- ♻️ Toggle temperature between Kelvin and Celsius
- 🧠 State management using React Context API
- 💾 Weather data persisted using `localStorage`
- ⌛️ Optimized API calls with a custom `useDebounce` hook

---

## 🛠️ Technologies

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [OpenWeatherMap API](https://openweathermap.org/api)

---

## 📦 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app
```
### 2. Install Dependencies

```bash
yarn install
```
### 3. Set-up env variable

```bash
VITE_API_KEY=<your_weather_api_key>
```
### 4. Start the Development Server

```bash
yarn dev
```
