document.addEventListener("DOMContentLoaded", () => {
  getForm().addEventListener("submit", processFormSubmit)
});

function processFormSubmit(event) {
  event.preventDefault();
  let toDo = event.target.aa.value;
  
  addTask(toDo);
  event.target.reset();
}

function deleteListItem(event) {
  let funnyClass = event.target.className;
  document.querySelectorAll(`.${funnyClass}`).forEach(e => e.remove());
}

/*
  creating <li> tag in to-do list
*/

function addTask(string) {
  let form = getList();
  let listItem = document.createElement("li");
  let count = document.querySelectorAll("li").length + 1;
  let deleteButton = document.createElement("button");
  deleteButton.innerText = "DELETE"
  listItem.className = `funny-class-${count}`
  deleteButton.className = `funny-class-${count}`
  deleteButton.addEventListener("click", deleteListItem)

  listItem.innerText = string;

  form.appendChild(listItem);
  form.appendChild(deleteButton);
}

function getForm() {
  return document.getElementById("create-task-form");
}

function getList() {
  return document.getElementById("tasks");
}
