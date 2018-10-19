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
    var number = parseFloat(document.getElementById('numberInputBox').value);
    var result = isEven(number);
    if (isNaN(number)) {
        document.getElementById('evenOdd').innerHTML = 'Please enter a number';
    } else if (Number.isInteger(number)) {
        if (number % 2 == 0) {
            document.getElementById('evenOdd').innerHTML = number + ' is an even number ';
        } else { document.getElementById('evenOdd').innerHTML = number + ' is an odd number '; }

    } else {
        document.getElementById('evenOdd').innerHTML = 'Please enter an integer';
    }
}

function isEven(value) {
    return (value % 2) == 0;
}
//document.getElementById('evenOdd').innerHTML =
//'Is ' + number + ' even? ' + result;
//}
// Returns true if value is an even
// integer; otherwise returns false.
//function isEven(value) {
// return (value % 2) == 0;
//}

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


/////###### JAVASCRIPT OBJECTS  ###### //////////

var character = {
    firstName: "Mama",
    lastName: "Bear",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};
document.getElementById("showMethod").innerHTML = character.fullName();


// four variables are created and assigned in a single go, 
// separated by commas
var myObj = new Object(),
    str = 'myString',
    rand = Math.random(),
    obj = new Object();

myObj.type = 'Dot syntax';
myObj['date created'] = 'String with space';
myObj[str] = 'String value';
myObj[rand] = 'Random Number';
myObj[obj] = 'Object';
myObj[''] = 'Even an empty string';
// show what is in this object in the console for learning purposes.
console.log(myObj);

/// play with objects using the college courses
var myCourse = new Course('Backend Development', 'CS 260', 'Fall 2018');
var jtsCourse = new Course('Social Media', 'COMM 315', 'Fall 2018');
var djsCourse = new Course('Software Engineering', 'CS 364', 'Fall 2018');


function Instructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

var gary = new Instructor('Gary James', 33, 'M');
var scott = new Instructor('Scott Burton', 39, 'M');

function Course(title, identifier, semester, teacher) {
    this.title = title;
    this.identifier = identifier;
    this.semester = semester;
    this.teacher = teacher;
}
var course1 = new Course('Mobile Applications', 'CS 261', 'Fall 2018', gary);
var course2 = new Course('Web Engineering', 'CS 313', 'Fall 2018', scott);
console.log(course1.teacher.name);
console.log(djsCourse.title);
for (var courses in djsCourse) {
    console.log(courses + " has value " + djsCourse[courses]);
}
for (var courses in course1) {
    console.log(courses + " is " + course1[courses]);
}
for (var courses in course1.teacher) {
    console.log(courses + " = " + course1.teacher[courses]);
}

var keys = Object.keys(course1);
for (var i = 0; i < keys.length; i++) {
    console.log(course1[keys[i]]);
}
var keys = Object.keys(course2);
for (var i = 0; i < keys.length; i++) {
    console.log(course2[keys[i]]);
}

var keys = Object.keys(course2);
for (var i = 0; i < keys.length; i++) {
    console.log(keys[i] + " equals " + course2[keys[i]]);
}

function showObjects() {
    var keys = Object.keys(course1);
    for (var i = 0; i < keys.length; i++) {
        var keyz = keys[i];
        console.log(course1[keys[i]]);
    }
}
document.getElementById("showObjects").innerHTML = course1.teacher.name;
/////###### Layered Instantiation #### /////

function writeLayer() {
    var keys = Object.keys(course1);
    var text = "";
    for (var i = 0; i < keys.length - 1; i++) {
        text += "The class " + (keys[i] + " is " + course1[keys[i]]) + ". </br>";
        //text += "The class " + (keys[i] + " is " + "course1" + "." + keys[i] + " </br>");
    }
    for (var keys1 in course1.teacher) {
        text += "The class instructor's " + keys1 + " is " + course1.teacher[keys1] + ". </br>";
    }

    document.getElementById("writeLayer").innerHTML = text;
}



///#### Simple Instantiation ######///////

///test code in console
var cube = { length: 10, width: 101, height: 109 }
for (var prop in cube) {
    console.log(prop + " has value " + cube[prop]);
}

///code for HTML
function writeProp() {
    var cube = { length: 10, width: 101, height: 109 }
    var text = "";
    for (var prop in cube) {
        text += "Cube " + (prop + " is " + cube[prop]) + " ft. </br>";
    }
    document.getElementById("writeProp").innerHTML = text;
}


//##### Object Creation
// Fruit properties and method encapsulation
var Fruit = {
    type: 'Apple', // Default value of properties
    displayType: function () {  // Method which will display type of Fruit
        console.log(this.type);
    }
};

// Create new animal type called animal1 
var fruit1 = Object.create(Fruit);
fruit1.displayType(); // Output:Apple

// Create new fruit type called Banana
var banana = Object.create(Fruit);
banana.type = 'Bananas';
banana.displayType(); // Output:Banana




