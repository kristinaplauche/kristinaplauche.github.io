//###### Transitions and Transforms FLUENCY CODE ######///////

document.getElementById('outputDiv').style.borderRadius = 0 + "%";
document.getElementById('outputDiv').style.transition = "all 5s";
document.getElementById('outputDiv').style.height = 500 + "px";
document.getElementById('outputDiv').style.width = 500 + "px";
document.getElementById('outputDiv').style.padding = 3 + "%";
document.getElementById('outputDiv').style.position = "relative";
document.getElementById('outputDiv').style.backgroundColor = "lavender";
document.getElementById('sun').style.backgroundColor = "lightgoldenrodyellow";
document.getElementById('sun').style.borderRadius = 50 + "%";
document.getElementById('sun').style.position = "relative";
document.getElementById('sun').style.height = 30 + "%";
document.getElementById('sun').style.width = 30 + "%";


function startDiv() {

    document.getElementById('outputDiv').style.animationName = "skyScene";
    document.getElementById('sun').style.animationName = "sunScene";


}

function stopDiv() {

    document.getElementById('outputDiv').style.animationName = "slide";
    document.getElementById('sun').style.animationName = "orbit";


}

function pauseDiv() {
    document.getElementById('outputDiv').style.animationPlayState = "paused";
    document.getElementById('sun').style.animationPlayState = "paused";

}

function unPauseDiv() {
    document.getElementById('outputDiv').style.animationPlayState = "";
    document.getElementById('sun').style.animationPlayState = "";

}










