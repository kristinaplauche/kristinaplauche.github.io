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
    document.getElementById('imageIcon').src = franklinWeather.current_observation.icon_url;

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


