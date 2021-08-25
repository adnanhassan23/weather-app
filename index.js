/**
 * Weather App
 */

// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Retrieve weather data from openweathermap
 */
getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
  const weatherPromise = fetch(FULL_URL);
  return weatherPromise.then((response) => {
    return response.json();
  });
};

/**
 * Retrieve city input and get the weather data
 */
searchCity = () => {
  const city = document.getElementById("city-input").value;
  getWeatherData(city)
    .then((res) => {
      showWeatherData(res);
    })
    .catch((error) => {
      console.log(error);
      document.getElementById("city-name").innerText =
        "Please search for a valid city";
    });
};


/**
 * Show the weather data in HTML In fahrenheit to celsius
 */
showWeatherData = (weatherData) => {
  document.getElementById("city-name").innerText = weatherData.name;
  document.getElementById("weather-type").innerText =
    weatherData.weather[0].main;
  document.getElementById("temp").innerText = (
    (weatherData.main.temp - 32) /
    1.8
  ).toFixed(2);
  document.getElementById("min-temp").innerText = (
    (weatherData.main.temp_min - 32) /
    1.8
  ).toFixed(2);
  document.getElementById("max-temp").innerText = (
    (weatherData.main.temp_max - 32) /
    1.8
  ).toFixed(2);
  document.getElementById("weather-output").classList.add("visible");
};
