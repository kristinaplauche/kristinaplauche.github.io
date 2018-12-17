let displayIndex = 0;
let display = document.getElementById("result");
document.body.onload = renderOrders;
//document.body.onload = calculateBudget;
// form calculations function
function orderQuantities() {
    //get the user inputs from order form
    var fullCount = parseInt(document.getElementById('full-count').value);
    var halfCount = parseInt(document.getElementById('half-count').value);
    var perFull = parseFloat(document.getElementById('per-full').value);
    var perHalf = parseFloat(document.getElementById('per-half').value);
    var itemCount = parseInt(document.getElementById('item-count').value);
    var itemPrice = parseFloat(document.getElementById('item-price').value);
    var fullBudget = parseFloat(document.getElementById('full-budget').value);
    var halfBudget = parseFloat(document.getElementById('half-budget').value);

    // Calculate the quantity of that item to order
    var itemQuantity = Math.round(((fullCount * perFull) + (halfCount * perHalf)) / itemCount);
    var itemTotal = itemQuantity * itemPrice;
    var targetTotal = (fullCount * fullBudget) + (halfCount * halfBudget);
    var amountLeft = targetTotal - getGrandTotal();
    var grandTotal = getGrandTotal();
    //displayTotal();


    //Display the quantity to order to the user with the display id element. 
    // Pass the value displayed to the form by using the hidden field.

    if (isFinite(itemQuantity)) {
        document.getElementById('item-quantity-display').innerHTML = itemQuantity;
        // document.getElementById('item-quantity').value = itemQuantity;
    }

    if (isFinite(itemTotal)) {
        //document.getElementById('item-total').value = itemTotal.toFixed(2);
        document.getElementById('item-total-display').innerHTML = "$ " + itemTotal.toFixed(2);
    }

    if (isFinite(grandTotal)) {
        //document.getElementById('grand-total').value = grandTotal.toFixed(2);
        document.getElementById('grand-total-display').innerHTML = "$ " + grandTotal.toFixed(2);
    }
    //make sure the user doesn't see NaN when nothing has been calculated yet
    if (targetTotal > 0) {
        document.getElementById('target-total').innerHTML = "$" + targetTotal.toFixed(2);
    }
    //make sure the user doesn't see NaN when nothing has been calculated yet
    if (amountLeft >= 0) {
        document.getElementById('over-under').innerHTML = "Amount Left to Spend: $" + amountLeft.toFixed(2);
    }

    if (amountLeft < 0) {
        document.getElementById('grand-total-display').innerHTML = "<br/>You overspent by $ " + amountLeft.toFixed(2);

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
//document.getElementById('todayDate').innerHTML = today;

//using these to change the background color for input onfocus
function targetInput(x) {
    x.style.backgroundColor = "lightblue";
}
function targetOutput(x) {
    x.style.backgroundColor = "white";
}



//create an Object FOR ITEM CALCULATIONS//////

function OrderStuff(fullCount, halfCount, perFull, perHalf, itemCount, itemPrice, itemName) {
    this.fullCount = fullCount;
    this.halfCount = halfCount;
    this.perFull = perFull;
    this.perHalf = perHalf;
    this.itemCount = itemCount;
    this.itemPrice = itemPrice;
    this.itemName = itemName;
}

//store the field inputs as a new object
function storeLocal() {
    var stuff = new OrderStuff(
        parseFloat(document.getElementById('full-count').value),
        parseFloat(document.getElementById('half-count').value),
        parseFloat(document.getElementById('per-full').value),
        parseFloat(document.getElementById('per-half').value),
        parseFloat(document.getElementById('item-count').value),
        parseFloat(document.getElementById('item-price').value),
        document.getElementById('item-name').value
    );
    let existingOrders = JSON.parse(localStorage.getItem("stuff")) || [];
    existingOrders.push(stuff);
    localStorage.setItem("stuff", JSON.stringify(existingOrders));
    renderOrders();
    populateForm(null);

}




// display local Storage of form fields
if (typeof (Storage) !== "undefined") {

    //retrieve the local storage variables and use them on the page in the input fields
    // this uses the new object that was created when the user clicked Save
    var stuff = JSON.parse(localStorage.getItem("stuff"));

    populateForm();


} else {

    //if the browser doesn't support local storage display this message
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}



function renderOrders() {
    while (display.firstChild) {
        display.removeChild(display.firstChild);
    }
    let orders = JSON.parse(localStorage.getItem("stuff"));
    if (orders !== null) {




        let results = "<h3>Order date: " + today + " </h3><br/><table><tr><td>Boxes</td><td>Item Name</td><td>Count</td> <td>Price</td><td>Total</td><td>View</td><td>Delete</td></tr>";
        for (let i = 0; i < orders.length; i++) {

            results += "<tr><td>" + Math.round(((orders[i].fullCount * orders[i].perFull) + (orders[i].halfCount * orders[i].perHalf)) / orders[i].itemCount) + "</td><td>" + orders[i].itemName + "</td><td>" + orders[i].itemCount + " Count </td><td> $ " + orders[i].itemPrice + ".00 </td><td> $ " + (orders[i].itemCount * orders[i].itemPrice) + "</td><td><button class='green' onclick='populateForm(" + i + ")'>View</button></td><td> <a href='#' onclick='deleteItem(" + i + ")'>Delete</a></td></tr>";
        }
        + "</table>";
        display.innerHTML = results;
    }
}

// clear the local variables
function clearLocal() {
    localStorage.clear();
}


function populateForm(index) {
    if (index || index === 0) {
        displayIndex = index;
    }
    document.getElementById("full-count").value = index > -1 ? stuff[displayIndex].fullCount : "";
    document.getElementById("half-count").value = index > -1 ? stuff[displayIndex].halfCount : "";
    document.getElementById("per-full").value = index > -1 ? stuff[displayIndex].perFull : "";
    document.getElementById("per-half").value = index > -1 ? stuff[displayIndex].perHalf : "";
    document.getElementById("item-count").value = index > -1 ? stuff[displayIndex].itemCount : "";
    document.getElementById("item-price").value = index > -1 ? stuff[displayIndex].itemPrice : "";
    document.getElementById("item-name").value = index > -1 ? stuff[displayIndex].itemName : "";
    //renderIcon(index > -1 ? stuff[displayIndex].itemName : "");
    orderQuantities();

}

function deleteItem(index) {
    let orders = JSON.parse(localStorage.getItem("stuff"));
    orders.splice(index, 1);
    localStorage.setItem("stuff", JSON.stringify(orders));
    renderOrders();
}


/* function renderIcon(itemName) {
    switch (itemName) {
        case "Apples":
            document.getElementById('item-image').innerHTML = "<div id='circle'>Apples</div>";
            break;
        case "Bananas":
            document.getElementById('item-image').innerHTML = "<div id='triangle-up'>Bananas</div>";
            break;



        default:
            document.getElementById('item-image').innerHTML = "<div id=''>No Image</div>";
            break;

    }

} */

function grandTotal() {
    let orders = JSON.parse(localStorage.getItem("stuff"));
    if (orders != null) {


        let total = 0;
        for (let i = 0; i < orders.length; i++) {

            total += (orders[i].itemCount * orders[i].itemPrice);
        }
        //let total = orders.reduce((total, currentOrder) => { total += (currentOrder.itemCount * currentOrder.itemPrice); }, 0)

        return total;
    }
}

function displayTotal() {
    document.getElementById('grand-total').innerHTML = grandTotal();

}
function getGrandTotal() {
    return grandTotal();

}

/* function calculateBudget() {
    var fullCount = parseInt(document.getElementById('full-count').value);
    var halfCount = parseInt(document.getElementById('half-count').value);
    var fullBudget = parseFloat(document.getElementById('full-budget').value);
    var halfBudget = parseFloat(document.getElementById('half-budget').value);

    let budgetTotal = (fullCount * fullBudget) + (halfCount * halfBudget);
    document.getElementById('budget-total').innerHTML = "$ " + budgetTotal.toFixed(2);
    document.getElementById('amount-left').innerHTML = "<br/>Over/Under: $ " + (budgetTotal - getGrandTotal()).toFixed(2);
} */