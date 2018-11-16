//###### Transitions and Transforms FLUENCY CODE ######///////

document.getElementById('outputDiv').style.borderRadius = 50 + "%";
document.getElementById('sun').style.borderRadius = 50 + "%";
document.getElementById('outputDiv').style.padding = "30px";
document.getElementById('sun').style.position = "relative";
document.getElementById('sun').style.height = 30 + "%";
document.getElementById('sun').style.width = 30 + "%";


document.body.onload = changeDiv;


function changeDiv() {
    // Read something from the user.
    var seconds = document.getElementById('transitionBox').value;
    var color = document.getElementById('theInputBox').value;
    var widthBox = document.getElementById('theWidthBox').value;
    var width = parseFloat(widthBox);




    // Display the amount of thingTwo to the user.
    document.getElementById('outputDiv').style.backgroundColor = color;
    document.getElementById('outputDiv').style.transition = seconds;
    document.getElementById('outputDiv').style.height = width + "px";
    document.getElementById('outputDiv').style.width = width + "px";

    document.getElementById('sun').style.backgroundColor = "lightgoldenrodyellow";



    if (document.getElementById('outputDiv').style.backgroundColor == "lightskyblue") {
        document.getElementById('sun').style.borderRadius = 50 + "%";
        document.getElementById('sun').style.backgroundColor = "yellow";
        document.getElementById('sun').style.transition = seconds;
        document.getElementById('sun').style.transform = "scale(.75,.75)";
        document.getElementById('sun').style.left = 70 + "%";
        document.getElementById('sun').style.top = 15 + "%";
    }
    else if (document.getElementById('outputDiv').style.backgroundColor == "orange") {
        document.getElementById('sun').style.borderRadius = 50 + "%";
        document.getElementById('sun').style.backgroundColor = "lightgoldenrodyellow";
        document.getElementById('sun').style.transform = "scale(2,2)";
        document.getElementById('sun').style.transition = seconds;
        document.getElementById('sun').style.left = 35 + "%";
        document.getElementById('sun').style.top = 100 + "%";
        document.getElementById('outputDiv').style.overflow = "hidden";


    }
    else if (document.getElementById('outputDiv').style.backgroundColor == "navy") {
        document.getElementById('sun').style.borderRadius = 50 + "%";
        document.getElementById('sun').style.backgroundColor = "white";
        document.getElementById('sun').style.transform = "scale(.8,.8)";
        document.getElementById('sun').style.transition = seconds;
        document.getElementById('sun').style.left = 10 + "%";
        document.getElementById('sun').style.top = 20 + "%";





    }




}