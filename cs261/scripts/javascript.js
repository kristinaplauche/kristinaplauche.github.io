/*Times t*/
/* Input: ask the user for an integer n  
* Processing: determine all odd integers and add them together.
* Output: sum of all the odd integers between 1 and n, inclusive
*/

function fiveTimesTable() {
    var display = ""; // The table output HTML

    for (i = 1; i <= 12; i++) {
        var multiplier = 5;
        var result = i * 5;

        display += multiplier + " x " + i + " = " + result + "<br>"; //Add each line to our output HTML
    }

    document.getElementById("timesTable").innerHTML = display;
}

/* Input: The number 7 as the base variable.  
* Processing: The 5 times table from 1 to 12
* Output: print the five times table from 1 to 12 in this format:
7 x 1 = 7
7 x 2 = 14
*/
function countDown() {
    var output = "";
    var i = 1;
    while (i <= 12) {
        output += "7 x " + i + " = " + 7 * i + "<br>";
        i++;
    }
    document.getElementById('timesWhile').innerHTML = output;
}

// ##### Toggle div closed

/*function closeD() {
    document.getElementById('close').style.display = 'none';
}

function closeDiv() {
    var x = document.getElementById('close');
    if (x.style.display = 'block') {
        x.style.display = 'none';
    }
} */

function gearList() {
    var gear = { footwear: "running shoes", hydration: "hydration backpack", media: "earbuds", safety: "flashlight" };
    var text = "";
    var x;
    for (x in gear) {
        text += gear[x] + "</br>";
    }

    document.getElementById('gear').innerHTML = text;

}

function showKids() {
    var kids = ["Joshua", "Devin", "Nicole", "Tyler", "Bryce", "Chase", "Grant", "Aden"];
    var text = "";
    var i = 0;
    do {
        text += "<br>My child number " + (i + 1) + " is named " + kids[i];
        i++;
    }
    while (i < 8);
    document.getElementById("showKids").innerHTML = text;
}

// if, else, and else if
function timeGreeting() {
    var time = new Date().getHours();
    if (time < 10) {
        greeting = "Rise and shine!";
    } else if (time < 20) {
        greeting = "Seize the day.";
    } else {
        greeting = "Nighty night.";
    }
    document.getElementById("hiTime").innerHTML = greeting;
}


// SWITCH STATEMENT
function checkWeather() {
    var text;
    var weather = document.getElementById("myInput").value;

    switch (weather) {
        case "hot":
            text = "<strong>You should wear sandals.</strong>";
            break;
        case "rainy":
            text = "<strong>You should wear galoshes.</strong>";
            break;

        case "snowy":
            text = "<strong>You should wear boots.</strong>";
            break;

        default:
            text = "<strong>Please make a selection.</strong>";
    }
    document.getElementById("weatherShoes").innerHTML = text;
}

// function, variables, and parameters fnction.

function evenOdd() {
    var number = parseInt(document.getElementById('numberInputBox').value);
    var result = isEven(number);
    document.getElementById('evenOdd').innerHTML =
        'Is ' + number + ' even? ' + result;
}
// Returns true if value is an even
// integer; otherwise returns false.
function isEven(value) {
    return (value % 2) == 0;
}

function showKidNames() {
    var kids = ["Joshua", "Devin", "Nicole", "Tyler", "Bryce", "Chase", "Grant", "Aden"];
    var text = "";
    var i = 0;
    do {
        text += "<h4>" + kids[i] + "</h4>";
        i++;
    }
    while (i < 8);
    document.getElementById("showKidNames").innerHTML = text;
}