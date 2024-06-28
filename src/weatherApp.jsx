import React, { useState } from "react";
import InfoBox from "./infoBox";
import Weather from "./searchBox";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState(null);

  const updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <>
      <Weather updateInfo={updateInfo} />
      {weatherInfo && <InfoBox weatherInfo={weatherInfo} />}
    </>
  );
}
