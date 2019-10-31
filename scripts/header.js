var request = new XMLHttpRequest();
request.open('GET', "https://kristinaplauche.github.io/scripts/header.json", true);
request.responseType = 'json';
request.send();
request.onload = function () {
    var headerInfo = request.response;
    document.getElementById('name').innerHTML = headerInfo.header[0].name;
    document.getElementById('title').innerHTML = headerInfo.header[0].title;}
