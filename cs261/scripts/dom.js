//###### DOM FLUENCY CODE ######///////


document.body.onload = addElement;
function addElement() {
    // create a new div element 
    var newDiv = document.createElement("h3");
    // and give it some content 
    var newContent = document.createTextNode("What's up?");
    // add the text node to the newly created div
    newDiv.appendChild(newContent);
    //get parent div
    var parentDiv = document.getElementById("parent1");

    // add the newly created element and its content into the DOM 
    var currentDiv = document.getElementById("div1");
    parentDiv.insertBefore(newDiv, currentDiv);

    //document.body.insertBefore(newDiv, currentDiv);

}

///text Node example ///
function addTextNode(text) {
    var newtext = document.createTextNode(text),
        p1 = document.getElementById("p1");

    p1.appendChild(newtext);
}



// Append Child list example ///
function appendList() {
    var node = document.createElement("LI");
    var textnode = document.createTextNode("Carrots");
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);
}

// insert Before
function appendListBefore() {
    var newItem = document.createElement("LI");
    var textnode = document.createTextNode("Oranges");
    newItem.appendChild(textnode);

    var list = document.getElementById("myList2");
    list.insertBefore(newItem, list.childNodes[0]);
}