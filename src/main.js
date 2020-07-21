// Definning elements
const list = document.getElementById("list");
const input = document.getElementById("textInput");
const button = document.getElementById("addButton");
// Defining counter
let counter = 0;
//Defining sort button
const sortButton = document.getElementById("sortButton");

// event add button
button.onclick = function(){
    let todoItem = input.value;
    input.value = '';
// div container 
const todoContainer = document.createElement("div");
todoContainer.className = "todoContainer";

// div textTodo object
const textTodo = document.createElement("div");
textTodo.className ="todoText"
textTodo.textContent = todoItem;

// div priority
const divPriority = document.createElement("div");
divPriority.className = "todoPriority";
// value of priority
const priority = document.getElementById("prioritySelector").value;
divPriority.textContent = priority;

// div date
const divDate = document.createElement("div");
divDate.className = "todoCreatedAt";
// get the sql date
let date = new Date().toISOString().slice(0, 19).replace('T', ' ');
divDate.textContent = date;

// appending childs to container
list.appendChild(todoContainer);
todoContainer.appendChild(divPriority);
todoContainer.appendChild(divDate);
todoContainer.appendChild(textTodo);

// counting childs for counter
counter = document.getElementById("list").childElementCount;
document.getElementById("counter").innerHTML = counter + " TODO's";
}

// sort button event
sortButton.onclick = function(){
    let sList, i, switching, b, shouldSwitch;
    sList = document.getElementById("list");
    // The loop continues till there is no switching 
    switching = true;
    while (switching) {
        switching = false;
        b = sList.getElementsByClassName("todoContainer");
        // looping through the list items
        for (i = 0; i < (b.length - 1); i++) {
            shouldSwitch = false;
            // checking which value is bigger
            if((b[i].innerHTML) < (b[i+1].innerHTML)){
                // if it's not bigger, mark as a switch and break the loop
                shouldSwitch = true;
                break;
            }
        }
    if (shouldSwitch) {
        // if the switched had happend, make it and mark it as true
        b[i].parentNode.insertBefore(b[i + 1], b[i]);
        switching = true;
           }    
        }
    }