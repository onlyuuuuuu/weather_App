const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
let weatherIcon = document.querySelector("#weather-icon");

const apikey = "d89a947e482e5272c34ef4fd9c730576";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

async function checkweather(city) {
    const response = await fetch(apiurl + city+ `&appid=${apikey}`);
    const data = await response.json();
    console.log(data);
    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " m/s";
    console.log(weatherIcon);
    switch(data.weather[0].main) 
    {
        case "Clouds":
            weatherIcon.src = "./images/clouds.png";
            break;
        case "Clear":
            weatherIcon.src = "./images/clear.png";
            break;
        case "Rain":
            weatherIcon.src = "./images/rain.png";
            break;
        case "Drizzle":
            weatherIcon.src = "./images/drizzle.png";
            break;
        case "Mist":
            weatherIcon.src = "./images/mist.png";
            break;
    }
}

function handleSearch() {
    const cityInput = document.getElementById("cityInput");
    const city = cityInput.value;
    if (city) {
      checkweather(city);
    } else {
      alert("Please enter a city name.");
    }
  }

