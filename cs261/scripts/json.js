///##### JSON Weather Underground
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
var request = new XMLHttpRequest();
request.open('GET', "https://byui-cit230.github.io/weather/data/towndata.json", true);
request.responseType = 'json';
request.send();
request.onload = function () {
    var townStats = request.response;
    document.getElementById('founded-0').innerHTML = townStats.towns[0].yearFounded;
    document.getElementById('motto-0').innerHTML = townStats.towns[0].motto;
    document.getElementById('population-0').innerHTML = townStats.towns[0].currentPopulation;
    document.getElementById('rainfall-0').innerHTML = townStats.towns[0].averageRainfall;

    document.getElementById('founded-1').innerHTML = townStats.towns[1].yearFounded;
    document.getElementById('motto-1').innerHTML = townStats.towns[1].motto;
    document.getElementById('population-1').innerHTML = townStats.towns[1].currentPopulation;
    document.getElementById('rainfall-1').innerHTML = townStats.towns[1].averageRainfall;

    document.getElementById('founded-3').innerHTML = townStats.towns[3].yearFounded;
    document.getElementById('motto-3').innerHTML = townStats.towns[3].motto;
    document.getElementById('population-3').innerHTML = townStats.towns[3].currentPopulation;
    document.getElementById('rainfall-3').innerHTML = townStats.towns[3].averageRainfall;
}

    ^^^^^^| < MAMA |<

    <mama>
        < mama_K >
            /\/\/-\/\/\/-\|<

        <mama.K> {mama.K}  [mama.K] (mama.K) mama.K()  mama.K   