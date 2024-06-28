# Mini Weather App

## Overview

The Mini Weather App is a simple React application that allows users to search for the current weather information of a city. It utilizes the OpenWeatherMap API to fetch weather data and displays it using Material-UI components.

## Features

- Search for weather information by city name
- Display weather information including temperature, humidity, pressure, and weather description
- Dynamic display of weather images based on weather conditions

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/react-weather-app.git
   cd react-weather-app

   ```

2. install the dependencies:

   ```bash
   npm install

   ```

3. Create a .env file in the root directory and add your OpenWeatherMap API key:
   ```bash
   REACT_APP_API_URL="http://api.openweathermap.org/data/2.5/weather"
   REACT_APP_API_KEY="your_api_key_here"
   ```


## Usage.

1. Start the development server:
   ```bash
   npm start
   ```
2. Open your browser and navigate to http://localhost:3000 to see the app in action.

## Project Structure
```plaintext
react-weather-app/
├── public/
│ ├── index.html
├── src/
│ ├── App.js
│ ├── index.js
│ ├── components/
│ │ ├── WeatherApp.jsx
│ │ ├── InfoBox.jsx
│ │ ├── SearchBox.jsx
│ ├── styles/
│ │ ├── weather.css
├── .env
├── .gitignore
├── package.json
├── README.md
```

### App.js

The main component that renders the WeatherApp component and maintains the state for weather information.

### WeatherApp.jsx

Handles the weather information state and renders the SearchBox and InfoBox components.

### InfoBox.jsx

Displays the weather information in a Material-UI card. It includes weather icons and background images based on the weather conditions.

### SearchBox.jsx

Contains the input field for the city name and handles fetching weather data from the OpenWeatherMap API.

### weather.css

Contains the CSS styles for the app, including layout and responsive design.

## Dependencies

- React
- Material-UI
- dotenv

## API
The app uses the OpenWeatherMap API to fetch weather data. To use the API, you need to sign up for an API key at OpenWeatherMap.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request.

## License
This project is licensed under the MIT License.

## Contact
[Adnan Qureshi](aadiqureshi89@gmail.com) for more information and bug reports.

