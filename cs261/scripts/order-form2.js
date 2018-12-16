



document.getElementById('item-name').onchange = function itemValues(event) {
    let itemName = event.target.value;

    switch (itemName) {

        case "Apples":
            document.getElementById('item-count').value = 88;
            document.getElementById('item-price').value = 25;
            document.getElementById('item-title').innerHTML = document.getElementById('item-name').value;
            // document.getElementById('item-name').onclick = orderQuantities();
            document.getElementById('item-image').innerHTML = "<div id='circle'></div>"
            break;

        case "Bananas":
            document.getElementById('item-count').value = 17;
            document.getElementById('item-price').value = 22;
            document.getElementById('item-title').innerHTML = document.getElementById('item-name').value;
            document.getElementById('item-name').onclick = orderQuantities();
            document.getElementById('item-image').innerHTML = "<div id='triangle-up'></div>"
            break;
        case "Pears":
            document.getElementById('item-count').value = 120;
            document.getElementById('item-price').value = 35;
            document.getElementById('item-title').innerHTML = document.getElementById('item-name').value;
            document.getElementById('item-name').onclick = orderQuantities();

            break;
        case "Oranges":

            document.getElementById('item-count').value = 80;
            document.getElementById('item-price').value = 16;
            document.getElementById('item-title').innerHTML = document.getElementById('item-name').value;
            document.getElementById('item-name').onclick = orderQuantities();

            break;
        case "Plums":

            document.getElementById('item-count').value = 200;
            document.getElementById('item-price').value = 28;
            document.getElementById('item-title').innerHTML = document.getElementById('item-name').value;
            document.getElementById('item-name').onclick = orderQuantities();

            break;
        case "Pineapple":
            document.getElementById('item-count').value = 8;
            document.getElementById('item-price').value = 12;
            document.getElementById('item-title').innerHTML = document.getElementById('item-name').value;
            document.getElementById('item-name').onclick = orderQuantities();
            break;
        default:

            break;

    }





}


/* fetch.get('https://api.wunderground.com/api/cdf3f3537bf94c1c/forecast/q/NY/newyork.json')
    .then(function (data) { return data.json() })
    .then(function (data) {
        document.getElementById('high').value = data.forecast.high.fahrenheit;
        document.getElementById('low').value = data.forecast.low.fahrenheit;
        document.getElementById('conditions').value = data.forecast.conditions;

    }) */
