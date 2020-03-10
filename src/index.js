document.addEventListener("DOMContentLoaded", () => {
  getForm().addEventListener("submit", processFormSubmit)

  
});


// event.preventDefault

function getForm() {
  return document.getElementById("create-task-form");
}

function processFormSubmit(event) {
  event.preventDefault();
  let toDo = event.target.aa.value;
  
  addTask(toDo);
  event.target.reset();
}

function deleteListItem(event) {
  event.preventDefault();
  debugger
  let button = event.target.id;

}




/*
  creating <li> tag in to-do list
*/

function addTask(string) {
  let form = getList();


  let listItem = document.createElement("li");
  let deleteButton = document.createElement("button");
  deleteButton.addEventListener("onclick", (event) => {
    event.target
  });

  listItem.innerText = string;

  // listItem.appendChild(newLI);

  form.appendChild(listItem);
  form.appendChild(deleteButton);
}



function getList() {
  return document.getElementById("tasks");
}
