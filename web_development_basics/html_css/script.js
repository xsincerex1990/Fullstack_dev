let things = document.createElement("ul");
let info = document.createElement("p");
//queryselector() returns the first element within the document that matches the specified selector
let html = document.querySelector("body");

// textContent property represents the text content of a node and its descendants
things.textContent = 'Click anywhere outside the list to add a new list item. Click an existing list item to change its text to something else.'

document.body.appendChild(info);
document.body.appendChild(things);

html.onclick = function() { 
    var listItem = document.createElement('li');
    var listContent = prompt("what contents do you want bishhh?");
    listItem.textContent = listContent
    things.appendChild(listItem);

    
    listItem.onclick = function(e) {
        //StopPropagation() stops the bubbling of an event to parent elements, preventing any parent event handlers from being executed
        //In this case it stops html.onclick from executing again therefore stoping  prompt("what contents do you want bishhh?")
        //from running

      
        e.stopPropagation();
        var listContent = prompt("Enter new listings");
        this.textContent = listContent;
        //points to this textcontent because of how it was initiated

    }
}
