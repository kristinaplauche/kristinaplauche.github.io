
// form calculations function
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
    //make sure the user doesn't see NaN when nothing has been calculated yet
    if (targetTotal > 0) {
        document.getElementById('target-total').innerHTML = "$" + targetTotal.toFixed(2);
    }
    //make sure the user doesn't see NaN when nothing has been calculated yet
    if (amountLeft > 0) {
        document.getElementById('over-under').innerHTML = "$" + amountLeft.toFixed(2);
    } else if (amountLeft < 0) {
        document.getElementById('over-under').innerHTML = "$" + amountLeft.toFixed(2);
    }


}
//get Today's date
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

//using these to change the background color for input onfocus
function targetInput(x) {
    x.style.backgroundColor = "lightblue";
}
function targetOutput(x) {
    x.style.backgroundColor = "white";
}


// local Storage of form fields
if (typeof (Storage) !== "undefined") {

    //retrieve the local storage variables and use them on the page in the input fields
    // this uses the new object that was created when the user clicked Save
    var stuff = JSON.parse(localStorage.getItem("stuff"));
    document.getElementById("full-count").value = stuff.fullCount;
    document.getElementById("half-count").value = stuff.halfCount;
    document.getElementById("per-full").value = stuff.perFull;
    document.getElementById("per-half").value = stuff.perHalf;
    document.getElementById("item-count").value = stuff.itemCount;
    document.getElementById("item-price").value = stuff.itemPrice;



} else {

    //if the browser doesn't support local storage display this message
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}

//create an Object

function OrderStuff(fullCount, halfCount, perFull, perHalf, itemCount, itemPrice) {
    this.fullCount = fullCount;
    this.halfCount = halfCount;
    this.perFull = perFull;
    this.perHalf = perHalf;
    this.itemCount = itemCount;
    this.itemPrice = itemPrice;
}

//store the field inputs as a new object
function storeLocal() {
    var stuff = new OrderStuff(
        parseFloat(document.getElementById('full-count').value),
        parseFloat(document.getElementById('half-count').value),
        parseFloat(document.getElementById('per-full').value),
        parseFloat(document.getElementById('per-half').value),
        parseFloat(document.getElementById('item-count').value),
        parseFloat(document.getElementById('item-price').value)
    );
    localStorage.setItem("stuff", JSON.stringify(stuff));
}



// clear the local variables
function clearLocal() {
    localStorage.clear();
}