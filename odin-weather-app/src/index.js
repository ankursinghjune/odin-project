import "./style.css";
import getWeatherInfo from "./weather.js";

const getWeatherInfoBtn = document.querySelector(".get-weather-info-btn");

getWeatherInfoBtn.addEventListener("click", (e) => {
    getWeatherInfo(e);
});
