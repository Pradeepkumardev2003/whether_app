// JavaScript to fetch weather data from the OpenWeatherMap API

document.getElementById('getWeather').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    const apiKey = '6edf6503a50d1adf7e9a615e28234ada';  // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('weatherData').style.display = 'block';
            document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
            document.getElementById('description').textContent = `Weather: ${data.weather[0].description}`;
            document.getElementById('icon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
            document.getElementById('errorMessage').textContent = '';
        })
        .catch(error => {
            document.getElementById('weatherData').style.display = 'none';
            document.getElementById('errorMessage').textContent = error.message;
        });
});
