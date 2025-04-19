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

  useEffect(() => {
    // Replace with your preferred lat/lon
    const latitude = 28.6139; // Delhi
    const longitude = 77.2090;

    const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,weathercode&timezone=auto`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        const nextFiveDays = data.daily.time.slice(0, 5).map((dateStr, i) => {
          const date = new Date(dateStr);
          return {
            day: dayNames[date.getDay()],
            temp: data.daily.temperature_2m_max[i],
            code: data.daily.weathercode[i],
          };
        });
        setForecast(nextFiveDays);
      });
  }, []);

  const bgClasses = ["bg-blue-100", "bg-blue-200", "bg-blue-300", "bg-blue-400 text-white", "bg-blue-500 text-white"];

  return (
    <section className="bg-white rounded-2xl shadow-2xl p-6 h-full">
      <h2 className="text-2xl font-bold text-center mb-4 text-teal-700">5-Day Weather Forecast</h2>
      <div className="space-y-4">
        {forecast.map((day, index) => (
          <div
            key={index}
            className={`flex justify-between items-center p-4 rounded-lg shadow-sm ${bgClasses[index % bgClasses.length]}`}
          >
            <span className={`font-medium ${index === 0 ? 'text-blue-800' : 'text-blue-800'}`}>{day.day}</span>
            <span className={`text-xl font-semibold ${index === 0 ? 'text-yellow-500' : index === 1 ? 'text-gray-700' : index === 2 ? 'text-blue-900' : 'text-white'}`}>
              {emojiForCode(day.code)} {day.temp}°C
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WeatherForecast;
