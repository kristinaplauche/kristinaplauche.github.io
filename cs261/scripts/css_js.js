//###### DOM FLUENCY CODE ######///////


document.body.onload = changeDiv;


function changeDiv() {
    // Read something from the user.
    var color = document.getElementById('theInputBox').value;
    var heightBox = document.getElementById('theHeightBox').value;
    // Convert what the user typed from text into a number.
    var height = parseFloat(heightBox);
    var widthBox = document.getElementById('theWidthBox').value;
    var width = parseFloat(widthBox);
    var radiusBox = document.getElementById('theRadiusBox').value;
    var radius = parseFloat(radiusBox);
    var font = document.getElementById('theFontBox').value;
    var fontSizeBox = document.getElementById('theFontSizeBox').value;
    var fontSize = parseFloat(fontSizeBox);



    // Display the amount of thingTwo to the user.
    document.getElementById('outputDiv').style.backgroundColor = color;
    document.getElementById('outputDiv').style.height = height + "px";
    document.getElementById('outputDiv').style.width = width + "px";
    document.getElementById('outputDiv').style.borderRadius = radius + "px";
    document.getElementById('outputDiv').style.fontFamily = font;
    document.getElementById('outputDiv').style.textAlign = "center";
    document.getElementById('outputDiv').style.fontSize = fontSize + "px";
    document.getElementById('outputDiv').style.padding = "30px";



}