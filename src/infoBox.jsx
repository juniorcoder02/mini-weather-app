import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import "./weather.css";

export default function InfoBox({ weatherInfo }) {
  const images = {
    rainy_img:
      "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=1024x1024&w=is&k=20&c=U6uwI27fEfgEAl9j_Hz848FgLRidd9Ww0kPCkc0FZB8=",
    cold_img:
      "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=1024x1024&w=is&k=20&c=U6uwI27fEfgEAl9j_Hz848FgLRidd9Ww0kPCkc0FZB8=",
    hot_img:
      "https://media.istockphoto.com/id/1243760572/photo/heat-wave-concrept.jpg?s=1024x1024&w=is&k=20&c=aNyp4atd-QF1Pf7PG69cP0moyao0Ip2S9iXQIq9Fxls=",
  };

  if (!weatherInfo) {
    return null; // Handle null or undefined weatherInfo
  }

  const getImage = () => {
    if (weatherInfo.temp <= 10) {
      return images.cold_img;
    } else if (weatherInfo.temp > 30) {
      return images.hot_img;
    } else if (weatherInfo.humidity > 80) {
      return images.rainy_img;
    } else {
      return images.cold_img; // Default to cold_img if no other condition matches
    }
  };

  const getWeatherIcon = () => {
    switch (weatherInfo.weather) {
      case "clear sky":
        return <WbSunnyIcon />;
      case "light rain":
        return <ThunderstormIcon />;
      default:
        return <AcUnitIcon />;
    }
  };

  return (
    <div className="infobox">
      <Card sx={{ maxWidth: 345 }} className="card">
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={getImage()}
            alt="weather"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Weather Info {getWeatherIcon()}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {`City: ${weatherInfo.city}`}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {`Weather: ${weatherInfo.weather}`}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {`Temperature: ${weatherInfo.temp}°C`}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {`Feels Like: ${weatherInfo.feelsLike}°C`}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {`Humidity: ${weatherInfo.humidity}%`}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {`Pressure: ${weatherInfo.pressure} hPa`}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
