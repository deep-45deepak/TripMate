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

const WeatherForecast = ({ coor , cityName }) => {
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async ({ latitude, longitude }) => {
    setLoading(true);
    setError("");
    try {
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
    if (coor && coor.latitude && coor.longitude) {
      fetchWeather(coor);
    }
  }, [coor]);

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 w-full aspect-square flex flex-col">
      <h2 className="text-xl font-bold text-center text-teal-700 mb-4">5-Day Weather Forecast</h2>

      {/* Error */}
      {error && <p className="text-center text-red-500 font-semibold mb-2">{error}</p>}

      <h2
      className="text-center font-semibold bg-gyay-200"
      >
      {cityName} weather
      </h2>
      {/* Forecast Grid */}
      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-auto">
          {forecast.map((day, index) => (
            <div
              key={index}
              className="bg-blue-100 text-center p-3 rounded-xl shadow-md aspect-square flex flex-col justify-center items-center"
            >
              <p className="font-medium text-sm">{day.day}</p>
              <p className="text-2xl">{emojiForCode(day.code)}</p>
              <p className="font-semibold">{day.temp}°C</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WeatherForecast;
