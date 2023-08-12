// script.js
const apiKey = '81cd48553b3884250f683b61f840db71';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Toronto&units=metric&appid=${apiKey}`;

const weatherElement = document.querySelector('.weather');

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const { name, main, weather } = data;
        const temperature = main.temp;
        const description = weather[0].description;

        weatherElement.innerHTML = `
            <h2>Current Weather in ${name}</h2>
            <p>Temperature: ${temperature}°C</p>
            <p>Description: ${description}</p>
        `;
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
        weatherElement.innerHTML = 'Error fetching weather data';
    });

