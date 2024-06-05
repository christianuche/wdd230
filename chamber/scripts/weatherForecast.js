const apiKey = '74197396bec3354ca932de15f887aaf9'; // Replace with your actual API key
const city = 'Ohafia'; // Replace with your city name
const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

async function fetchWeatherData() {
    try {
        const [currentResponse, forecastResponse] = await Promise.all([
            fetch(currentWeatherUrl),
            fetch(forecastUrl)
        ]);

        if (!currentResponse.ok || !forecastResponse.ok) {
            throw new Error('Failed to fetch weather data');
        }

        const currentData = await currentResponse.json();
        const forecastData = await forecastResponse.json();

        displayCurrentWeather(currentData);
        displayForecast(forecastData);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function displayCurrentWeather(data) {
    document.getElementById('current-temp').textContent = data.main.temp.toFixed(1);
    document.getElementById('weather-desc').textContent = data.weather[0].description;
    document.getElementById('weather-icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather Icon">`;
}

function displayForecast(data) {
    const forecastDiv = document.getElementById('forecast');
    forecastDiv.innerHTML = '';

    // The API returns data in 3-hour increments, so we filter out the data to get one forecast per day
    const dailyData = data.list.filter(item => item.dt_txt.includes('12:00:00')).slice(0, 3);
    
    dailyData.forEach(item => {
        const date = new Date(item.dt_txt);
        forecastDiv.innerHTML += `
            <div class="forecast-item">
                <p>${date.toDateString()}</p>
                <p>Temp: ${item.main.temp.toFixed(1)}°C</p>
                <p>${item.weather[0].description}</p>
                <img src="https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png" alt="Weather Icon">
            </div>
        `;
    });
}

fetchWeatherData();
