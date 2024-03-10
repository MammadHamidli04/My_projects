const cityName = document.querySelector(".input");
const searchBtn = document.querySelector(".search");
const weatherIcon = document.querySelector(".weather-icon");
const containerInfo = document.querySelector(".container-info");
const apiKey = "88f015e66d418fed6ca200f1f5d62a61";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();
  if (response.status == 404 || cityName.value === "") {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".container-info").style.display = "none";
  } else {
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity;
    document.querySelector(".wind").innerHTML = data.wind.speed;
    document.querySelector(".description").innerHTML =
      data.weather[0].description;
    if (data.weather[0].main === "Clouds") {
      weatherIcon.src = "./images/cloudy-weather.png";
    } else if (data.weather[0].main === "Clear") {
      weatherIcon.src = "./images/clear-weather.png";
    } else if (data.weather[0].main === "Rain") {
      weatherIcon.src = "./images/rainy-weather.png";
    } else if (data.weather[0].main === "Wind") {
      weatherIcon.src = "./images/windy-weather.png"; 
    }
    containerInfo.style.display = "block";
    document.querySelector(".error").style.display = "none";
    cityName.value = "";
    console.log(data);
  }
}
searchBtn.addEventListener("click", function () {
  checkWeather(cityName.value);
});
