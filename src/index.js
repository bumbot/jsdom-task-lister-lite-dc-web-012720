document.addEventListener("DOMContentLoaded", () => {
  getForm().addEventListener("submit", processFormSubmit)
});


// event.preventDefault

function getForm() {
  return document.getElementById("create-task-form");
}

function getFormInfo() {

}

function processFormSubmit(event) {
  event.preventDefault;
  let toDo = event.target.aa.value;
  
  addTask(toDo);
}




/*
  creating <li> tag in to-do list
*/

function addTask(string) {
  let listItem = document.createElement("li");
  let newLI = document.createTextNode(string);

  listItem.appendChild(newLI);

  getList().appendChild(listItem);
}


function getList() {
  return document.getElementById("tasks");
}
