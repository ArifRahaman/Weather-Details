import React, { useEffect, useState } from "react";

const Time = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [search, setSearch] = useState("");

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=dd7d3a14ff1763b0f53464504648893b`;
        const response = await fetch(url);
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchApi();
  }, [search]);

  const kelvinToCelsius = (kelvin) => {
    return kelvin - 273.15;
  };

  return (
    <>
      <div className="container mx-auto p-4">
        <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md">
          <div className="px-6 py-4 bg-cyan-500">
            <input
              type="search"
              className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none bg-yellow-200 text-gray-800"
              placeholder="Enter location"
              value={search}
              onChange={handleInputChange}
            />
          </div>
          <div className="px-6 py-4 bg-gray-300 shadow-md">
            {weatherData && weatherData.main && (
              <>
                <h1 className="text-xl font-bold mb-2 text-indigo-800">
                  Location: {weatherData.name}
                </h1>
                <h2 className="text-4xl mb-2 text-red-600">
                  Temperature:{" "}
                  {kelvinToCelsius(weatherData.main.temp).toFixed(2)}°C
                </h2>
                <h3 className="text-sm text-green-700">
                  Min: {kelvinToCelsius(weatherData.main.temp_min).toFixed(2)}°C
                  | Max: {kelvinToCelsius(weatherData.main.temp_max).toFixed(2)}
                  °C
                </h3>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Time;
