
var request = new XMLHttpRequest();
request.open('GET', "https://kristinaplauche.github.io/data/service-prices.json", true);
request.responseType = 'json';
request.send();
request.onload = function () {
    var repairPrice = request.response;
    document.getElementById('tune-up').innerHTML = repairPrice.services[0].price;

    document.getElementById('tire').innerHTML = repairPrice.services[1].price;

    document.getElementById('chain').innerHTML = repairPrice.services[2].price;

    document.getElementById('rim').innerHTML = repairPrice.services[3].price;

}
