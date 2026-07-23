import axios from "axios";

export default async function getWeatherInfo(e) {
    e.preventDefault();

    const cityName = document.querySelector("input[name='city']").value.trim();

    if (!cityName) return;

    const baseUrl =
        "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline";
    const apiKey = "7SKTVELZCF26RPDTE5QYVYW55";

    try {
        const response = await axios.get(
            `${baseUrl}/${cityName}?key=${apiKey}`
        );
        // console.log(response.data);
        renderWeatherInfo(response);
    } catch (err) {
        console.error(err);
    }
}

export async function renderWeatherInfo(response) {
    const weatherDiv = document.querySelector(".weather");

    weatherDiv.innerHTML = "";

    const address = document.createElement("h2");
    address.textContent = response.data.address;

    const conditions = document.createElement("p");
    conditions.textContent = `Conditions: ${response.data.currentConditions.conditions}`;

    const humidity = document.createElement("p");
    humidity.textContent = `Humidity: ${response.data.currentConditions.humidity}`;

    const temperature = document.createElement("p");
    temperature.textContent = `Temperature: ${response.data.currentConditions.temp}`;

    weatherDiv.appendChild(address);
    weatherDiv.appendChild(conditions);
    weatherDiv.appendChild(humidity);
    weatherDiv.appendChild(temperature);
}
