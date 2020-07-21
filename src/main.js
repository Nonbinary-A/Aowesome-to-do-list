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
