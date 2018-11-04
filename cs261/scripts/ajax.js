///##### JSON Weather Underground
var requestURL = 'https://api.wunderground.com/api/cdf3f3537bf94c1c/conditions/q/NY/Newyork.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL, true);
request.send();
request.onload = function () {
    var myWeather = JSON.parse(request.responseText);
    document.getElementById('desc').innerHTML = myWeather.current_observation.weather;
    document.getElementById('currentTemp').innerHTML = myWeather.current_observation.temp_f;
    document.getElementById('windBox').innerHTML = myWeather.current_observation.wind_mph;
    document.getElementById('windchill').innerHTML = myWeather.current_observation.windchill_f;
    document.getElementById('location').innerHTML = myWeather.current_observation.display_location.full;
    document.getElementById('imageIcon').innerHTML = "<img src= \"" + myWeather.current_observation.icon_url + "\" > ";

    var str = document.getElementById("imageIcon").innerHTML;
    var rep = str.replace("http:", "https:");
    document.getElementById("imageIcon").innerHTML = rep;


}

var forecast = new XMLHttpRequest();
forecast.open('GET', 'https://api.wunderground.com/api/cdf3f3537bf94c1c/forecast/q/NY/newyork.json', true);
forecast.send();
forecast.onload = function () {
    var myForecast = JSON.parse(forecast.responseText);
    console.log(myForecast);
    document.getElementById('forecast').innerHTML = myForecast.forecast.txt_forecast.forecastday["0"].fcttext;


}





