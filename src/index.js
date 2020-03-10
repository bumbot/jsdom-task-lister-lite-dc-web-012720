document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("submit", processFormSubmit)
});


// event.preventDefault

function getForm() {
  return document.getElementById("create-task-form");
}

function getFormInfo() {

}

function processFormSubmit(event) {
  event.preventDefault;
  debugger
  let toDo = event.target.value;
}

/*


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
