
var temp = parseFloat(document.getElementById('temperatureBox').innerHTML);
var wind = parseFloat(document.getElementById('windBox').innerHTML);
document.getElementById('windchill').innerHTML = Math.round((35.74 + (.6215 * temp) - (35.75 * Math.pow(wind, .16)) + (.4275 * temp * (Math.pow(wind, .16)))) * 100) / 100;


