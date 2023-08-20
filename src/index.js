import todoObj from "./todoModule.js";
import { todoForm } from "./formGenerator.js";
import project from "./projectModule.js";
import "./style/mainStyle.css";

const contentElement = document.querySelector("#content");
const p1 = new project("Home");

function clearContent() {
  while (contentElement.firstChild) {
    contentElement.removeChild(contentElement.firstChild);
  }
}
function createAddButton(projObj) {
  const todoAddBtn = document.createElement("button");
  todoAddBtn.textContent = projObj.getName();
  todoAddBtn.addEventListener("click", () => {
    const formElement = todoForm();
    clearContent();
    contentElement.append(formElement);
    formElement.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(formElement);
      let title = formData.get("title");
      let description = formData.get("description");
      let priority = formData.get("priority");
      let date = formData.get("date");
      const obj = new todoObj(title, description, date, priority);
      projObj.addTask(obj);
      showProject(projObj);
    });
  });
  return todoAddBtn;
}

document.body.append(createAddButton(p1), createAddButton(p2),p1btn,p2btn);
function createTodo(obj) {
  const element = document.createElement("div");
  element.classList.add("todoObject");
  const title = document.createElement("div");
  title.textContent = obj.getTitle();

  const description = document.createElement("div");
  description.textContent = obj.getDescription();

  const date = document.createElement("div");
  date.textContent = obj.getDate();

  element.append(title, description, date);
  element.addEventListener("click", () => {
    dislpayTodo(obj);
  });
  if (obj.priority == "high") element.classList.add("high");
  if (obj.priority == "low") element.classList.add("low");
  if (obj.priority == "medium") element.classList.add("medium");
  alert(obj.priority);
  return element;
}
function showProject(projObj) {
  clearContent();
  const todoElement = document.createElement("div");
  todoElement.className = "todoElement";
  projObj.getTasks().forEach((task) => {
    todoElement.append(createTodo(task));
  });
  contentElement.append(todoElement);
}

// const obj1 = new todoObj(
//   "todo-app1",
//   "this is a TOP project for js",
//   "2023-08-19",
//   "high"
// );
// const obj2 = new todoObj(
//   "todo-app2",
//   "this is a TOP project for js",
//   "2023-08-19",
//   "medium"
// );
// const obj3 = new todoObj(
//   "todo-app3",
//   "this is a TOP project for js",
//   "2023-08-19",
//   "low"
// );

// todoElement.append(createTodo(obj1));
// todoElement.append(createTodo(obj2));
// todoElement.append(createTodo(obj3));
// contentElement.append(todoElement);
// function dislpayTodo(obj) {
//   clearContent();

//   const element = document.createElement("div");
//   element.classList.add("todoObject");
//   const title = document.createElement("div");
//   title.textContent = obj.getTitle();

//   const description = document.createElement("div");
//   description.textContent = obj.getDescription();

//   const date = document.createElement("div");
//   date.textContent = obj.getDate();

//   element.append(title, description, date);
//   contentElement.append(element);
// }
