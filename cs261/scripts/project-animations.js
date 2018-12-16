

//document.body.onload = startHere;
function startHere() {
    document.getElementById('overlay-text').style.opacity = "0";
    document.getElementById('overlay-text').style.transition = "all 5s";
    document.getElementById('overlay-text').innerHTML = "<h4 class='red'>Start Here</h4>";
    document.getElementById('overlay-text').style.animationName = "fadein";



}


function overlay() {

    document.getElementById('overlay-text').style.opacity = "1";
    document.getElementById('overlay-text').innerHTML = "<h4>How many baskets were ordered?</h4>";
    document.getElementById('overlay').style.transform = "scale(1.3,1.3)";
    document.getElementById('overlay').style.zIndex = "1"
    document.getElementById('overlay').style.marginLeft = "30px";
    document.getElementById('overlay').style.backgroundColor = "rgba(153,186,60,.9)";
    document.getElementById('overlay').style.textAlign = "center";
    document.getElementById('overlay-click').innerHTML = "<br/><button class='btn-primary' onclick = 'dismissOverlay()'>Done</button>";

}

function dismissOverlay() {
    var fullCount = parseInt(document.getElementById('full-count').value);
    var halfCount = parseInt(document.getElementById('half-count').value);
    if (fullCount > 0 && halfCount > 0) {

        document.getElementById('overlay-text').innerHTML = "";
        document.getElementById('overlay').style.transition = "all 2s";
        document.getElementById('overlay').style.zIndex = "0"
        document.getElementById('overlay').style.transform = "scale(1,1)";
        document.getElementById('overlay').style.marginLeft = "";
        document.getElementById('overlay').style.backgroundColor = "";
        document.getElementById('overlay').style.textAlign = "left";
        document.getElementById('overlay').style.padding = "";
        document.getElementById('overlay-click').innerHTML = "";
        document.getElementById('item-overlay').style.transition = "all 5s";
        document.getElementById('item-overlay-text').innerHTML = "<h4>Select an item for the basket</h4><br/>";
        document.getElementById('item-overlay').style.backgroundColor = "rgba(153,186,60,.9)";
        document.getElementById('item-overlay').style.transform = "scale(1.3,1.3)";
        document.getElementById('item-overlay').style.zIndex = "1"
        document.getElementById('item-overlay').style.marginLeft = "30px";
        document.getElementById('item-overlay').style.textAlign = "center";
        document.getElementById('item-image').style.textAlign = "center";
        document.getElementById('item-overlay-click').innerHTML = "<br/><button class='btn-primary' onclick = 'dismissItemOverlay()'>Done</button>";
    }

}

function dismissItemOverlay() {
    document.getElementById('item-overlay').style.transition = "all 2s";
    document.getElementById('item-overlay').style.backgroundColor = "";
    document.getElementById('item-overlay').style.transform = "scale(1,1)";
    document.getElementById('item-overlay').style.zIndex = "0"
    document.getElementById('item-overlay').style.marginLeft = "";
    document.getElementById('item-overlay').style.textAlign = "left";
    document.getElementById('item-image').style.textAlign = "center";
    document.getElementById('item-overlay-click').innerHTML = "";

    document.getElementById('per-overlay').style.transition = "all 2s";
    document.getElementById('per-overlay-text').innerHTML = "<h4>How many " + document.getElementById('item-name').value + " per basket?</h4><br/>";
    document.getElementById('per-overlay').style.backgroundColor = "rgba(153,186,60,.9)";
    document.getElementById('per-overlay').style.transform = "scale(1.3,1.3)";
    document.getElementById('per-overlay').style.zIndex = "1"
    document.getElementById('per-overlay').style.marginLeft = "30px";
    document.getElementById('per-overlay').style.textAlign = "center";
    document.getElementById('per-overlay-click').innerHTML = "<br/><button class='btn-primary' onclick = 'dismissPerOverlay()'>Done</button>";

}


function dismissPerOverlay() {
    document.getElementById('per-overlay').style.transition = "all 2s";
    document.getElementById('per-overlay').style.backgroundColor = "";
    document.getElementById('per-overlay').style.transform = "scale(1,1)";
    document.getElementById('per-overlay').style.zIndex = "0"
    document.getElementById('per-overlay').style.marginLeft = "";
    document.getElementById('per-overlay').style.textAlign = "0";
    document.getElementById('per-overlay-click').innerHTML = "";
}



