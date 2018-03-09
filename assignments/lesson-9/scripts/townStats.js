
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
