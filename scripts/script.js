var list = document.createElement('ul');
var info = document.createElement('li');
var html = document.querySelector('html');

info.textContent = 'Below is a dynamic list. Click anywhere outside the list to add a new list item. Click an exisint list item to change its text to something else.';

document.body.appendChild(info);
document.body.appendChild(list);

html.onclick = function(){
    var listItem = document.createElement('li');
    var listContent = prompt('What item do you want to add to the list?');
    listItem.textContent = listContent;
    list.appendChild(listItem);

    listItem.onclick = function(e){
        e.stopPropagation();
        var listContent = prompt('Enter new content for your list here');
        this.textContent = listContent;
    }
}

