import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./weather.css";

export default function Weather({ updateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  const api_url = "http://api.openweathermap.org/data/2.5/weather";
  const api_key = "1ee03d0adcccc7ba171457c59e2f214d";

  const getWeatherInfo = async () => {
    try {
      const response = await fetch(
        `${api_url}?q=${city}&appid=${api_key}&units=metric`
      );
      if (!response.ok) {
        throw new Error("City not found");
      }
      const jsonResponse = await response.json();
      const result = {
        city: jsonResponse.name,
        temp: jsonResponse.main.temp,
        min_temp: jsonResponse.main.temp_min,
        max_temp: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
        pressure: jsonResponse.main.pressure,
      };

      setError(false); // Reset error state on successful fetch
      return result;
    } catch (err) {
      setError(true);
      console.error(err);
      return null; // Return null in case of an error
    }
  };

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newInfo = await getWeatherInfo();
    if (newInfo) {
      updateInfo(newInfo);
    }
  };

  return (
    <div className="weather">
      <h4>Mini Weather App</h4>
      <form
        className="inputfield"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          id="outlined-basic"
          name="city"
          label="Enter City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleInputChange}
        />
        <br />
        <Button variant="contained" color="primary" type="submit">
          Search
        </Button>
        {error && <p className="error">City Not Found</p>}
      </form>
    </div>
  );
}
