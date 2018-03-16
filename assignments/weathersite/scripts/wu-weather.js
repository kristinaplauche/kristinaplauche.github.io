var requestURL = 'https://api.wunderground.com/api/cdf3f3537bf94c1c/conditions/q/MN/Franklin.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL, true);
request.send();
request.onload = function () {
    var franklinWeather = JSON.parse(request.responseText);
    document.getElementById('desc').innerHTML = franklinWeather.current_observation.weather;
    document.getElementById('currentTemp').innerHTML = franklinWeather.current_observation.temp_f;
    document.getElementById('windBox').innerHTML = franklinWeather.current_observation.wind_mph;
    document.getElementById('windchill').innerHTML = franklinWeather.current_observation.windchill_f;
    document.getElementById('imageIcon').innerHTML = "<img src= \"" + franklinWeather.current_observation.icon_url + "\" > ";

    var str = document.getElementById("imageIcon").innerHTML;
    var rep = str.replace("http:", "https:");
    document.getElementById("imageIcon").innerHTML = rep;


}

var forecast = new XMLHttpRequest();
forecast.open('GET', 'https://api.wunderground.com/api/cdf3f3537bf94c1c/forecast/q/MN/Franklin.json', true);
forecast.send();
forecast.onload = function () {
    var franklinForecast = JSON.parse(forecast.responseText);
    console.log(franklinForecast);
    document.getElementById('forecast').innerHTML = franklinForecast.forecast.txt_forecast.forecastday["0"].fcttext;


}

var greenville = new XMLHttpRequest();
greenville.open('GET', 'https://api.wunderground.com/api/cdf3f3537bf94c1c/conditions/forecast/q/MI/greenville.json', true);
greenville.send();
greenville.onload = function () {
    var greenvilleWeather = JSON.parse(greenville.responseText);
    document.getElementById('desc-g').innerHTML = greenvilleWeather.current_observation.weather;
    document.getElementById('currentTemp-g').innerHTML = greenvilleWeather.current_observation.temp_f;
    document.getElementById('windBox-g').innerHTML = greenvilleWeather.current_observation.wind_mph;
    document.getElementById('windchill-g').innerHTML = greenvilleWeather.current_observation.windchill_f;
    document.getElementById('forecast-g').innerHTML = greenvilleWeather.forecast.txt_forecast.forecastday["0"].fcttext;
    document.getElementById('imageIcon-g').innerHTML = "<img src= \"" + greenvilleWeather.current_observation.icon_url + "\" > ";

    var str = document.getElementById("imageIcon-g").innerHTML;
    var rep = str.replace("http:", "https:");
    document.getElementById("imageIcon-g").innerHTML = rep;


}

var springfield = new XMLHttpRequest();
springfield.open('GET', 'https://api.wunderground.com/api/cdf3f3537bf94c1c/conditions/forecast/q/MN/Springfield.json', true);
springfield.send();
springfield.onload = function () {
    var springfieldWeather = JSON.parse(springfield.responseText);
    document.getElementById('desc-s').innerHTML = springfieldWeather.current_observation.weather;
    document.getElementById('currentTemp-s').innerHTML = springfieldWeather.current_observation.temp_f;
    document.getElementById('windBox-s').innerHTML = springfieldWeather.current_observation.wind_mph;
    document.getElementById('windchill-s').innerHTML = springfieldWeather.current_observation.windchill_f;
    document.getElementById('forecast-s').innerHTML = springfieldWeather.forecast.txt_forecast.forecastday["0"].fcttext;
    document.getElementById('imageIcon-s').innerHTML = "<img src= \"" + springfieldWeather.current_observation.icon_url + "\" > ";

    var str = document.getElementById("imageIcon-s").innerHTML;
    var rep = str.replace("http:", "https:");
    document.getElementById("imageIcon-s").innerHTML = rep;


}



