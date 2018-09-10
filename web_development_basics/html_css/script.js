let list = document.createElement('ul');
let info = document.createElement('p');
let html = document.querySelector('html');

info.textContent = 'Click anywhere outside the list to add a new list item. Click an existing list item to change its text to something else.';

document.body.appendChild(info);
document.body.appendChild(list);

html.onclick = function() {
    let listItem = document.createElement('li');
    let listContent = prompt('What contents do you want on the list?');
    listItem.textContent = listContent;
    list.appendChild(listItem);

    listItem.onclick = function(e) {
        e.stopPropagation();
        let listContent = prompt('Enter new content for list');
        this.textContent = listContent;
    }
} 
