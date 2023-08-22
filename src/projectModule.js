import { todoForm } from "./formGenerator";
import task from "./todoModule.js";
import { updateContent } from "./uiModule";
import "./style/mainStyle.css";

export class project {
  constructor(name) {
    this.tasks = [];
    this.name = name;
  }
  getTasks() {
    return this.tasks;
  }
  getName() {
    return this.name;
  }
  addTask(obj) {
    this.tasks.push(obj);
  }
  removeTask(obj) {
    const ind = this.tasks.indexOf(obj);
    if (ind != -1) this.tasks.splice(ind, 1);
  }
}

// Add task button for the specific project
function createAddButton(projObj) {
  const todoAddBtn = document.createElement("button");
  todoAddBtn.textContent = "Add Task";
  todoAddBtn.className = "card-button";
  const extraDiv = document.createElement("div");
  todoAddBtn.addEventListener("click", () => {
    const form = todoForm();
    const backButton = document.createElement("button");

    const submitButton = document.createElement("button");
    submitButton.classList.add("formBtn", "card-button");
    submitButton.textContent = "Submit";
    backButton.textContent = "Back";
    backButton.type="button";
    backButton.addEventListener('click',()=>{
      updateContent(showProject(projObj));
    })
    backButton.classList.add("formBtn","card-button"); 
    form.firstChild.append(backButton);
    form.firstChild.append(submitButton); 
    updateContent(form);
    const formElement = form.firstChild;
    formElement.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(formElement);
      let title = formData.get("title");
      let description = formData.get("description");
      let priority = formData.get("priority");
      let date = formData.get("date");
      const obj = new task(title, description, date, priority);
      projObj.addTask(obj);
      updateContent(showProject(projObj));
    });
  });
  extraDiv.append(todoAddBtn);
  return extraDiv;
}

//creates separate task elements from the provided task object and project
function createTaskElement(taskObj, projObj) {
  const element = document.createElement("div");
  element.classList.add("todoObject", "card");
  const taskHeader = document.createElement("div");
  taskHeader.className = "taskHeader";
  const title = document.createElement("div");
  title.textContent = taskObj.getTitle();
  title.className = "card-title";
  const priorityBadge = document.createElement("div");
  priorityBadge.className = "priorityBadge";

  const description = document.createElement("div");
  description.textContent = taskObj.getDescription();
  description.className = "card-content";

  const date = document.createElement("div");
  date.textContent = taskObj.getDate();

  const delButton = document.createElement("button");
  delButton.textContent = "Delete";
  delButton.classList.add("card-button")
  delButton.addEventListener("click", () => {
    projObj.removeTask(taskObj);
    updateContent(showProject(projObj));
  });
  
  if (taskObj.priority == "high") priorityBadge.classList.add("high");
  if (taskObj.priority == "low") priorityBadge.classList.add("low");
  if (taskObj.priority == "medium") priorityBadge.classList.add("medium");
 
  taskHeader.append(title,priorityBadge);
  element.append(taskHeader, description, date, delButton);

  return element;
}

//creates the content of a project - has the project name , addtask button and the current tasks
export function showProject(projObj) {
  const projectContent = document.createElement("div");
  projectContent.className = "projectUI";

  const projectHeader = document.createElement("div");
  projectHeader.className = "projectHeader";

  const projectTitle = document.createElement("div");
  projectTitle.textContent = projObj.getName();

  projectHeader.append(projectTitle);
  projectHeader.append(createAddButton(projObj));

  const tasks = document.createElement("div");
  tasks.className = "projectContent";
  projObj.getTasks().forEach((task) => {
    const t = createTaskElement(task, projObj);
    tasks.append(t);
  });
  projectContent.append(projectHeader, tasks);
  return projectContent;
}
