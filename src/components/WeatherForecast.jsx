import React, { useEffect, useState } from "react";

const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const emojiForCode = (code) => {
  if ([0].includes(code)) return "☀️";
  if ([1, 2].includes(code)) return "⛅️";
  if ([3].includes(code)) return "☁️";
  if ([45, 48].includes(code)) return "🌫️";
  if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code)) return "☂️";
  if ([71, 73, 75, 77, 85, 86].includes(code)) return "❄️";
  if ([95, 96, 99].includes(code)) return "⛈️";
  return "🌡️";
};

const WeatherForecast = () => {
  const [forecast, setForecast] = useState([]);
  const [city, setCity] = useState("Manali");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async (cityName) => {
    setLoading(true);
    setError("");
    try {
      // Step 1: Get lat/lon from city using Open-Meteo geocoding
      const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${cityName}`);
      const geoData = await geoRes.json();

      if (!geoData.results || geoData.results.length === 0) {
        throw new Error("City not found");
      }

      const { latitude, longitude } = geoData.results[0];

      // Step 2: Fetch weather data using lat/lon
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,weathercode&timezone=auto`
      );
      const weatherData = await weatherRes.json();

      const nextFiveDays = weatherData.daily.time.slice(0, 5).map((dateStr, i) => {
        const date = new Date(dateStr);
        return {
          day: dayNames[date.getDay()],
          temp: weatherData.daily.temperature_2m_max[i],
          code: weatherData.daily.weathercode[i],
        };
      });

      setForecast(nextFiveDays);
    } catch (err) {
      setError(err.message);
      setForecast([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchWeather(city);
  }, []);

  const bgClasses = ["bg-blue-100", "bg-blue-200", "bg-blue-300", "bg-blue-400 text-white", "bg-blue-500 text-white"];

  return (
    <section className="bg-white rounded-2xl shadow-2xl p-6 h-full">
      <h2 className="text-2xl font-bold text-center mb-4 text-teal-700">5-Day Weather Forecast</h2>

      {/* City Input */}
      <div className="flex flex-col gap-3 items-center justify-center mb-6">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name..."
          className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 w-full sm:w-64"
        />
        <button
          onClick={() => fetchWeather(city)}
          className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 m-2 rounded-lg shadow"
        >
          Get Forecast
        </button>
      </div>

      {/* Error message */}
      {error && <p className="text-center text-red-500 font-medium mb-4">{error}</p>}

      {/* Forecast Display */}
      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : (
        <div className="space-y-4">
          {forecast.map((day, index) => (
            <div
              key={index}
              className={`flex justify-between items-center p-4 rounded-lg shadow-sm ${bgClasses[index % bgClasses.length]}`}
            >
              <span className="font-medium text-blue-800">{day.day}</span>
              <span className="text-xl font-semibold">
                {emojiForCode(day.code)} {day.temp}°C
              </span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default WeatherForecast;

