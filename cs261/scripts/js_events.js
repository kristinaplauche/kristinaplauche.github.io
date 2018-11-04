

function orderQuantities() {
    //get the user inputs from order form
    var fullCount = parseFloat(document.getElementById('full-count').value);
    var halfCount = parseFloat(document.getElementById('half-count').value);
    var perFull = parseFloat(document.getElementById('per-full').value);
    var perHalf = parseFloat(document.getElementById('per-half').value);
    var itemCount = parseFloat(document.getElementById('item-count').value);
    var itemPrice = parseFloat(document.getElementById('item-price').value);
    var fullBudget = parseFloat(document.getElementById('full-budget').value);
    var halfBudget = parseFloat(document.getElementById('half-budget').value);

    // Calculate the quantity of that item to order
    var itemQuantity = Math.round(((fullCount * perFull) + (halfCount * perHalf)) / itemCount);
    var itemTotal = itemQuantity * itemPrice;
    var targetTotal = (fullCount * fullBudget) + (halfCount * halfBudget);
    var amountLeft = targetTotal - itemTotal;
    var grandTotal = itemQuantity * itemPrice * 1.05;

    //Display the quantity to order to the user
    document.getElementById('item-quantity').value = itemQuantity;
    document.getElementById('item-total').value = itemTotal.toFixed(2);
    document.getElementById('grand-total').value = grandTotal.toFixed(2);
    if (targetTotal > 0) {
        document.getElementById('target-total').innerHTML = "$" + targetTotal.toFixed(2);
    }
    if (amountLeft > 0) {
        document.getElementById('over-under').innerHTML = "$" + amountLeft.toFixed(2);
    }


}

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();

if (dd < 10) {
    dd = '0' + dd
}

if (mm < 10) {
    mm = '0' + mm
}

today = mm + '/' + dd + '/' + yyyy;
document.getElementById('todayDate').innerHTML = today;


function targetInput(x) {
    x.style.backgroundColor = "lightblue";
}
function targetOutput(x) {
    x.style.backgroundColor = "white";
}

if (typeof (Storage) !== "undefined") {
    // Store
    function storeLocal() {
        var fullCount = parseFloat(document.getElementById('full-count').value);
        var halfCount = parseFloat(document.getElementById('half-count').value);
        var perFull = parseFloat(document.getElementById('per-full').value);
        var perHalf = parseFloat(document.getElementById('per-half').value);
        var itemCount = parseFloat(document.getElementById('item-count').value);
        var itemPrice = parseFloat(document.getElementById('item-price').value);


        localStorage.setItem("fullCount", fullCount);
        localStorage.setItem("halfCount", halfCount);
        localStorage.setItem("perFull", perFull);
        localStorage.setItem("perHalf", perHalf);
        localStorage.setItem("itemCount", itemCount);
        localStorage.setItem("itemPrice", itemPrice);


        // Retrieve
        //document.getElementById("result").innerHTML = localStorage.getItem("successMessage");

    }



} else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}
document.getElementById("full-count").value = localStorage.getItem("fullCount");
document.getElementById("half-count").value = localStorage.getItem("halfCount");
document.getElementById("per-full").value = localStorage.getItem("perFull");
document.getElementById("per-half").value = localStorage.getItem("perHalf");
document.getElementById("item-count").value = localStorage.getItem("itemCount");
document.getElementById("item-price").value = localStorage.getItem("itemPrice");


function clearLocal() {
    localStorage.clear();
}