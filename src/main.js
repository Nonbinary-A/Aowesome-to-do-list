// Definning elements
const list = document.getElementById("list");
const input = document.getElementById("textInput");
const button = document.getElementById("addButton");
// Defining counter
let counter = 0;
//Defining sort button
const sortButton = document.getElementById("sortButton");

//event add button
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
//value of priority
const priority = document.getElementById("prioritySelector").value;
divPriority.textContent = priority;
//div date
const divDate = document.createElement("div");
divDate.className = "todoCreatedAt";
//get the sql date
let date = new Date().toISOString().slice(0, 19).replace('T', ' ');
divDate.textContent = date;
